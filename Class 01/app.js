"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inputvar1 = document.getElementById("num1");
var inputvar2 = document.getElementById("num2");
var buttonvar = document.getElementById("btn");
var addFunction = function (val1, val2) {
    return val1 + val2;
};
buttonvar.addEventListener("click", function () {
    var firstVal = inputvar1.value;
    var secondVal = inputvar2.value;
    console.log(addFunction(+firstVal, +secondVal));
});
