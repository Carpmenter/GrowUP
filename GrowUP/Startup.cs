using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using GrowUP.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace GrowUP
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.Configure<JWTSettings>(Configuration.GetSection("JWTSettings"));

            services.AddCors();

            services.AddDbContext<growUPContext>(opt =>
                opt.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));

            /*services.AddDbContext<UserAccountDbContext>(opt =>
                opt.UseSqlServer(Configuration.GetConnectionString("DefaultConnection")));*/

            services.AddDbContext<UserAccountDbContext>(opt => opt.UseInMemoryDatabase("UserAccountDB"));

            services.AddIdentity<IdentityUser, IdentityRole>()
                .AddEntityFrameworkStores<UserAccountDbContext>();

            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_2);
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseCors(builder => builder.WithOrigins("http://localhost:3000"));
            app.UseHttpsRedirection();
            //app.UseIdentity(); (being removed)
            app.UseAuthentication();
            app.UseMvc();
        }

    }
}
