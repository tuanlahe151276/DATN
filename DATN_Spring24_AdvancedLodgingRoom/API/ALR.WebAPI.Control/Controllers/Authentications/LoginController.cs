using ALR.WebAPI.Authentication.Services.Abstract;
using ALR.WebAPI.Domain.Entities;
using ALR.WebAPI.Dto;

using Microsoft.AspNetCore.Mvc;

namespace ALR.WebAPI.Control.Controllers.Authentications
{
    [Route("api/Authentication/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        IAuthenticationService _authenticationService;
        ISaveUserToken _saveUserToken;

        public LoginController(IAuthenticationService authenticationService, ISaveUserToken saveUserToken)
        {
            _authenticationService = authenticationService;
            _saveUserToken = saveUserToken;
        }
        [HttpPost]
        public async Task<IActionResult> LoginAsync([FromBody] AccountDto account)
        {
            try
            {
                if (account == null)
                {
                    return BadRequest();
                }
                var acc = await _authenticationService.CheckLoginAsync(account);
                if (acc != null)
                {
                    (string accessToken, DateTime expiredAccessToken) = await _authenticationService.CreateAccessToken(acc);
                    (string refreshToken, DateTime expiredRereshToken) = await _authenticationService.CreateRefreshToken(acc);

                    long check1 = _saveUserToken.Encode(accessToken);
                    await _saveUserToken.SaveTokenAsync(new UserTokenEntity
                    {
                        AccessToken = check1.ToString(),
                        RefreshToken = refreshToken,
                        UserID = acc.UserID,
                        ExpireDateAccessToken = expiredAccessToken,
                        ExpireDateRefreshToken = expiredRereshToken,
                        CreationTime = DateTime.Now,
                        IsActive = true
                    });
                    return Ok(new JwtDto
                    {
                        AccessToken = accessToken,
                        RefreshToken = refreshToken,
                        Account = account.Account,
                        UserID = acc.UserID
                    });
                }

                return Unauthorized();
            }
            catch
            {
                throw new Exception();
            }
        }
    }
}
