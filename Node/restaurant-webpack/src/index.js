import { loadContact } from "./contact.js";
import { loadMenu } from "./menu.js";
import { loadHeader } from "./header.js";
import { loadHome } from "./home.js";
import { loadSignature } from "./signature.js";
import "./styles.css";

const container = document.querySelector(".container");
const body = document.querySelector("body");

const homeClick = () => {
  renderPage(loadHome);
};

const menuClick = () => {
  renderPage(loadMenu);
};

const contactClick = () => {
  renderPage(loadContact);
};

const header = loadHeader(homeClick, menuClick, contactClick);
const signature = loadSignature();
body.appendChild(header);
body.appendChild(signature);

function renderPage(pageFunction) {
  container.innerHTML = "";
  container.appendChild(pageFunction());
}

renderPage(loadContact);
