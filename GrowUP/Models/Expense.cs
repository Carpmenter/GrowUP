using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GrowUP.Models
{
    public class Expense
    {
        public int ExpenseId { get; set; }
        public int UserId { get; set; }
        public string ExpenseType { get; set; }
        public decimal Amount { get; set; }
        public DateTime ExpenseDate { get; set; }

        public User User { get; set; }
    }
}
