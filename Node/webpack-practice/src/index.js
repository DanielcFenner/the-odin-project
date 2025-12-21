// index.js
import { greeting } from "./greeting.js";
import "./styles.css";

// src/index.js
import odinImage from "./odin.png";

const image = document.createElement("img");
image.src = odinImage;

document.body.appendChild(image);
