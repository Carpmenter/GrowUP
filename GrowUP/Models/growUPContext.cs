using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace GrowUP.Models
{
    public class growUPContext : DbContext
    {
        public growUPContext(DbContextOptions<growUPContext> options)
            : base(options)
        {
        }

        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Budget> Budget { get; set; }
        public virtual DbSet<Expense> Expense { get; set; }
        public virtual DbSet<Income> Income { get; set; }

        /* Looking into if/why this is needed 
         * Only for Model generating?
         *
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>(entity =>
            {
                entity.Property(e => e.UserId).HasColumnName("userID");

                entity.Property(e => e.FirstName)
                    .IsRequired()
                    .HasColumnName("firstName")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.LastName)
                    .IsRequired()
                    .HasColumnName("lastName")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Username)
                    .IsRequired()
                    .HasColumnName("username")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Budget>(entity =>
            {
                entity.Property(e => e.BudgetId).HasColumnName("budgetID");

                entity.Property(e => e.UserId).HasColumnName("userID");

                entity.Property(e => e.Amount)
                    .HasColumnName("amount")
                    .HasColumnType("decimal(8, 2)");

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Budget)
                    .HasForeignKey(d => d.UserId);
                    //.HasConstraintName("FK__Income__accountI__34C8D9D1");
            });

            modelBuilder.Entity<Expense>(entity =>
            {
                entity.Property(e => e.ExpenseId).HasColumnName("expenseID");

                entity.Property(e => e.UserId).HasColumnName("userID");

                entity.Property(e => e.Amount)
                    .HasColumnName("amount")
                    .HasColumnType("decimal(8, 2)");

                entity.Property(e => e.ExpenseDate)
                    .HasColumnName("expenseDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.ExpenseType)
                    .IsRequired()
                    .HasColumnName("expenseType")
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Expense)
                    .HasForeignKey(d => d.UserId);
                    //.HasConstraintName("FK__Income__accountI__34C8D9D1");
            });

            modelBuilder.Entity<Income>(entity =>
            {
                entity.Property(e => e.IncomeId).HasColumnName("incomeID");

                entity.Property(e => e.UserId).HasColumnName("userID");

                entity.Property(e => e.Amount)
                    .HasColumnName("amount")
                    .HasColumnType("decimal(8, 2)");

                entity.Property(e => e.IncomeDate)
                    .HasColumnName("incomeDate")
                    .HasColumnType("datetime");

                entity.Property(e => e.IncomeType)
                    .IsRequired()
                    .HasColumnName("incomeType")
                    .HasMaxLength(1)
                    .IsUnicode(false);

                entity.HasOne(d => d.User)
                    .WithMany(p => p.Income)
                    .HasForeignKey(d => d.UserId);
                    //.HasConstraintName("FK__Income__accountI__34C8D9D1");
            });
        } */

    }
}
