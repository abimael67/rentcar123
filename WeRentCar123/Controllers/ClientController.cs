using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using WeRentCar123.Models;

namespace WeRentCar123.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientController : ControllerBase
    {
         [HttpGet("[action]")]
       public IEnumerable<Clients> GetAll()
        {
            return null;
        }
    }
}