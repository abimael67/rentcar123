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
   
    public class CarsService : ICarsService
    {
        private readonly RentCar123DbContext _context;

        public CarsService(RentCar123DbContext context)
        {
            _context = context;
        }
     
        public async Task<ActionResult<IEnumerable<Cars>>> GetCars()
        {
            var brandsS = new BrandsService(_context);
            var brands = await brandsS.getBrandsWithModels();
            var cars = await getcarsFull();
            return new OkObjectResult(cars);
        }
        public async Task<List<Cars>> getcarsFull(int carId = 0)
        {
            var brandsS = new BrandsService(_context);
            var brands = await brandsS.getBrandsWithModels();
            List<Cars> cars = new List<Cars>();
            var carsAll = await _context.Cars.Join(brands, car => car.BrandId, brand => brand.Id, (c, b) => new { Car = c, Brand = b })
                .Select(c => new Cars
                {
                    Id = c.Car.Id,
                    Brand = new Brands { Name = c.Car.Brand.Name, Id = c.Car.Brand.Id },
                    Model =  c.Brand.Models.Where(m => m.Id == c.Car.ModelId).Select(m => new WeRentCar123.Models.Models { Name = m.Name, Id = m.Id}).FirstOrDefault(),
                    Year = c.Car.Year,
                    DailyPrice = c.Car.DailyPrice,
                    ClientId = c.Car.ClientId,
                    Notes = c.Car.Notes,
                    BrandId = c.Car.BrandId,
                    ModelId = c.Car.ModelId,
                    Color = c.Car.Color
                })
                .ToListAsync();

            if(carId > 0)
            {
                cars = carsAll.Where(c => c.Id == carId).ToList();
            }
            else
            {
                cars = carsAll;
            }

            return cars;
        }
        public async Task<ActionResult<Cars>> GetCar(int id)
        {
            var cars = await getcarsFull(id);

            if (cars == null)
            {
                return new NotFoundResult();
            }

            return new OkObjectResult( cars);
        }
       
        public async Task<IActionResult> PutCars(int id, Cars car)
        {
            if (id != car.Id)
            {
                return new BadRequestResult();
            }

            _context.Entry(car).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CarsExists(id))
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

       
        public ActionResult<Cars> PostCars1(Cars car)
        {
            try
            {
                _context.Cars.Add(car);
               var r =  _context.SaveChanges();
                return new OkObjectResult(car);
            }
            catch(Exception ex)
            {
                return new BadRequestObjectResult(ex.Message);
            }
            
        }

        public Task<ActionResult<Cars>> PostCars(Cars cars)
        {
            throw new NotImplementedException();
        }


        public async Task<ActionResult<Cars>> DeleteCars(int id)
        {
            var cars = await _context.Cars.FindAsync(id);
            if (cars == null)
            {
                return new NotFoundResult();
            }

            _context.Cars.Remove(cars);
            await _context.SaveChangesAsync();

            return cars;
        }

        private bool CarsExists(int id)
        {
            return _context.Cars.Any(e => e.Id == id);
        }
    }
}
