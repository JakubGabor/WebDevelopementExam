namespace f1API.Controller;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using f1API.Contexts;
using f1API.Models;

[ApiController]
[Route("api/[controller]")]
public class DriversController : ControllerBase
{
    private readonly F1Context f1Context;

    public DriversController(F1Context _f1Context)
    {
        f1Context = _f1Context;
    }


    //Get All 
    [HttpGet]
    public async Task<ActionResult<Driver>> Get()
    {
        try
        {
            List<Driver> drivers = await f1Context.Drivers.ToListAsync();
            if (drivers != null)
            {
                return Ok(drivers);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

    //Get By ID
    [HttpGet("{id}")]
    public async Task<ActionResult<Driver>> Get(int id)
    {
        try
        {
            Driver? driver = await f1Context.Drivers.FindAsync(id);
            if (driver != null)
            {
                return Ok(driver);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }

    //Get By Name
    [HttpGet]
    [Route("[action]/{name}")]
    public async Task<ActionResult<Driver>> GetByName(string name)
    {
        try
        {
            List<Driver>? drivers = await f1Context.Drivers
              .Where(_driver => _driver.Name
              .Contains(name))
              .ToListAsync();
            if (drivers.Any())
            {
                return Ok(drivers);
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }


    //Add new driver
    [HttpPost]
    public IActionResult Post(Driver newDriver)
    {
        if (newDriver == null)
        {
            return BadRequest();
        }
        try
        {
            f1Context.Drivers.Add(newDriver);
            f1Context.SaveChanges();
            return Ok();
        }
        catch
        {
            return StatusCode(500);
        }

    }


    //Update driver data
    [HttpPut]
    public async Task<IActionResult> Put(Driver updatedDriver)
    {
        if (updatedDriver == null)
        {
            return BadRequest();
        }

        try
        {
            f1Context.Entry(updatedDriver).State = EntityState.Modified;
            await f1Context.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    }


    //Delete driver
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try
        {
            Driver? driver = await f1Context.Drivers.FindAsync(id);
            if (driver != null)
            {
                f1Context.Drivers.Remove(driver);
                await f1Context.SaveChangesAsync();
                return NoContent();
            }
            else
            {
                return NotFound();
            }
        }
        catch
        {
            return StatusCode(500);
        }
    }


}