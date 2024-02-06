using ALR.WebAPI.Database.Abstract;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;
using System.Linq.Expressions;

namespace ALR.WebAPI.Database.Repositories
{
    public class Repository<T> : IRepository<T> where T : class
    {
        ALRDBContext _dbContext;

        public Repository(ALRDBContext dbContext)
        {
            _dbContext = dbContext;
        }

        public void DeleteAsync(T entity)
        {
            EntityEntry entry = _dbContext.Entry<T>(entity);
            entry.State = EntityState.Deleted;
        }

        public void DeleteAsync(Expression<Func<T, bool>> expression)
        {
            var entities = _dbContext.Set<T>().Where(expression).ToList();
            if (entities.Count > 0)
            {
                _dbContext.Set<T>().RemoveRange(entities);
            }
        }

        public async Task<T> GetByIDAsync(object id)
        {
            return await _dbContext.Set<T>().FirstAsync((Expression<Func<T, bool>>)id);
        }
        public async Task<T> GetByConditionAsync(Expression<Func<T, bool>> expression = null)
        {
            return await _dbContext.Set<T>().FirstOrDefaultAsync(expression);
        }

        public async Task<IEnumerable<T>> GetDataAsync(Expression<Func<T, bool>> expression = null)
        {
            if (expression == null)
            {
                return await _dbContext.Set<T>().ToListAsync();
            }
            return await _dbContext.Set<T>().Where(expression).ToListAsync();
        }

        public async Task InsertAsync(T entity)
        {
            await _dbContext.Set<T>().AddAsync(entity);
        }

        public async Task InsertAsync(IEnumerable<T> entity)
        {
            await _dbContext.Set<T>().AddRangeAsync(entity);
        }

        public async Task CommitChangeAsync()
        {
            try
            {
                await _dbContext.SaveChangesAsync();
            }
            catch (DbUpdateException ex)
            {
                // Xử lý lỗi khi lưu thay đổi vào cơ sở dữ liệu
                // Đối với DbUpdateException, bạn có thể truy cập vào InnerException để biết lỗi chi tiết
                throw new Exception("Lỗi khi lưu thay đổi vào cơ sở dữ liệu.", ex.InnerException);
            }
        }

        public async void UpdateAsync(T entity)
        {
            EntityEntry entry = _dbContext.Entry<T>(entity);
            entry.State = EntityState.Modified;
        }
    }
}
