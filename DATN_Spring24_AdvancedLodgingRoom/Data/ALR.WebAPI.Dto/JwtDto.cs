﻿namespace ALR.WebAPI.Dto
{
    public class JwtDto
    {
        public string status {  get; set; }
        public string AccessToken { get; set; }
        public string RefreshToken { get; set; }
        public string Account { get; set; }
        public Guid UserID { get; set; }
    }
}
