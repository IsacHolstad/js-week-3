import './style.css';

import {showMessage}  from "./js/actions.mjs";


showMessage();

import {functionFour} from "./js/actions.mjs";

functionFour();


//lesson task

import {passTheBall} from "./js/team.mjs";
passTheBall();

//import {displayAmount} from "./js/display.mjs";
//displayAmount();

import {calculateTax} from "./js/tax.mjs";
calculateTax();

import {formatCurrency} from "./js/utils.mjs";
formatCurrency();

// tax is 15%
// and the price is 100

// to calculate %
// "amount + amount * (tax percentage)


const itemPrice = 100;
const tax = 15;

const itemsPriceWithTax = calculateTax(itemPrice, tax);
console.log("item with tax: ", itemsPriceWithTax);

const formatedItemWithTax = formatCurrency(itemsPriceWithTax);
console.log(formatedItemWithTax);






//let number = 102.49;

//const fixedNum = number.toFixed(2);

//console.log(fixedNum);