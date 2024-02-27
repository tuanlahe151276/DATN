using ALR.WebAPI.Database.Abstract;
using ALR.WebAPI.Domain.Entities;
using ALR.WebAPI.Service.Abstract;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ALR.WebAPI.Service.Implement
{
    public class AccountService : IAccountService
    {
        private readonly IRepository<UserEntity> _repository;

        public AccountService(IRepository<UserEntity> repository)
        {
            _repository = repository;
        }

        public async Task<List<UserEntity>> GetAllAccount()
        {
            var listUser = await _repository.GetDataAsync();
            return listUser.ToList();
        }
        public async Task<Boolean> DeleteAccount(Guid id)
        {
            try
            {
                var user = await _repository.GetByIDAsync(id);
                _repository.DeleteAsync(user);
                _repository.CommitChangeAsync();
                return true;
            }
            catch (Exception)
            {

               return false;
            }
           
        }
    }
}
