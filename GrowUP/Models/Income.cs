using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GrowUP.Models
{
    public class Income
    {
        public int IncomeId { get; set; }
        public int UserId { get; set; }
        public string IncomeType { get; set; }
        public decimal Amount { get; set; }
        public DateTime IncomeDate { get; set; }

        public User User { get; set; }
    }
}
