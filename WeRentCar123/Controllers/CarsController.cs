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
    public class CarsController : ControllerBase
    {
        public ICarsService Cars { get; }

        public CarsController (ICarsService cars)
        {
            Cars = cars;
        }
        // GET: api/Cars
        [HttpGet]
        public async Task<ActionResult<string>> GetAll()
        {
            try
            {
                var list = await Task.Run(() => Cars.GetCars());
                return JsonConvert.SerializeObject(list.Result);
            }
            catch (Exception ex)
            {
                return JsonConvert.SerializeObject(new BadRequestObjectResult(ex.Message));
            }
        }

        // GET: api/Cars/5
        [HttpGet("Get/{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST: api/Cars
        [HttpPost]
        public void Post([FromBody] string value)
        {
            Cars.PostCars1(JsonConvert.DeserializeObject<Cars>(value));
        }

        // PUT: api/Cars/5
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
