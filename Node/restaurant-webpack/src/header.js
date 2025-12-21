export function loadHeader(homeClick, menuClick, contactClick) {
  const header = document.createElement("header");
  header.classList.add("header");

  const headerLeft = document.createElement("div");
  headerLeft.classList.add("header-left");
  header.appendChild(headerLeft);

  const headerTitle = document.createElement("h4");
  headerTitle.classList.add("header-title");
  headerTitle.textContent = "Odin's Restaurant";
  headerLeft.appendChild(headerTitle);

  const headerRight = document.createElement("div");
  headerRight.classList.add("header-right");
  header.appendChild(headerRight);

  const headerNav = document.createElement("nav");
  headerNav.classList.add("header-nav");

  const navHome = document.createElement("button");
  navHome.classList.add("nav-home");
  navHome.textContent = "Home";
  headerNav.appendChild(navHome);
  navHome.addEventListener("click", homeClick);

  const navMenu = document.createElement("button");
  navMenu.classList.add("nav-menu");
  navMenu.textContent = "Menu";
  headerNav.appendChild(navMenu);
  navMenu.addEventListener("click", menuClick);

  const navContact = document.createElement("button");
  navContact.classList.add("nav-contact");
  navContact.textContent = "Contact";
  headerNav.appendChild(navContact);
  navContact.addEventListener("click", contactClick);

  headerRight.appendChild(headerNav);

  return header;
}
