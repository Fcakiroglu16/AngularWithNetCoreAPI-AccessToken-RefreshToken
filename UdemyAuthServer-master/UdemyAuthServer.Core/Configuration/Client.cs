using System.Collections.Generic;

namespace UdemyAuthServer.Core.Configuration;

public class Client
{
    public string Id { get; set; }

    public string Secret { get; set; }

    public List<string> Audiences { get; set; }
}