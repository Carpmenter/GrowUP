using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using GrowUP.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace GrowUP.Controllers
{
    [Route("api/[controller]")]
    public class BudgetController : Controller
    {
        private readonly growUPContext _context;

        public BudgetController(growUPContext context)
        {
            _context = context;

            if (_context.Budget.Count() == 0)
            {
                //
            }
        }

    }
}
