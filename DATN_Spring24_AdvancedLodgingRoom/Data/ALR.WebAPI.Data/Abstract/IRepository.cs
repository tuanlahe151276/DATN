using System.Linq.Expressions;

namespace ALR.WebAPI.Database.Abstract
{
    public interface IRepository<T> where T : class
    {
        void DeleteAsync(Expression<Func<T, bool>> expression);
        void DeleteAsync(T entity);
        Task<T> GetByConditionAsync(Expression<Func<T, bool>> expression = null);
        Task<T> GetByIDAsync(object id);
        Task<IEnumerable<T>> GetDataAsync(Expression<Func<T, bool>> expression = null);
        Task InsertAsync(IEnumerable<T> entity);
        Task InsertAsync(T entity);
        Task CommitChangeAsync();
        void UpdateAsync(T entity);
    }
}
