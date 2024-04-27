namespace f1API.Contexts;

using f1API.Models;

using Microsoft.EntityFrameworkCore;

public class F1Context : DbContext
{

    public F1Context(DbContextOptions<F1Context> options) : base(options) { }

    public DbSet<Driver> Drivers { get; set; }
    public DbSet<Team> Teams { get; set; }

}