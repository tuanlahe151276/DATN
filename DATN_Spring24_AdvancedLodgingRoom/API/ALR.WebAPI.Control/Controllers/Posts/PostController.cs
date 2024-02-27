using ALR.WebAPI.Authentication.Services.Abstract;
using ALR.WebAPI.Domain.Entities;
using ALR.WebAPI.Dto;
using ALR.WebAPI.Service.Abstract;
using Microsoft.AspNetCore.Mvc;

namespace ALR.WebAPI.Control.Controllers.Posts
{
    [Route("api/post/[controller]")]
    [ApiController]
    public class PostController : Controller
    {
        IPostService _postService;
       

        public PostController(IPostService postService)
        {
            _postService = postService;
        }
        

        [HttpGet]
        public async Task<IActionResult> GetAllPost()
        {
            var allPost = await _postService.GetAllPost();
            return Ok(allPost);
        }

        [HttpPost]
        [Route("update")]
        public async Task<IActionResult> UpdatePost(PostEntity post)
        {
            var updateResult = await _postService.UpdatePost(post);
            return Ok(updateResult);
        }

        [HttpDelete]
        public async Task<IActionResult> DeletePost(Guid id)
        {
            var deleteStatus = await _postService.DeletePost(id);
            return Ok(deleteStatus);
        }

        [HttpPost]
        [Route("create")]
        public async Task<IActionResult> CreateNewPost(PostDTO dto)
        {
            var createResult = await _postService.CreateNewPost(dto);
            return Ok(createResult);
        }
    }
}
