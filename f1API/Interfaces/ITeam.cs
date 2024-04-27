namespace f1API.Interfaces;

public interface ITeam
{
    int Id {get; set;}
    string? Manufacturer {get; set;}
    string? Driver1 {get; set;}
    string? Driver2 {get; set;}
    string? ImageCar {get; set;}
    string? ImageLogo {get; set;}
}