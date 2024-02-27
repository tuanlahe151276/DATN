using ALR.WebAPI.Domain.Entities;
using ALR.WebAPI.Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ALR.WebAPI.Service.Abstract
{
    public interface IPostService
    {
        Task<PostEntity> CreateNewPost(PostDTO dto);
        Task<bool> DeletePost(Guid id);
        Task<List<PostEntity>> GetAllPost();
        Task<PostEntity> UpdatePost(PostEntity post);
    }
}
