using System.ComponentModel.DataAnnotations;

namespace ALR.WebAPI.Domain.Entities
{
    public class User : BaseEntity
    {
        [Required]
        public string username { get; set; }
        [Required]
        public string password { get; set; }
        [Required]
        public string email { get; set; }

    }
}
