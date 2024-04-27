import NavModule from "./modules/NavModule.js";
import DarkModeModule from "./modules/DarkModeModule.js";
import FooterModule from "./modules/FooterModule.js";
import F1Service from "./services/F1Service.js";

const mainContainer = document.querySelector(".main-container");

const showTeams = async () => {
  const teams = await F1Service.getAllTeams();
  let htmlTxt = "";

  teams.forEach((team) => {
    htmlTxt += `
    <div class="col-md-12 col-lg-6 g-3">
        <article class="d-flex flex-column p-4 shadow-lg h-100 justify-content-center text-center">
            <div class="d-flex align-items-center justify-content-between" max-width="10">
                <h3 class="text-center m-0">${team.manufacturer}</h3>
                <img class="p-2" height="70" src="http://localhost:5055/images/teams/logo/${team.imageLogo}"></img>
            </div>
            <div class="d-flex align-items-center justify-content-between p-2">
                <p class="p-2">Driver 1: ${team.driver1}</p>
                <p class="p-2">Driver 2: ${team.driver2}</p>
            </div>
            <img class="p-2" src="http://localhost:5055/images/teams/car/${team.imageCar}"></img>
        </article>
    </div>
    `;
  });

  mainContainer.innerHTML = htmlTxt;

  return teams;
};

(async () => {
  await showTeams();
  NavModule.showNav();
  DarkModeModule.darkMode();
  FooterModule.showFooter();
})();
