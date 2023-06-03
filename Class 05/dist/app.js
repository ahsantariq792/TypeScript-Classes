"use strict";
// //Typecasting
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// //first approach  
// const elem = document.getElementById("input")! as HTMLInputElement
// //second approach 
// const elem1 = <HTMLInputElement>document.getElementById("input")!
// // elem1.value
// // elem.value
// //Generics
// const promiseFunc = (): Promise<string> => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("done");
//         }, 2000);
//     });
// }
// promiseFunc()
//     .then((data) => {
//         console.log(data);
//     });
// function merge<T extends object, U extends object>(objA: T, objB: U) {
//     return { ...objA, ...objB };
// }
// //suppose type as T and second type as U
// //and it will suppose each type in the form of objects
// const merged = merge({ name: "ahsan" }, { age: 30 })
// console.log(merged.age)
// //decorators
// let Logger = (data: string) => {
//     return function (_: Function) {
//         console.log("logging" + data)
//     }
// }
// @Logger("data")
// class Person {
//     name = "ahsan";
//     constructor() {
//         console.log("called")
//     }
// }
//decorator example
let FillHTML = (template, id) => {
    return function (constructor) {
        const elem = document.getElementById(id);
        if (elem) {
            elem.innerHTML = template;
        }
    };
};
let Student = class Student {
    constructor() {
        this.name = "ahsan";
        console.log("called");
    }
};
Student = __decorate([
    FillHTML("<b>Hello</b>", "app")
], Student);
function add(x, y) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    }
    else if (typeof x === "string" && typeof y === "string") {
        return x + y;
    }
    else {
        throw new Error("Types did not match.");
    }
}
const value = add("Hello", "World"); // as string;
const value2 = add(5, 5); // as number;
console.log(value.split(" "));
console.log(value2);
//# sourceMappingURL=app.js.map