import init from './init';
import './style.css';
import menu from './menu';
import contact from './contact';
import about from './about';
import reserve from './reserve';
import {goHome} from './home';

init();

const homeBtn = document.querySelector('.logo-btn');
const headerMenu = Array.from(document.querySelectorAll('.head-nav li a'));
const footerMenu = document.querySelectorAll('.foot-nav li');

homeBtn.addEventListener('click', goHome);

headerMenu[0].addEventListener('click',about);
headerMenu[1].addEventListener('click',menu);
headerMenu[2].addEventListener('click',reserve);

footerMenu[2].addEventListener('click', contact);