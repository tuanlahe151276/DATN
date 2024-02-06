using ALR.WebAPI.Authentication.Services.Abstract;
using ALR.WebAPI.Authentication.Services.Implement;
using ALR.WebAPI.Database;
using ALR.WebAPI.Database.Abstract;
using ALR.WebAPI.Database.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace ALR.WebAPI.Infrastructure.Configuration
{
    public static class ConfigurationService
    {
        public static void RegisterContextDB(this IServiceCollection service, IConfiguration configuration)
        {
            service.AddDbContext<ALRDBContext>(options => options
                        .UseSqlServer(configuration.GetConnectionString("DATN_Spring24_ALR"),
                        options => options.MigrationsAssembly(typeof(ALRDBContext).Assembly.FullName)
                        ));
        }

        public static void RegiserDI(this IServiceCollection service)
        {

            service.AddScoped(typeof(IRepository<>), typeof(Repository<>));
            service.AddScoped(typeof(IAuthenticationService), typeof(AuthenticationService));
            service.AddScoped(typeof(ISaveUserToken), typeof(SaveUserToken));


        }
    }
}
