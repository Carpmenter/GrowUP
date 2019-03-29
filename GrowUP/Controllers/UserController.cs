using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GrowUP.Models;
using Microsoft.AspNetCore.Authorization;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GrowUP.Controllers
{
  //[Authorize]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly growUPContext _context;

        /*** Testing Purposes ***/
        
        /***  ***/

        public UserController(growUPContext context)
        {
            _context = context;

            if (_context.Users.Count() == 0)
            {
                //
                _context.Users.Add(new User { FirstName = "Nick", LastName = "Carpenter", Username = "NICA", Id = 1 });
                _context.Users.Add(new User { FirstName = "John", LastName = "Jones", Username = "JOJO", Id = 2 });
                _context.Users.Add(new User { FirstName = "Jack", LastName = "Harris", Username = "JAHA", Id = 3 });
                _context.Users.Add(new User { FirstName = "Nolan", LastName = "Snyder", Username = "NOSN", Id = 4 });
                _context.Users.Add(new User { FirstName = "Biggie", LastName = "Rolan", Username = "BIRO", Id = 5 });
                _context.Users.Add(new User { FirstName = "Jamal", LastName = "James", Username = "JAJA", Id = 6 });
                _context.SaveChanges();
            }
        }

        // api/user
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public ActionResult<User> Get(int id)
        {
            List<User> u = _context.Users.ToList();
            User e = new User();

            if(id >=0 && id < u.Count)
            {
                e = u.ElementAt(id);
            }

            return e;
        }
    }
}
