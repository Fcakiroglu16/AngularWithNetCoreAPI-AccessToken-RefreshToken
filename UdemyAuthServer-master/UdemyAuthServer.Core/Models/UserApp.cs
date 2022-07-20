using Microsoft.AspNetCore.Identity;

namespace UdemyAuthServer.Core.Models;

public class UserApp : IdentityUser
{
    public string City { get; set; }
}