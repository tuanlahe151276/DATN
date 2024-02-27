using ALR.WebAPI.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ALR.WebAPI.Service.Abstract
{
    public interface IAccountService
    {
        Task<bool> DeleteAccount(Guid id);
        Task<List<UserEntity>> GetAllAccount();
    }
}
