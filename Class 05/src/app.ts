// //Typecasting


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

let FillHTML = (template:string, id: string) => {
    return function (constructor: any) { // Decorator
        const elem = document.getElementById(id);
        if (elem) {
            elem.innerHTML = template;
        }
    }
}

@FillHTML("<b>Hello</b>","app")
class Student {
    name = "ahsan";
    constructor() {
        console.log("called")
    }
}


// Function Overloading

type Combined = string | number;

function add (x: number, y: number): number; // Number impl
function add (x: string, y: string): string; // String impl
function add (x: Combined, y: Combined) {
    if (typeof x === "number" && typeof y === "number") {
        return x + y;
    } else if (typeof x === "string" && typeof y === "string") {
        return x + y;
    } else {
        throw new Error("Types did not match.");
    }
}

const value = add("Hello", "World"); // as string;
const value2 = add(5, 5); // as number;
console.log(value.split(" "))
console.log(value2)