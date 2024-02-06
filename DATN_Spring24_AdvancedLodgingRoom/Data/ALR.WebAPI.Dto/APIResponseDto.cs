namespace ALR.WebAPI.Dto
{
    public class APIResponseDto
    {
        public int Code { get; set; }
        public string Message { get; set; }
        public int Status { get; set; }
    }
    public class APIResponseDto<T> : APIResponseDto
    {
        public T Data { get; set; }
    }
}
