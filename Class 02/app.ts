let person = "Nadir";

let names: string[] = [];
names.push("Nadir");




/////////////////
// custom types//
////////////////


type Customer = {
    name: string;
    age: number;
    hobbies: string[];
    email: string;
    // email? : string
    // another approach is se neechey empty string dene ki b zaroorat nhi ha
};

let customers: Customer[] = [];

const person1: Customer = {
    name: "Nadir",
    age: 25,
    hobbies: ["Sports"],
    email: ""
}
person1.email = "abc@test.com";

customers.push(person1);


customers.push({
    name: "Nomankhanjan",
    age: 12,
    hobbies: ["book reading", "fishing"],
    email: ""
});

console.log(customers)




/////////////
/////tuples//
/////////////

//Fixed Length array when we know data types of its elemants and they are different
  
const roles: [number, string] = [0, "Admin"]

// const roles2 : [number, string] = [0, "Admin","Admin"]
//error

// but work with push

roles.push("adadasdaaaf")


let data: string | number

data = "asahada"
data = 2


////////////////////
// Literal types ///
///////////////////


// function myFunct(num1: number, num2: number, cond: String) {
function myFunct(num1: number, num2: number, cond: "add" | "subtract") {
    if (cond === "add") {
        return num1 + num2
    }
    else if (cond === "subtract") {
        return num1 - num2
    }
}

// console.log(myFunct(2, 3, "divide"))
//error the conditions are defined only they can be used


///////////////////
// Function Type///
///////////////////


let myFunc: (a: number, b: number) => number;

//if we have to give return type of call back function in the parameter it can be given in the same way

function add(a: number, b: number,): number//(return data type of function) 
{
    return a + b;
}

myFunc = add;