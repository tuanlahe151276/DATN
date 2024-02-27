using ALR.WebAPI.Service.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace ALR.WebAPI.Control.Controllers.Accounts
{
    [Route("api/account/[controller]")]
    [ApiController]
    public class AccountController : Controller
    {
        private readonly IAccountService _accountService;

        public AccountController(IAccountService accountService)
        {
            _accountService = accountService;
        }
        [HttpGet]
        public async Task<IActionResult> GetAllAccount()
        {
            var listAccount = await _accountService.GetAllAccount();
            return Ok(listAccount);
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteAccount(Guid id)
        {
            var deleteStatus = await _accountService.DeleteAccount(id);
            return Ok(deleteStatus);
        }
    }
}
