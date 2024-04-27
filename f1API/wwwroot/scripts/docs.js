import NavModule from "./modules/NavModule.js";
import DarkModeModule from "./modules/DarkModeModule.js";
import FooterModule from "./modules/FooterModule.js";
import F1Service from "./services/F1Service.js";

const driversContainer = document.querySelector("#drivers");
const teamsContainer = document.querySelector("#teams");

const countDrivers = async () => {
  const drivers = await F1Service.getAllDrivers();
  driversContainer.innerHTML = `There is a total of <span class="custom-span">${drivers.length}</span> drivers sorted by id.`;
};

const countTeams = async () => {
  const teams = await F1Service.getAllTeams();
  teamsContainer.innerHTML = `There is a total of <span class="custom-span">${teams.length}</span> teams sorted by id.`;
};

(() => {
  countDrivers();
  countTeams();

  NavModule.showNav();
  DarkModeModule.darkMode();
  FooterModule.showFooter();
})();
