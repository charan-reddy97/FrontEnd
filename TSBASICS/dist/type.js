"use strict";
let message = "Hello Charan";
let x = 10;
let y = 90;
let sum = add(x, y);
//let sum:number;
console.debug(`${x} + ${y}=${sum}`);
//console.debug(message);
function add(x, y) {
    return x + y;
}
function sub(x, y) {
    return x - y;
}
let fruits = ["banana", "orange", "Apple"];
function myfruits(arr) {
    arr.forEach((item) => {
        console.debug(item);
    });
}
myfruits(fruits);
//# sourceMappingURL=type.js.map