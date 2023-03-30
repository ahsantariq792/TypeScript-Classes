var person = "Nadir";
var names = [];
names.push("Nadir");
var customers = [];
var person1 = {
    name: "Nadir",
    age: 25,
    hobbies: ["Sports"],
    email: ""
};
person1.email = "abc@test.com";
customers.push(person1);
customers.push({
    name: "Nomankhanjan",
    age: 12,
    hobbies: ["book reading", "fishing"],
    email: ""
});
console.log(customers);
var roles = [0, "Admin"];
// const roles2 : [number, string] = [0, "Admin","Admin"]
//error
// but work with push
roles.push("adadasdaaaf");
var data;
data = "asahada";
data = 2;
////////////////////
// Literal types ///
///////////////////
// function myFunct(num1: number, num2: number, cond: String) {
function myFunct(num1, num2, cond) {
    if (cond === "add") {
        return num1 + num2;
    }
    else if (cond === "subtract") {
        return num1 - num2;
    }
}
// console.log(myFunct(2, 3, "divide"))
//error the conditions are defined only they can be used
///////////////////
// Function Type///
///////////////////
var myFunc;
//if we have to give return type of call back function in the parameter it can be given in the same way
function add(a, b) {
    return a + b;
}
myFunc = add;
