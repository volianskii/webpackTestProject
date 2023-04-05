import './validation.js';
import './slider.js';
import './render-html.js';//module that renders additional html code

console.log('main.js is connected');

const pool = document.querySelectorAll('.pool');
const block = document.querySelectorAll('.item');
pool[0].removeChild(block[0]);
pool[0].appendChild(block[0]);
