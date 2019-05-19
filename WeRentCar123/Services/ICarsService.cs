using Microsoft.AspNetCore.Http;
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
        Task<ActionResult> PutCars(int id, Cars cars);
        ActionResult<Cars> PostCars(Cars car);
        Task<ActionResult<Cars>> DeleteCars(int id);
        Task<ActionResult<Cars>> UploadImage(IFormFile file, int carId);
        Task<ActionResult> DownloadImage(int carId);

    }
}
