using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WeRentCar123.Models;

namespace WeRentCar123.Services
{
   
    public class BrandsService : IBrandsService
    {
        private readonly RentCar123DbContext _context;

        public BrandsService(RentCar123DbContext context)
        {
            _context = context;
        }

      
        public async Task<ActionResult<IEnumerable<Brands>>> GetBrands()
        {
            try
            {
                var brands = await getBrandsWithModels();
                return new OkObjectResult(brands);
            }catch(Exception ex)
            {
                throw new Exception(ex.Message);                
            }
        }
        public async Task<List<Brands>> getBrandsWithModels(int brandId=0)
        {
            List<Brands> brands = new List<Brands>();
            var brandsAll = await _context.Brands.GroupJoin(_context.Models, b => b.Id, m => m.BrandId, (b, m) => new { Brand = b, Models = m }).ToListAsync();
            if(brandId > 0)
            {
                brands = brandsAll.Where(b => b.Brand.Id == brandId)
                    .Select(b => new Brands { Name = b.Brand.Name, Models = b.Models.ToList(), Id = b.Brand.Id })
                    .ToList();
            }
            else
            {
                brands = brandsAll
                   .Select(b => new Brands { Name = b.Brand.Name, Models = b.Models
                   .Select(m => new WeRentCar123.Models.Models { Name = m.Name, Id = m.Id })
                   .ToList(), Id = b.Brand.Id })
                   .ToList();
            }        
            
            return brands;
        }
      
        public async Task<ActionResult<Brands>> GetBrand(int id)
        {
            var brands = await _context.Brands.GroupJoin(_context.Models, b => b.Id, m => m.BrandId, (b, m) => new { Brand = b, Models = m })
                .Where(b=>b.Brand.Id == id)
                    .Select(b => new Brands { Name = b.Brand.Name, Models = b.Models.ToList(), Id = b.Brand.Id })
                    .FirstOrDefaultAsync();

            if (brands == null)
            {
                return new NotFoundResult();
            }

            return new OkObjectResult(brands);
        }
        
        public async Task<IActionResult> PutBrands(int id, Brands brands)
        {
            if (id != brands.Id)
            {
                return new BadRequestResult();
            }

            _context.Entry(brands).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!BrandsExists(id))
                {
                    return new NotFoundResult();
                }
                else
                {
                    throw;
                }
            }

            return new NoContentResult();
        }
        
        public async Task<ActionResult<Brands>> PostBrands(Brands brands)
        {
            _context.Brands.Add(brands);
            await _context.SaveChangesAsync();

            return new CreatedAtActionResult("GetBrands", "Brands", new { id = brands.Id }, brands);
        }
       
        public async Task<ActionResult<Brands>> DeleteBrands(int id)
        {
            var brands = await _context.Brands.FindAsync(id);
            if (brands == null)
            {
                return new NotFoundResult();
            }

            _context.Brands.Remove(brands);
            await _context.SaveChangesAsync();

            return brands;
        }

        private bool BrandsExists(int id)
        {
            return _context.Brands.Any(e => e.Id == id);
        }
    }
}
