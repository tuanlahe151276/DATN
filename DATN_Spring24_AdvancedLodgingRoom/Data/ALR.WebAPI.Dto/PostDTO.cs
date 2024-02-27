using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ALR.WebAPI.Dto
{
    public class PostDTO
    {
        public string title { get; set; }

       
        public string content { get; set; }

       
        public Guid userId { get; set; }

       
        public DateTime publicDate { get; set; }

       
        public int active { get; set; }
    }
}
