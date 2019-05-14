using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WeRentCar123.Models;

namespace WeRentCar123.Services
{
    public interface ICarsService
    {
        Task<ActionResult<IEnumerable<Cars>>> GetCars();
        Task<ActionResult<Cars>> GetCar(int id);
        Task<IActionResult> PutCars(int id, Cars cars);
        Task<ActionResult<Cars>> PostCars(Cars cars);
        ActionResult<Cars> PostCars1(Cars cars);
        Task<ActionResult<Cars>> DeleteCars(int id);


    }
}
