/* This file is a module. We import it in script.js file */

const ESC_KEYCODE = 27; //this const will not be available for usage in script.js unless it's exported
const ENTER_KEYCODE = 13;
const name = 'Molly';

console.log('Модуль util.js создан '); //this code will work finely in script.js

export {ESC_KEYCODE, ENTER_KEYCODE, name}; // interface. It provides info this module shares with other files