using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ALR.WebAPI.Domain.Entities
{
    public class UserEntity
    {
        [Key]
        public Guid UserID { get; set; }

        [Required]
        public string Account { get; set; }

        [Required]
        public string Password { get; set; }

        [Required]
        public string Email { get; set; }

        [Required]
        public int UserRole { get; set; }

        [Required]
        public bool Active { get; set; }

        [Required]
        public Guid ProfileID { get; set; }

        [ForeignKey(nameof(ProfileID))]
        public virtual ProfileEntity? Profile { get; set; }
    }
}
