using System.ComponentModel.DataAnnotations;

namespace ALR.WebAPI.Domain.Entities
{
    public class ProfileEntity
    {
        [Key]
        public Guid ProfileID { get; set; }

        [Required]
        public string UserName { get; set; }

        [Required]
        public int Gender { get; set; }

        [Required]
        public DateTime DOB { get; set; }

        [Required]
        public string Address { get; set; }

        [Required]
        public string PhoneNumber { get; set; }
    }
}
