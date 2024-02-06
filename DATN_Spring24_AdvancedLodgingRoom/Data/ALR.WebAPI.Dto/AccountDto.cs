using System.ComponentModel.DataAnnotations;

namespace ALR.WebAPI.Dto
{
    public class AccountDto
    {
        [Required]
        public string Account { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public int UserRole { get; set; }
    }
}
