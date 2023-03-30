import './module-test1.js';
import './validation.js';

console.log('Hi!');

const pool = document.querySelectorAll('.pool');
const block = document.querySelectorAll('.item');
pool[0].removeChild(block[0]);
pool[0].appendChild(block[0]);