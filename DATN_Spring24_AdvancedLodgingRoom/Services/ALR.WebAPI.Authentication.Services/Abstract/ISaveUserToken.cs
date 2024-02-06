using ALR.WebAPI.Domain.Entities;

namespace ALR.WebAPI.Authentication.Services.Abstract
{
    public interface ISaveUserToken
    {
        string Decode(long number);
        long Encode(string str);
        Task SaveTokenAsync(UserTokenEntity token);
    }
}
