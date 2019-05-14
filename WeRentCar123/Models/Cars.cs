using System;
using System.Collections.Generic;

namespace WeRentCar123.Models
{
    public partial class Cars
    {
        public int Id { get; set; }
        public int BrandId { get; set; }
        public int ModelId { get; set; }
        public int Year { get; set; }
        public string Notes { get; set; }
        public string Color { get; set; }
        public decimal DailyPrice { get; set; }
        public int ClientId { get; set; }

        public virtual Brands Brand { get; set; }
        public virtual Clients Client { get; set; }
        public virtual Models Model { get; set; }
    }
}
