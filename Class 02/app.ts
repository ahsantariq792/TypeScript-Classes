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
    age:12,
    hobbies: ["book reading","fishing"],
    email: ""
});

console.log(customers)