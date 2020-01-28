using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GrowUP.Models
{
    public class Budget
    {
        public int BudgetId { get; set; }
        public int UserId { get; set; }
        public decimal Amount { get; set; }

        public User User { get; set; }
    }
}
