namespace f1API.Controller;

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using f1API.Contexts;
using f1API.Models;

[ApiController]
[Route("api/[controller]")]
public class TeamsController : ControllerBase
{
    private readonly F1Context f1Context;

    public TeamsController(F1Context _f1Context)
    {
        f1Context = _f1Context;
    }


    //Get All
    [HttpGet]
    public async Task<ActionResult<Team>> Get()
    {
        try
        {
            List<Team> teams = await f1Context.Teams.ToListAsync();
            if (teams != null)
            {
                return Ok(teams);
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
    public async Task<ActionResult<Team>> Get(int id)
    {
        try
        {
            Team? team = await f1Context.Teams.FindAsync(id);
            if (team != null)
            {
                return Ok(team);
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

    //Get By Manufacturer
    [HttpGet]
    [Route("[action]/{manufacturer}")]
    public async Task<ActionResult<Team>> GetByManufacturer(string manufacturer)
    {
        try
        {
            List<Team>? team = await f1Context.Teams
            .Where(_team => _team.Manufacturer
            .Contains(manufacturer))
            .ToListAsync();

            if (team != null)
            {
                return Ok(team);
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


    //Add new team
    [HttpPost]
    public IActionResult Post(Team newTeam)
    {
        if (newTeam == null)
        {
            return BadRequest();
        }
        try
        {
            f1Context.Teams.Add(newTeam);
            f1Context.SaveChanges();
            return Ok();
        }
        catch
        {
            return StatusCode(500);
        }

    }


    //Update team data
    [HttpPut]
    public async Task<IActionResult> Put(Team updatedTeam)
    {
        if (updatedTeam == null)
        {
            return BadRequest();
        }

        try
        {
            f1Context.Entry(updatedTeam).State = EntityState.Modified;
            await f1Context.SaveChangesAsync();
            return NoContent();
        }
        catch
        {
            return StatusCode(500);
        }
    }


    //Delete team
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(int id)
    {
        try
        {
            Team? team = await f1Context.Teams.FindAsync(id);
            if (team != null)
            {
                f1Context.Teams.Remove(team);
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