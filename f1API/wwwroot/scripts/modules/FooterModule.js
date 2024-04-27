import F1Service from "../services/F1Service.js";

const FooterModule = (() => {
  const showFooter = () => {
    const footerContainer = document.querySelector("#footer-container");

    footerContainer.innerHTML = `<footer class="d-flex justify-content-center p-5">
      <section id="footer-section" class="text-center">
        <div id="button-container">
          <a id="drivers-container" href="/api/drivers">Drivers: </a>
          <a id="teams-container" href="/api/teams">Teams: </a>
        </div>
        <p>&lt;&gt; by 2167</p>
      </section>
    </footer>
    `;

    const driversContainer = document.querySelector("#drivers-container");
    const teamsContainer = document.querySelector("#teams-container");

    const countDrivers = async () => {
      const drivers = await F1Service.getAllDrivers();
      driversContainer.innerHTML = "Drivers: " + drivers.length;
    };

    const countTeams = async () => {
      const teams = await F1Service.getAllTeams();
      teamsContainer.innerHTML = "Teams: " + teams.length;
    };

    (() => {
      countDrivers();
      countTeams();
    })();
  };
  return { showFooter };
})();

export default FooterModule;
