using Microsoft.EntityFrameworkCore;
namespace StudentRegistrationFormAPI.Models
{
    public class StudentRegFormContext : DbContext
    {
        public StudentRegFormContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<StudentRegForm> StudentRegFormSet { get; set; }
    }
}
