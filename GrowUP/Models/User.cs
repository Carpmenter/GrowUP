using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GrowUP.Models
{
    public class User
    {
        public User()
        {
            Budget = new HashSet<Budget>();
            Expense = new HashSet<Expense>();
            Income = new HashSet<Income>();
        }

        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }

        
        public ICollection<Budget> Budget { get; set; }
        public ICollection<Expense> Expense { get; set; }
        public ICollection<Income> Income { get; set; } 
    }
}
