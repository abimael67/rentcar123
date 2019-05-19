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

        // GET: api/Cars/GetImage/4
        [HttpGet("GetImage/{id}")]
        public Task<ActionResult> GetImage(int id)
        {
            return Cars.DownloadImage(id);
        }

        // GET: api/Cars/Get/4
        [HttpGet("Get/{id}")]
        public Task<ActionResult<Cars>> Get(int id)
        {
            return Cars.GetCar(id);
        }

        // POST: api/Cars
        [HttpPost]
        public ActionResult<Cars> Post([FromBody] string value)
        {
            return Cars.PostCars(JsonConvert.DeserializeObject<Cars>(value));
        }
          // PUT: api/Cars
        [HttpPut]
        public Task<ActionResult> Put([FromBody] string value, int carId)
        {
            return Cars.PutCars(carId, JsonConvert.DeserializeObject<Cars>(value));
        }


        // POST: api/Cars/UploadImage
        [HttpPost("UploadImage/{carId}")]
        public Task<ActionResult<Cars>> UploadImage(IFormFile file, int carId)
        {
            return Cars.UploadImage(file, carId);
        }
               
        // PUT: api/Cars/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE: api/Cars/5
        [HttpDelete("{id}")]
        public Task<ActionResult<Cars>> Delete(int id)
        {
            return Cars.DeleteCars(id);
        }
    }

    public class AttachedImage {
        public object file { get; set; }
        public int carId { get; set; }
    }

}
