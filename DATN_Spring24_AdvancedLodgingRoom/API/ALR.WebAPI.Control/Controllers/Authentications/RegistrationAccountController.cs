using ALR.WebAPI.Authentication.Services.Abstract;
using ALR.WebAPI.Dto;
using Microsoft.AspNetCore.Mvc;

namespace ALR.WebAPI.Control.Controllers.Authentications
{
    [Route("api/Authentication/[controller]")]
    [ApiController]
    public class RegistrationAccountController : Controller
    {
        private readonly IRegistrationAccountService _registration;

        public RegistrationAccountController(IRegistrationAccountService registration)
        {
            _registration = registration;
        }
        [HttpPost]
        public async Task<IActionResult> RegisterAccount([FromBody] AccountResigterDTO account)
        {
            try
            {
                if (account == null)
                {
                    return BadRequest();
                }
                var registerAccount = await _registration.RegisterAccount(account);
                if (registerAccount == null)
                {
                    return BadRequest();
                }
                else
                {
                    return Ok(registerAccount);
                }
            }
            catch (Exception)
            {

                throw new Exception();
            }



            return View();
        }
    }
}
