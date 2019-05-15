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
    public class ClientsService : IClientsService
    {
        private readonly RentCar123DbContext _context;

        public ClientsService(RentCar123DbContext context)
        {
            _context = context;
        }

        public async Task<ActionResult<IEnumerable<Clients>>> GetClients()
        {
            var t = await _context.Clients.ToListAsync();
            return t;
        }

        public async Task<ActionResult<Clients>> GetClients(int id)
        {
            var clients = await _context.Clients.FindAsync(id);

            if (clients == null)
            {
                return new NotFoundResult();
            }

            return clients;
        }

        public async Task<IActionResult> PutClients(int id, Clients clients)
        {
            if (id != clients.Id)
            {
                return new BadRequestResult();
            }

            _context.Entry(clients).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientsExists(id))
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

       
        public async Task<ActionResult<Clients>> PostClients(Clients clients)
        {
            _context.Clients.Add(clients);
            await _context.SaveChangesAsync();

            return new CreatedAtActionResult("GetClients","Clients", new { id = clients.Id }, clients);
        }

        public async Task<ActionResult<Clients>> DeleteClients(int id)
        {
            var clients = await _context.Clients.FindAsync(id);
            if (clients == null)
            {
                return new NotFoundResult();
            }

            _context.Clients.Remove(clients);
            await _context.SaveChangesAsync();

            return clients;
        }

        private bool ClientsExists(int id)
        {
            return _context.Clients.Any(e => e.Id == id);
        }
    }
}
