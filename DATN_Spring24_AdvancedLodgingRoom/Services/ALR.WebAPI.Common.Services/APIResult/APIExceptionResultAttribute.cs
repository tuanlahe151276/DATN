using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Net;

namespace ALR.WebAPI.Common.Services.APIResult
{
    public class APIExceptionResultAttribute : ExceptionFilterAttribute
    {
        public override void OnException(ExceptionContext context)
        {
            base.OnException(context);

            if (context.Exception is UnauthorizedAccessException)
            {
                context.Result = new ObjectResult(
                    new
                    {
                        Code = StatusCodes.Status401Unauthorized
                    });
            }
            else if (context.Exception is AccessDeniedException)
            {
                context.Result = new ObjectResult(
                    new
                    {
                        Code = StatusCodes.Status403Forbidden
                    });
            }
            else if (context.Exception is UserProfileNotFoundException)
            {
                context.Result = new ObjectResult(
                    new
                    {
                        Code = StatusCodes.Status200OK,
                        Status = (int)HttpStatusCode.Unauthorized,
                        context.Exception.Message
                    });
            }
            else if (context.Exception is Error500Exception)
            {
                context.Result = new ObjectResult(
                    new
                    {
                        Code = StatusCodes.Status500InternalServerError
                    });
            }
            else if (context.Exception is Error404Exception)
            {
                context.Result = new ObjectResult(
                    new
                    {
                        Code = StatusCodes.Status404NotFound
                    });
            }
            else
            {
                context.Result = new ObjectResult(
                    new
                    {
                        Code = StatusCodes.Status200OK,
                        Status = (int)HttpStatusCode.OK,
                        context.Exception.Message
                    });
            }
        }
    }
}
