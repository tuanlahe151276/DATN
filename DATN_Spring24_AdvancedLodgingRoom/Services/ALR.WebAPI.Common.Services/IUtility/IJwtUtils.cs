namespace ALR.WebAPI.Common.Services.IUtility
{
    public interface IJwtUtils
    {
        public string ValidateToken(string token);
        public string GenerateToken(string token);
    }
}
