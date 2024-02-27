using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ALR.WebAPI.Domain.Entities
{
    public class PostEntity
    {

        [Key]
        public Guid postId { get; set; }

        [Required]
        public string title { get; set; }

        [Required]
        public string content { get; set; }

        [Required]
        public Guid userId { get; set; }

        [Required]
        public DateTime publicDate { get; set; }

        [Required]
        public int active { get; set; }
        
    }
}
