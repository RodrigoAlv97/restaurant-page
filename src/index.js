import {pageLoader} from './pageLoad.js';
import {homeLoader} from './home.js';
import { aboutLoader } from './about.js';
import './style.css';

pageLoader();


const main = document.querySelector('#main');
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');
const about = document.querySelector('#about');

homeLoader(main);

home.addEventListener("click", function() {
    main.replaceChildren();
    homeLoader(main);
  });
  
about.addEventListener("click", function() {
  main.replaceChildren();
  aboutLoader(main);
});



