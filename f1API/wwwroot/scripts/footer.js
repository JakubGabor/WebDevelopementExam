import F1Service from "./services/F1Service.js";

const driversContainer = document.querySelector("#drivers-container");
const teamsContainer = document.querySelector("#teams-container");
const racesContainer = document.querySelector("#races-container");

const countDrivers = async () => {
  const drivers = await F1Service.getAllDrivers();
  driversContainer.innerHTML = "Drivers: " + drivers.length;
};

const countTeams = async () => {
  const teams = await F1Service.getAllTeams();
  teamsContainer.innerHTML = "Teams: " + teams.length;
};

const countRaces = async () => {
  const races = await F1Service.getAllRaces();
  racesContainer.innerHTML = "Races: " + races.length;
};

(() => {
  countDrivers();
  countTeams();
  countRaces();
})();
