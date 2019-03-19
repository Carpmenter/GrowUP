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
  [Authorize]
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly growUPContext _context;

        public UserController(growUPContext context)
        {
            _context = context;

            if (_context.Users.Count() == 0)
            {
                //
                _context.Users.Add(new User { FirstName = "Nick", LastName = "Carpenter", Username = "NICA" });
                _context.SaveChanges();
            }
        }

        // api/user
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }

    }
}
