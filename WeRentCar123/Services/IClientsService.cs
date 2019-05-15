using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WeRentCar123.Models;

namespace WeRentCar123.Services
{
   public interface IClientsService
    {
        Task<ActionResult<IEnumerable<Clients>>> GetClients();
        Task<ActionResult<Clients>> GetClients(int id);
        Task<IActionResult> PutClients(int id, Clients clients);
        Task<ActionResult<Clients>> PostClients(Clients clients);
        Task<ActionResult<Clients>> DeleteClients(int id);


    }
}
