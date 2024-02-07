using ALR.WebAPI.Domain.Entities;
using ALR.WebAPI.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ALR.WebAPI.Authentication.Services.Abstract
{
    public interface IRegistrationAccountService
    {
        string CheckConfirmPasswords(AccountResigterDTO dto);
        Task<string> RegisterAccount(AccountResigterDTO dto);
    }
}
