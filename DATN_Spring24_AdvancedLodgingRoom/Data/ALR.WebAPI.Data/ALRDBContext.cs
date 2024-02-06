using ALR.WebAPI.Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace ALR.WebAPI.Database
{
    public class ALRDBContext : DbContext
    {
        public ALRDBContext(DbContextOptions options) : base(options)
        {
        }


        public DbSet<User> Users { get; set; }
        public DbSet<ProfileEntity> Profiles { get; set; }
        public DbSet<UserEntity> UserEntities { get; set; }
        public DbSet<UserTokenEntity> UserTokenEnties { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
        protected ALRDBContext()
        {
        }
    }
}
