using System.Net;

namespace ALR.WebAPI.Common.Services.APIResult
{
    public class CustomException : Exception
    {
        public CustomException() : base()
        {
        }

        public CustomException(string message) : base(message)
        {
        }

        public CustomException(string message, HttpStatusCode statusCode) : base(message)
        {

        }

        public CustomException(string message, Exception innerException) : base(message, innerException)
        {
        }
    }

    public class InvalidJsonException : CustomException
    {
        public InvalidJsonException() : base()
        {
        }
        public InvalidJsonException(string message) : base(message)
        {
        }
    }

    public class UserProfileNotFoundException : CustomException
    {
        public UserProfileNotFoundException() : base()
        {
        }
        public UserProfileNotFoundException(string message) : base(message)
        {
        }
    }

    public class CookieExpiredException : CustomException
    {
        public CookieExpiredException() : base()
        {
        }
        public CookieExpiredException(string message) : base(message)
        {
        }
    }

    public class AccessDeniedException : CustomException
    {
        public AccessDeniedException() : base()
        {
        }

        public AccessDeniedException(string message) : base(message)
        {
        }
    }

    public class Error500Exception : CustomException
    {
        public Error500Exception(string message) : base(message)
        {
        }
    }

    public class Error404Exception : CustomException
    {
        public Error404Exception(string message) : base(message)
        {
        }
    }

    public class Error401Exception : CustomException
    {
        public Error401Exception(string message) : base(message)
        {
        }
    }

    public class NotExistException : CustomException
    {
        public NotExistException(string sourceName) : base($"The {sourceName} doesn't exist.")
        {
        }
    }
}
