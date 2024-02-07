using ALR.WebAPI.Authentication.Services.Abstract;
using ALR.WebAPI.Database.Abstract;
using ALR.WebAPI.Domain.Entities;
using ALR.WebAPI.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ALR.WebAPI.Authentication.Services.Implement
{
    public class RegistrationAccountService : IRegistrationAccountService
    {
        private readonly IRepository<UserEntity> _repository;

        public RegistrationAccountService(IRepository<UserEntity> repository) {
            _repository = repository;
        }

        public async Task<string> RegisterAccount(AccountResigterDTO dto)
        {
            try
            {
                
                string status = CheckConfirmPasswords(dto);
                if (!status.Equals("OK"))
                {
                    return status;
                }
                var pid = Guid.NewGuid();
                var userEntity = new UserEntity()
                {

                    Account = dto.account,
                    UserID = Guid.NewGuid(),
                    Password = dto.password,
                    Email = dto.email,
                    Active = false,
                    UserRole = dto.role,
                    ProfileID = pid,
                    Profile = new ProfileEntity()
                    {
                        ProfileID = pid,
                        UserName = dto.userName,
                        Address = dto.address,
                        Gender = dto.gender,
                        DOB = dto.DOB,
                        PhoneNumber = dto.phoneNumber,

                    }
                };
                await _repository.InsertAsync(userEntity);
                await _repository.CommitChangeAsync();
                
                return status;
            }
            catch (Exception)
            {

                throw new Exception(); 
            }
            
        }

        public string CheckConfirmPasswords(AccountResigterDTO dto)
        {
            if(!dto.password.Equals(dto.confirmPassword)) {
                return "Password not match";
            }
             return "OK";
        }

        
    }
}
