using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using UdemyAuthServer.Core.UnitOfWork;

namespace UdemyAuthServer.Data;

public class UnitOfWork : IUnitOfWork
{
    private readonly DbContext _context;

    public UnitOfWork(AppDbContext appDbContext)
    {
        _context = appDbContext;
    }

    public void Commit()
    {
        _context.SaveChanges();
    }

    public async Task CommmitAsync()
    {
        await _context.SaveChangesAsync();
    }
}