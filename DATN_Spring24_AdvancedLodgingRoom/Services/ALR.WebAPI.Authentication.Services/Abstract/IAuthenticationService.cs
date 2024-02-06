using ALR.WebAPI.Domain.Entities;
using ALR.WebAPI.Dto;
using Microsoft.AspNetCore.Authentication.JwtBearer;

namespace ALR.WebAPI.Authentication.Services.Abstract
{
    public interface IAuthenticationService
    {
        Task<UserEntity> CheckLoginAsync(AccountDto account);
        Task<(string, DateTime)> CreateRefreshToken(UserEntity account);
        Task<(string, DateTime)> CreateAccessToken(UserEntity account);
        Task<UserEntity> FindByUserID(string userID);

        Task ValidateToken(TokenValidatedContext tokenValidatedContext);
    }
}
