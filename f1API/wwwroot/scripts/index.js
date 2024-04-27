import NavModule from "./modules/NavModule.js";
import DarkModeModule from "./modules/DarkModeModule.js";
import FooterModule from "./modules/FooterModule.js";

(() => {
  NavModule.showNav();
  DarkModeModule.darkMode();
  FooterModule.showFooter();
})();
