using System;
using System.Collections.Generic;

namespace WeRentCar123.Models
{
    public partial class Models
    {
        public Models()
        {
            Cars = new HashSet<Cars>();
        }

        public int Id { get; set; }
        public string Name { get; set; }
        public int? BrandId { get; set; }

        public virtual Brands Brand { get; set; }
        public virtual ICollection<Cars> Cars { get; set; }
    }
}
