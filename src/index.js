import {pageLoader} from './pageLoad.js';
import {homeLoader} from './home.js';
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




