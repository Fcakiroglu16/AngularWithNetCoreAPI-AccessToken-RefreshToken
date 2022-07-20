using AutoMapper;
using UdemyAuthServer.Core.DTOs;
using UdemyAuthServer.Core.Models;

namespace UdemyAuthServer.Service;

internal class DtoMapper : Profile
{
    public DtoMapper()
    {
        CreateMap<ProductDto, Product>().ReverseMap();
        CreateMap<UserAppDto, UserApp>().ReverseMap();
    }
}