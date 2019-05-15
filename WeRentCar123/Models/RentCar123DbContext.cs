using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace WeRentCar123.Models
{
    public partial class RentCar123DbContext : DbContext
    {
        public RentCar123DbContext()
        {
        }

        public RentCar123DbContext(DbContextOptions<RentCar123DbContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Brands> Brands { get; set; }
        public virtual DbSet<Cars> Cars { get; set; }
        public virtual DbSet<Clients> Clients { get; set; }
        public virtual DbSet<Models> Models { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;AttachDbFilename=C:\\Users\\abimael67\\Documents\\rentcar123.mdf;Integrated Security=True;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("ProductVersion", "2.2.4-servicing-10062");

            modelBuilder.Entity<Brands>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Cars>(entity =>
            {
                entity.Property(e => e.DailyPrice).HasColumnType("decimal(18, 2)");

                entity.Property(e => e.Notes).HasMaxLength(500);

                entity.HasOne(d => d.Brand)
                    .WithMany(p => p.Cars)
                    .HasForeignKey(d => d.BrandId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Cars_To_Brands");

               

                entity.HasOne(d => d.Model)
                    .WithMany(p => p.Cars)
                    .HasForeignKey(d => d.ModelId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Cars_To_Models");
            });

            modelBuilder.Entity<Clients>(entity =>
            {
                entity.Property(e => e.Firstname)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Lastname)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.PhoneNumber)
                    .IsRequired()
                    .HasMaxLength(15)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Models>(entity =>
            {
                entity.Property(e => e.Name).HasMaxLength(10);

                entity.HasOne(d => d.Brand)
                    .WithMany(p => p.Models)
                    .HasForeignKey(d => d.BrandId)
                    .HasConstraintName("FK_Models_To_Brands");
            });
        }
    }
}
