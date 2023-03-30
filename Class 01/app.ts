const input1= document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement
const button = document.getElementById("btn")!;

const addFunction = function (val1 : number, val2 : number) {
    return val1 + val2;
};

button.addEventListener("click", function () {
    const firstVal = input1.value;
    const secondVal = input2.value;
    console.log(addFunction(+firstVal, +secondVal));
});


///////////
// types //
//////////


// Basic Types

// 1. String: string => "Apple", "Orange"
// 2. Number: number => 1 0 -87 4.5
// 3. Boolean: boolean => true false


let person = "ahsan"
// person = 1 
//type srcipt has guessed and set the type as string so it does not allow a number to be stored in person

let name1 : string
name1 = "ahsan"

let name2 : string = "ahsan"

let fruits : String[] = []
fruits.push("apple")


