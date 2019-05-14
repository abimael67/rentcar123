using System;
using System.Collections.Generic;

namespace WeRentCar123.Models
{
    public partial class Brands
    {
        public Brands()
        {
            Cars = new HashSet<Cars>();
            Models = new HashSet<Models>();
        }

        public int Id { get; set; }
        public string Name { get; set; }

        public virtual ICollection<Cars> Cars { get; set; }
        public virtual ICollection<Models> Models { get; set; }
    }
}
