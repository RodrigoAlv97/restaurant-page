import "./style.css";
import { pageLoader } from "./pageLoad.js";
import { homeLoader } from "./home.js";
import { menuLoader } from "./menu.js";
import { aboutLoader } from "./about.js";

pageLoader();

const main = document.querySelector("#main");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

homeLoader(main);

home.addEventListener("click", function () {
  main.replaceChildren();
  homeLoader(main);
});

menu.addEventListener("click", function () {
  main.replaceChildren();
  menuLoader(main);
});

about.addEventListener("click", function () {
  main.replaceChildren();
  aboutLoader(main);
});
