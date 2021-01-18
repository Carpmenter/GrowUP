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
    [ApiController]
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
                //Can be removed at anytime (Working DB)
                _context.Users.Add(new User { FirstName = "Nick", LastName = "Carpenter", Username = "NICA"});
                _context.Users.Add(new User { FirstName = "John", LastName = "Jones", Username = "JOJO" });
                _context.Users.Add(new User { FirstName = "Jack", LastName = "Harris", Username = "JAHA"});
                _context.Users.Add(new User { FirstName = "Nolan", LastName = "Snyder", Username = "NOSN"});
                _context.Users.Add(new User { FirstName = "Biggie", LastName = "Rolan", Username = "BIRO"});
                _context.Users.Add(new User { FirstName = "Donald", LastName = "Trump", Username = "DOTR" });
                _context.SaveChanges();
            }
        }


        [Route("Users")]
        [HttpGet]  //, Authorize]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            return await _context.Users.ToListAsync();
        }


        [Route("Users/{id}")]
        [HttpGet]
        public async Task<ActionResult<User>> Get(int id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        [Route("Add-User")]
        [HttpPost]
        public async Task<ActionResult<IEnumerable<User>>> AddUser(User userData)
        {
            if (!ModelState.IsValid)
                return BadRequest("Invalid data.");



            await _context.Users.AddAsync(new User
            {
                FirstName = userData.FirstName,
                LastName = userData.LastName,
                Username = userData.Username
            });

            await _context.SaveChangesAsync();

            return Ok(userData);

        }

        [Route("Update-User")]
        [HttpPut]
        public async Task<ActionResult<IEnumerable<User>>> UpdateUser(User userData)
        {
            if (!ModelState.IsValid)
                return BadRequest("Not a valid model");

            var user = await _context.Users.Where(u => u.Id == userData.Id).FirstOrDefaultAsync<User>();

            if (user != null)
            {
                user.FirstName = userData.FirstName;
                user.LastName = userData.LastName;
                user.Username = userData.Username;
                await _context.SaveChangesAsync();
            }
            else
            {
                return NotFound();
            }

            return Ok(user);
        }

        [Route("Delete-User/{id}")]
        [HttpDelete]
        public async Task<ActionResult<User>> DeleteUser(int id)
        {
            if (id <= 0)
                return BadRequest("Not a valid User id");

            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return Ok(user);
        }

    }
}
