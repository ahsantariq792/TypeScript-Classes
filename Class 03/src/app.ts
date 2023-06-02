const button = document.querySelector("button")!;
function log(data: string) {
    console.log("data" + data)
}
button.addEventListener("click", log.bind(null, "data"))


//classes

class Students {
    name: String;
    roll: Number;
    private skills: String[] = []

    constructor(n: String, r: Number) {
        this.name = n;
        this.roll = r;
    }

    addSkills(skill: String) {
        this.skills.push(skill)
    }

}

// Short Hand Initialization
class Students_copy {

    private skills: String[] = []

    //but you have to mention access modifiers (public/private)
    constructor(public name: String, public readonly roll: Number) {

    }

    addSkills(skill: String) {
        this.skills.push(skill)
    }

}

// Inheritance

class Vstudents extends Students {
    private canVolunteerIn: String[] = []
    constructor(name: String, roll: Number) {
        super(name, roll)
    }
    addVSkills(skill: String) {
        this.canVolunteerIn.push(skill)
    }

    //to get/access values that are private
    //but cannot chnage them through this function because it is getter
    get gettcanVolunteerIn() {
        return this.canVolunteerIn;
    }

    //setters
    set setCanVolunteerIn(skills: String[]) {

        //prevents empty strings from inserting in array
        for (const skill of skills) {
            if (!skill) {
                return;
            }
        }
        this.canVolunteerIn = skills;
    }

}

const student1 = new Students("aaa", 44)
const student2 = new Vstudents("aaa", 44)


student1.addSkills("javascript")
student2.addVSkills("javascript")


student2.setCanVolunteerIn = ["Js",""]



// student1.skills[2]=("typrescript") 
//Any one can change this array from outside so we will make skills private


console.log(student1)
console.log(student2)

//no need to insert () with getter function
console.log(student2.gettcanVolunteerIn)
