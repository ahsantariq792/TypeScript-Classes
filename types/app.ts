const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;
const button = document.getElementById("btn")!;

const add = function (val1: number, val2: number) {
    return val1 + val2;
};

button.addEventListener("click", function () {
    const firstVal = input1.value;
    const secondVal = input2.value;
    console.log(add(+firstVal, +secondVal));
});

// Basic Types

// 1. String: string => "Apple", "Orange"
// 2. Number: number => 1 0 -87 4.5
// 3. Boolean: boolean => true false

let person: number;

person = 8;

let arr: string[];

arr = ["Apple", "Orange", ];
arr.push("Pineapple");
arr.push();

const arr2: number[] = [1, 2, 3];
arr2.push();


// This is my new comment.