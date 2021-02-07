"use strict"

let basket = [];
let cost = basket.reduce(function countBasketPrice (acc,basket){
    return acc+basket;
}, 0)
console.log (cost);