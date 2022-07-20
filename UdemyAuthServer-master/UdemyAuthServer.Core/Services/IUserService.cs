using System.Threading.Tasks;
using SharedLibrary.Dtos;
using UdemyAuthServer.Core.DTOs;

namespace UdemyAuthServer.Core.Services;

public interface IUserService
{
    Task<Response<UserAppDto>> CreateUserAsync(CreateUserDto createUserDto);

    Task<Response<UserAppDto>> GetUserByNameAsync(string userName);
}