using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using WeRentCar123.Models;
using WeRentCar123.Services;

namespace WeRentCar123.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        public IClientsService Clients { get; }

        public ClientsController(IClientsService clients)
        {
            Clients = clients;
        }

        // GET: api/Clients
        [HttpGet]
        public  Task<ActionResult<IEnumerable<Clients>>> GetClients()
        {
            return  Clients.GetClients();
        }

        // GET: api/Clients/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Clients>> GetClients(int id)
        {
            var clients = await Clients.GetClients(id);

            if (clients == null)
            {
                return NotFound();
            }

            return clients;
        }

        // PUT: api/Clients/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutClients(int id, Clients clients)
        {
            return await Clients.PutClients(id, clients);
        }

        // POST: api/Clients
        [HttpPost]
        public async Task<ActionResult<Clients>> PostClients([FromBody] string value)
        {
            return await Clients.PostClients(JsonConvert.DeserializeObject<Clients>(value));
        }

        // DELETE: api/Clients/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Clients>> DeleteClients(int id)
        {
            return await Clients.DeleteClients(id);
        }
    }
}
