using System;
using System.Collections.Generic;

namespace WeRentCar123.Models
{
    public partial class Clients
    {
        public Clients()
        {
            Cars = new HashSet<Cars>();
        }

        public int Id { get; set; }
        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public string PhoneNumber { get; set; }

        public virtual ICollection<Cars> Cars { get; set; }
    }
}
