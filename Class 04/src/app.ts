//interface


interface Person {
    name: string,
    speak(sentence: string): void
}

class Human implements Person {

    constructor(public name: string) { }
    speak(sentence: string): void {
    }
    run(): void { } //can add new functions in classes
}

let nadir: Person

nadir = {
    name: "ahsan",
    speak(sentence: string) {

    },
    // run():void{}  cannot add new function to objects
}