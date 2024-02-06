using ALR.WebAPI.Authentication.Services.Abstract;
using ALR.WebAPI.Base;
using ALR.WebAPI.Database.Abstract;
using ALR.WebAPI.Domain.Entities;
using ALR.WebAPI.Dto;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace ALR.WebAPI.Authentication.Services.Implement
{
    public class AuthenticationService : IAuthenticationService
    {
        private readonly IConfiguration _configuration;
        private IRepository<UserEntity> _repository;
        public AuthenticationService(IConfiguration configuration, IRepository<UserEntity> repository)
        {
            _configuration = configuration;
            _repository = repository;
        }
        public async Task<(string, DateTime)> CreateAccessToken(UserEntity account)
        {
            DateTime expiredToken = DateTime.Now.AddMinutes(15);
            var claims = new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString(), ClaimValueTypes.String, _configuration["TokenBearer:Issuer"]),
                new Claim(JwtRegisteredClaimNames.Iss,ClaimValueTypes.String, _configuration["TokenBearer:Issuer"]),
                new Claim(JwtRegisteredClaimNames.Iat, DateTimeOffset.UtcNow.ToString(), ClaimValueTypes.Integer64, _configuration["TokenBearer:Issuer"]),
                new Claim(JwtRegisteredClaimNames.Aud, "ALR - TuanLA", ClaimValueTypes.String, _configuration["TokenBearer:Issuer"]),
                new Claim(JwtRegisteredClaimNames.Exp,DateTime.Now.AddMinutes(15).ToString("dd/MM/yyyy"), ClaimValueTypes.String, _configuration["TokenBearer:Issuer"]),
                new Claim(ClaimTypes.NameIdentifier, account.Account, ClaimValueTypes.String, _configuration["TokenBearer:Issuer"]),
                new Claim(BaseConstants.USER_CLAIM_ROLE,account.UserRole.ToString(),ClaimValueTypes.String, _configuration["TokenBearer:Issuer"]),
                new Claim(BaseConstants.USER_CLAIM_ID,account.UserID.ToString(),ClaimValueTypes.String, _configuration["TokenBearer:Issuer"])
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["TokenBearer:SignatureKey"]));
            var credential = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var info = new JwtSecurityToken(
                    issuer: _configuration["TokenBearer:Issuer"],
                    audience: _configuration["TokenBearer:Audience"],
                    claims: claims,
                    notBefore: DateTime.Now,
                    expires: DateTime.Now.AddMinutes(15),
                    credential
                );
            string token = new JwtSecurityTokenHandler().WriteToken(info);
            return await Task.FromResult((token, expiredToken));
        }

        public async Task<(string, DateTime)> CreateRefreshToken(UserEntity account)
        {
            DateTime expiredToken = DateTime.Now.AddHours(1);
            var claims = new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString(), ClaimValueTypes.String, _configuration["TokenBearer:Issuer"]),
                new Claim(JwtRegisteredClaimNames.Iss,ClaimValueTypes.String, _configuration["TokenBearer:Issuer"]),
                new Claim(JwtRegisteredClaimNames.Iat, DateTimeOffset.UtcNow.ToString(), ClaimValueTypes.Integer64, _configuration["TokenBearer:Issuer"]),
                new Claim(JwtRegisteredClaimNames.Exp,DateTime.Now.AddHours(1).ToString("dd/MM/yyyy"), ClaimValueTypes.String, _configuration["TokenBearer:Issuer"]),
                new Claim(ClaimTypes.SerialNumber, Guid.NewGuid().ToString(), ClaimValueTypes.String,_configuration["TokenBearer:Issuer"])
            };

            var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["TokenBearer:SignatureKey"]));
            var credential = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            var info = new JwtSecurityToken(
                    issuer: _configuration["TokenBearer:Issuer"],
                    audience: _configuration["TokenBearer:Audience"],
                    claims: claims,
                    notBefore: DateTime.Now,
                    expires: DateTime.Now.AddHours(1),
                    credential
                );
            string refreshToken = new JwtSecurityTokenHandler().WriteToken(info);
            return await Task.FromResult((refreshToken, expiredToken));
        }

        public async Task<UserEntity> CheckLoginAsync(AccountDto account)
        {
            return await _repository.GetByConditionAsync(x => x.Account.Equals(account.Account) && x.Password.Equals(account.Password));

        }
        public async Task<UserEntity> FindByUserID(string userID)
        {
            return await _repository.GetByConditionAsync(x => x.UserID.Equals(userID));
        }

        public async Task ValidateToken(TokenValidatedContext tokenValidatedContext)
        {
            var claims = tokenValidatedContext.Principal.Claims.ToList();
            if (claims.Count == 0)
            {
                tokenValidatedContext.Fail("This token contains no information");
                return;
            }
            var identity = tokenValidatedContext.Principal.Identity as ClaimsIdentity;
            if (identity.FindFirst(JwtRegisteredClaimNames.Iss) == null)
            {
                tokenValidatedContext.Fail("This token is not issued");
                return;
            }
            if (identity.FindFirst(BaseConstants.USER_CLAIM_ID) != null)
            {
                var userid = identity.FindFirst(BaseConstants.USER_CLAIM_ID).Value;
                var user = await FindByUserID(userid);
                if (user == null)
                {
                    tokenValidatedContext.Fail($"This token invalid for userID : {userid}");
                    return;
                }
            }
            if (identity.FindFirst(JwtRegisteredClaimNames.Exp) != null)
            {
                var dateEXP = identity.FindFirst(JwtRegisteredClaimNames.Exp).Value;
                long ticks = long.Parse(dateEXP);
                var date = DateTimeOffset.FromUnixTimeSeconds(ticks).DateTime;
                var time = date.Subtract(DateTime.Now).TotalSeconds;
                if (time < 0)
                {
                    tokenValidatedContext.Fail("This token is expired");
                    return;
                }
            }


        }
    }
}
