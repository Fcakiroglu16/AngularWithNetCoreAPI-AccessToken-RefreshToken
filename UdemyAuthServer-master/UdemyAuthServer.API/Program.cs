using System;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using UdemyAuthServer.Core.Models;

namespace UdemyAuthServer.API;

public class Program
{
    public static void Main(string[] args)
    {
        var host = CreateHostBuilder(args).Build();

        using (var scope = host.Services.CreateScope())
        {
            var userManager = scope.ServiceProvider.GetService<UserManager<UserApp>>();

            var result = userManager!.CreateAsync(new UserApp { UserName = "admin", Email = "admin@outlook.com" },
                "Password12*").Result;
            if (!result.Succeeded) Console.WriteLine("Admin User can not be created by seed");
        }

        host.Run();
    }

    private static IHostBuilder CreateHostBuilder(string[] args)
    {
        return Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder => { webBuilder.UseStartup<Startup>(); });
    }
}