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

        public int UserId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public byte[] PasswordHash { get; set; }
        public byte[] PasswordSalt { get; set; }

        
        public ICollection<Budget> Budget { get; set; }
        public ICollection<Expense> Expense { get; set; }
        public ICollection<Income> Income { get; set; } 
    }
}
