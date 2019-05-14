using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using WeRentCar123.Models;
using WeRentCar123.Services;

namespace WeRentCar123.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class BrandsController : ControllerBase
    {
        public IBrandsService Brands { get; }
        public BrandsController(IBrandsService brands)
        {
            Brands = brands;
        }
        // GET: api/Brands

        [HttpGet]
       public async Task<ActionResult<string>> GetAll()
        {
            try
            {
                var list = await Task.Run(() => Brands.GetBrands());
                return JsonConvert.SerializeObject(list.Result);
            }
            catch (Exception ex)
            {
                return JsonConvert.SerializeObject(new BadRequestObjectResult(ex.Message));
            }
}

        // GET: api/Brands/5
        [HttpGet("Get/{id}")]
        public async Task<ActionResult<string>> Get(int id)
        {
            if (id == 0) return new BadRequestResult();
            var brand = await Task.Run(() => Brands.GetBrand(id));
            return JsonConvert.SerializeObject(brand.Result);
        }

        // POST: api/Brands
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT: api/Brands/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
