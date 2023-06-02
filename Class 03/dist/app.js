"use strict";
const button = document.querySelector("button");
function log(data) {
    console.log("data" + data);
}
button.addEventListener("click", log.bind(null, "data"));
//classes
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
// Inheritance
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
    get gettcanVolunteerIn() {
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
const student1 = new Students("aaa", 44);
const student2 = new Vstudents("aaa", 44);
student1.addSkills("javascript");
student2.addVSkills("javascript");
student2.setCanVolunteerIn = ["Js", ""];
// student1.skills[2]=("typrescript") 
//Any one can change this array from outside so we will make skills private
console.log(student1);
console.log(student2);
//no need to insert () with getter function
console.log(student2.gettcanVolunteerIn);
//# sourceMappingURL=app.js.map