import odinImage from "./img/odin-home.png";

export function loadHome() {
  const home = document.createElement("div");
  home.classList.add("home");

  const homeContainer = document.createElement("div");
  homeContainer.classList.add("home-container");
  home.appendChild(homeContainer);

  homeContainer.style.backgroundImage = `url(${odinImage})`;

  // Add these styles to make the background look good
  homeContainer.style.backgroundSize = "cover";
  homeContainer.style.backgroundPosition = "center";
  homeContainer.style.backgroundRepeat = "no-repeat";

  const homeContainerContent = document.createElement("div");
  homeContainerContent.classList.add("home-container-content");
  homeContainer.appendChild(homeContainerContent);

  const homeContainerTitle = document.createElement("h3");
  homeContainerTitle.classList.add("home-container-title");
  homeContainerTitle.innerHTML = "The Best Restaurant";
  homeContainerContent.appendChild(homeContainerTitle);

  const homeContainerText = document.createElement("p");
  homeContainerText.innerHTML =
    "Restaurant meals, home-made. The highest quality local ingredients, made with passion from legendary chefs";
  homeContainerText.classList.add("home-container-text");
  homeContainerContent.appendChild(homeContainerText);

  return home;
}
