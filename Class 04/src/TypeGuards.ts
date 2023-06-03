type Bird2 = {
    name: string;
    flyingspeed: Number
}
type Animal2 = {
    name: string;
    runningspeed: number
}

type creature2 = Bird2 | Animal2


function log(creature2: creature2) {
    console.log(creature2.name)
    if ("runningspeed" in creature2) {
        console.log(creature2.runningspeed);
    }
    if ("flyingspeed" in creature2) {
        console.log(creature2.flyingspeed);
    }
}

let Hen2: creature2  

Hen2 = {
    name: "Hen",
    flyingspeed: 45,
}

log(Hen2)