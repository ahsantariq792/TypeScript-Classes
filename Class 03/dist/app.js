"use strict";
const button = document.querySelector("button");
function log(data) {
    console.log("data" + data);
}
button.addEventListener("click", log.bind(null, "data"));
/////////////////////////////
//////////classes////////////
/////////////////////////////
class Students {
    constructor(n, r) {
        this.skills = [];
        this.name = n;
        this.roll = r;
    }
    addSkills(skill) {
        this.skills.push(skill);
    }
}
// Short Hand Initialization
class Students_copy {
    //but you have to mention access modifiers (public/private)
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
        this.skills = [];
    }
    addSkills(skill) {
        this.skills.push(skill);
    }
}
/////////////////////////////
///////// Inheritance ///////
////////////////////////////
class Vstudents extends Students {
    constructor(name, roll) {
        super(name, roll);
        this.canVolunteerIn = [];
    }
    addVSkills(skill) {
        this.canVolunteerIn.push(skill);
    }
    //to get/access values that are private
    //but cannot chnage them through this function because it is getter
    get getcanVolunteerIn() {
        return this.canVolunteerIn;
    }
    //setters
    set setCanVolunteerIn(skills) {
        //prevents empty strings from inserting in array
        for (const skill of skills) {
            if (!skill) {
                return;
            }
        }
        this.canVolunteerIn = skills;
    }
}
Vstudents.id = "ABC-1123";
const student1 = new Students("aaa", 44);
const student2 = new Vstudents("aaa", 44);
student1.addSkills("javascript");
student2.addVSkills("javascript");
student2.setCanVolunteerIn = ["Js", ""];
//STATIC METHOD
console.log(Vstudents.id);
console.log;
// student1.skills[2]=("typrescript") 
//Any one can change this array from outside so we will make skills private
console.log(student1);
console.log(student2);
//no need to insert () with getter function
console.log(student2.getcanVolunteerIn);
////////////////////////////////////////
////////////ABSTRACT CLASSES///////////
//////////////////////////////////////
class Person {
    //but you have to mention access modifiers (public/private)
    constructor(name, roll) {
        this.name = name;
        this.roll = roll;
        this.skills = [];
    }
}
class Teacher extends Person {
    addSkills() { }
}
//////////////////////////////
/////////SINGLETON///////////
////////////////////////////
class Human {
    constructor(name) {
        this.name = name;
        //Now its object cannot be created outside the class because constructor is private 
    }
    //this function will make objects
    //if this object is already created then the older object will be returned 
    //else new object will be created
    static getObject(name) {
        if (this.object) {
            return this.object;
        }
        this.object = new Human(name);
        if (this.object) {
            return this.object;
        }
        return this.object;
    }
}
// const Human1 = new Human()
//cannot access because constructor is private
//We can access class through
const Human1 = Human.getObject("Ahsan");
const Human2 = Human.getObject("Areeb");
console.log(Human1);
console.log(Human2);
//Only Human1 (Ahsan) will be created
//incase of human 2 if will be executed and older object will be returned
//# sourceMappingURL=app.js.map