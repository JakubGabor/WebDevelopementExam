namespace f1API.Models;
using f1API.Interfaces;

public class Team : ITeam 
{
    public int Id {get; set;}
    public string? Manufacturer {get; set;}
    public string? Driver1 {get; set;}
    public string? Driver2 {get; set;}
    public string? ImageCar {get; set;}
    public string? ImageLogo {get; set;}
}