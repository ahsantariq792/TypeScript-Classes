//Advanced Types  

//Union Types

type combined = string | number
let address: combined

address = "abc"
//  address = 123


//Intersection Types
type Bird = {
    name: string;
    flyingspeed: Number
}
type Animal = {
    name: string;
    runningspeed: number
}

type creature = Bird & Animal

let Hen: creature

Hen = {
    name: "Hen",
    flyingspeed: 45,
    runningspeed: 40
}

// If we want to do this work with interface
interface Birds  {
    name: string;
    flyingspeed: Number
}
interface Animals  {
    name: string;
    runningspeed: number
}

interface creatures extends Birds , Animals{};

let Hens: creatures

Hens = {
    name: "Hen",
    flyingspeed: 45,
    runningspeed: 40
}

