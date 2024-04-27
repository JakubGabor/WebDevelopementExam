import NavModule from "./modules/NavModule.js";
import DarkModeModule from "./modules/DarkModeModule.js";
import FooterModule from "./modules/FooterModule.js";
import F1Service from "./services/F1Service.js";

const mainContainer = document.querySelector(".main-container");

const showDrivers = async () => {
  const drivers = await F1Service.getAllDrivers();
  let htmlTxt = "";

  drivers.forEach((driver) => {
    htmlTxt += `
    <div class="col-sm-12 col-md-6 col-lg-4 g-3">
        <article class="d-flex flex-column p-4 shadow-lg h-100 justify-content-center text-center">
            <img class="p-2 rounded-circle" src="http://localhost:5055/images/drivers/${driver.image}"></img>
            <h3 class="mw-100">${driver.name}</h3>
            <p>Nationality: ${driver.nationality}</p>
            <p>Age: ${driver.age} y/o</p>
        </article>
    </div>
    `;
  });

  mainContainer.innerHTML = htmlTxt;

  return drivers;
};

(async () => {
  await showDrivers();
  NavModule.showNav();
  DarkModeModule.darkMode();
  FooterModule.showFooter();
})();
