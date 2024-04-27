const DarkModeModule = (() => {
  const darkMode = () => {
    const darkModeBtn = document.querySelector("#dark-mode-button");
    const body = document.querySelector("body");
    const articles = document.querySelectorAll("article");
    const heroImage = document.querySelector("#hero-image");
    const mainContainer = document.querySelector(".main-container");

    let darkModeStatus = localStorage.getItem("darkModeStatus") === "true";

    const switchMode = () => {
      darkModeBtn.classList.toggle("bi-sun-fill");
      body.classList.toggle("dark-mode");
      mainContainer.classList.toggle("main-container-dark");
      articles.forEach((article) => {
        article.classList.toggle("article-dark");
      });

      if (heroImage != null) {
        if (darkModeStatus) {
          heroImage.src = "images/formula-1.webp";
        } else {
          heroImage.src = "images/formula-1-shadow.webp";
        }
      }
    };

    const darkModeSwitch = () => {
      darkModeStatus = !darkModeStatus;
      localStorage.setItem("darkModeStatus", darkModeStatus);
      switchMode();
    };

    const setEvents = () => {
      darkModeBtn.addEventListener("click", darkModeSwitch);
    };

    if (darkModeStatus === true) {
      switchMode();
    }

    (() => {
      setEvents();
    })();
  };

  return { darkMode };
})();

export default DarkModeModule;
