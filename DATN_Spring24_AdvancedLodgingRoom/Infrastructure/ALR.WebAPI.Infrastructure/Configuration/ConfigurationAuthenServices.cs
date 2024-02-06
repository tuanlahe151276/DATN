using ALR.WebAPI.Authentication.Services.Abstract;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace ALR.WebAPI.Infrastructure.Configuration
{
    public static class ConfigurationAuthenServices
    {
        public static void RegisterTokenBearer(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddAuthentication(options =>
            {
                options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultSignInScheme = JwtBearerDefaults.AuthenticationScheme;
                options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
            })
                .AddJwtBearer(options =>
                {
                    options.SaveToken = true;
                    options.TokenValidationParameters = new TokenValidationParameters
                    {
                        ValidIssuer = configuration["TokenBearer:Issuer"],
                        ValidateIssuer = false,
                        ValidAudience = configuration["TokenBearer:Audience"],
                        ValidateAudience = false,
                        IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(configuration["TokenBearer:SignatureKey"])),
                        ValidateIssuerSigningKey = true,
                        ValidateLifetime = true,
                        ClockSkew = TimeSpan.Zero,
                    };

                    options.Events = new JwtBearerEvents()
                    {
                        OnTokenValidated = async context =>
                        {
                            var tokenHandler = context.HttpContext.RequestServices.GetRequiredService<IAuthenticationService>();
                            await tokenHandler.ValidateToken(context);
                        },
                        OnAuthenticationFailed = context =>
                        {
                            return Task.CompletedTask;
                        },
                        OnMessageReceived = context =>
                        {
                            return Task.CompletedTask;
                        },
                        OnChallenge = context =>
                        {
                            return Task.CompletedTask;
                        }


                    };

                });
        }
    }
}
