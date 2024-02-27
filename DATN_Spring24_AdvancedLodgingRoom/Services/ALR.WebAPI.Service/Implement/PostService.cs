using ALR.WebAPI.Database.Abstract;
using ALR.WebAPI.Domain.Entities;
using ALR.WebAPI.Dto;
using ALR.WebAPI.Service.Abstract;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ALR.WebAPI.Service.Implement
{
    public class PostService : IPostService
    {
        private readonly IConfiguration _configuration;
        private IRepository<PostEntity> _repository;
        public PostService(IConfiguration configuration, IRepository<PostEntity> repository)
        {
            _configuration = configuration;
            _repository = repository;
        }
        public async Task<List<PostEntity>> GetAllPost()
        {
            var result = await _repository.GetDataAsync();
            return  result.ToList();
        }

        public async Task<PostEntity> CreateNewPost(PostDTO dto)
        {
            var result = new PostEntity()
            {
                postId = Guid.NewGuid(),
                userId = Guid.NewGuid(),
                title = dto.title,
                content = dto.content,
                publicDate = DateTime.Now,
                active = 1
            };
            await _repository.InsertAsync(result);
            return result;
        }

        public async Task<PostEntity> UpdatePost (PostEntity post)
        {
            var obj = await _repository.GetByIDAsync(post.postId) as PostEntity;
            obj.title = post.title;
            obj.content = post.content;
            obj.active = post.active;
            
            _repository.UpdateAsync(obj);
            await _repository.CommitChangeAsync();
            return obj;
        }

        public async Task<Boolean> DeletePost (Guid id)
        {
            try
            {
                var obj = await _repository.GetByIDAsync(id) as PostEntity;
                _repository.DeleteAsync(obj);
                _repository.CommitChangeAsync();
                return true;
            }
            catch (Exception)
            {

                return false;
            }
        }
    }
}
