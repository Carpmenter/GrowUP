using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace GrowUP.Models
{
    public class UserAccountDbContext : IdentityDbContext<IdentityUser>
    {
        public UserAccountDbContext(DbContextOptions<UserAccountDbContext> options)
                : base(options)
        {
            Database.EnsureCreated();
        }
    }
}