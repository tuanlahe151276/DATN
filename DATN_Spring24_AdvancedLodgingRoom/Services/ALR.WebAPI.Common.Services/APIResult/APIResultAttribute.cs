using ALR.WebAPI.Dto;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using System.Net;

namespace ALR.WebAPI.Common.Services.APIResult
{
    public class APIResultAttribute : ActionFilterAttribute
    {
        public override void OnResultExecuting(ResultExecutingContext context)
        {
            if (context.Result is ObjectResult)
            {
                if (context.Result is OkObjectResult)
                {
                    context.Result = new ObjectResult(new APIResponseDto<object>
                    {
                        Code = StatusCodes.Status200OK,
                        Data = (context.Result as ObjectResult).Value
                    });
                }
                else if (context.Result is BadRequestObjectResult)
                {
                    context.Result = new ObjectResult(new APIResponseDto<object>
                    {
                        Code = StatusCodes.Status400BadRequest,
                        Status = (int)HttpStatusCode.BadRequest,
                        Data = (context.Result as BadRequestObjectResult).Value
                    });
                }
                else if (context.Result is UnauthorizedResult)
                {
                    context.Result = new ObjectResult(new APIResponseDto
                    {
                        Code = StatusCodes.Status401Unauthorized,
                        Status = (int)HttpStatusCode.Unauthorized,
                    });
                }
                else if (context.Result is NotFoundObjectResult || context.Result is NotFoundResult)
                {
                    context.Result = new ObjectResult(new APIResponseDto
                    {
                        Code = StatusCodes.Status404NotFound,
                        Status = (int)HttpStatusCode.NotFound
                    });
                }
                else if (context.Result is CreatedAtActionResult || context.Result is CreatedAtRouteResult || context.Result is CreatedResult)
                {
                    context.Result = new ObjectResult(new APIResponseDto
                    {
                        Code = StatusCodes.Status201Created,
                        Status = (int)HttpStatusCode.Created
                    });
                }
                else
                {
                    var objR = context.Result as ObjectResult;
                    context.Result = new ObjectResult(new APIResponseDto<object>
                    {
                        Code = objR.StatusCode.HasValue ? objR.StatusCode.Value : StatusCodes.Status200OK,
                        Status = (int)HttpStatusCode.OK,
                        Data = objR.Value
                    });
                }
            }
            else if (context.Result is EmptyResult)
            {
                context.Result = new ObjectResult(new APIResponseDto
                {
                    Code = StatusCodes.Status404NotFound,
                    Status = (int)HttpStatusCode.NotFound,
                });
            }
            else if (context.Result is ContentResult)
            {
                context.Result = new ObjectResult(new APIResponseDto<object>
                {
                    Code = StatusCodes.Status200OK,
                    Status = (int)HttpStatusCode.OK,
                    Data = (context.Result as ContentResult).Content
                });
            }
            else if (context.Result is StatusCodeResult)
            {
                context.Result = new ObjectResult(new APIResponseDto
                {
                    Code = (context.Result as StatusCodeResult).StatusCode,
                    Status = (context.Result as StatusCodeResult).StatusCode,
                });
            }
            else if (context.Result is JsonResult)
            {
            }
            else
            {
                var resultObj = context.Result as ObjectResult;
                context.Result = new ObjectResult(new APIResponseDto<object>
                {
                    Code = resultObj.StatusCode.HasValue ? resultObj.StatusCode.Value : StatusCodes.Status200OK,
                    Status = (int)HttpStatusCode.OK,
                    Data = resultObj.Value
                });
            }
        }
    }
}
