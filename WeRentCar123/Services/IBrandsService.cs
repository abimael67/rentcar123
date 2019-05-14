
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WeRentCar123.Models;

namespace WeRentCar123.Services
{
    public interface IBrandsService 
    {
        Task<ActionResult<IEnumerable<Brands>>> GetBrands();
        Task<ActionResult<Brands>> GetBrand(int id);
        Task<IActionResult> PutBrands(int id, Brands brands);
        Task<ActionResult<Brands>> PostBrands(Brands brands);
        Task<ActionResult<Brands>> DeleteBrands(int id);
        Task<List<Brands>> getBrandsWithModels(int brandId = 0);

    }
}
