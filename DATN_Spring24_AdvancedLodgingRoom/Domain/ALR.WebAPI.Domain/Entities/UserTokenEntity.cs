using System.ComponentModel.DataAnnotations;

namespace ALR.WebAPI.Domain.Entities
{
    public class UserTokenEntity
    {
        [Key]
        [MaxLength(1000)]
        public string AccessToken { get; set; }
        public Guid UserID { get; set; }
        public DateTime ExpireDateAccessToken { get; set; }
        [MaxLength(1000)]
        public string RefreshToken { get; set; }
        public DateTime ExpireDateRefreshToken { get; set; }

        public DateTime CreationTime { get; set; }
        public Boolean IsActive { get; set; }
    }
}
