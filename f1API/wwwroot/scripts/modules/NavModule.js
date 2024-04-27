const NavModule = (() => {
  const showNav = () => {
    const navContainer = document.querySelector("#nav-container");

    navContainer.innerHTML = `<!-- Navigasjon -->
    <nav class="position-relative navbar navbar-expand-lg navbar-dark p-1">
      <div class="container-fluid">
        <!-- Logo -->
        <a href="/index.html"
          ><img
            src="images/formel-1-white.webp"
            height="60"
            alt="Formula 1 API Logo. Ilustrasjon."
        /></a>

        <!-- Dark mode toggle -->
        <i
          id="dark-mode-button"
          class="d-flex ms-auto me-4 p-2 bi bi-moon-stars-fill"
        ></i>

        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item mx-4 text-center">
              <a
                class="nav-link mx-2 white p-3"
                aria-current="page"
                href="/index.html"
                >Home</a
              >
            </li>
            <li class="nav-item mx-4 text-center">
              <a class="nav-link mx-2 white p-3" href="/docs.html">Docs</a>
            </li>
            <li class="nav-item dropdown mx-4 text-center">
              <a
                class="nav-link mx-2 dropdown-toggle white p-3"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Database
              </a>
              <ul
                class="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li>
                  <a
                    class="dropdown-item mx-auto text-center"
                    href="/drivers.html"
                    >Drivers</a
                  >
                </li>
                <li>
                  <a
                    class="dropdown-item mx-auto text-center"
                    href="/teams.html"
                    >Teams</a
                  >
                </li>
                
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    `;
  };

  return { showNav };
})();

export default NavModule;
