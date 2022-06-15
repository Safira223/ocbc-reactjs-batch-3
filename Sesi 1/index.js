// console.log("hello world")

// const people = ["Alex","Nisa", "Nathan", "Kevin"]
// people.forEach()

// number, string, boolean

const name      = `Tevin`   // string
const age       = 21        // number
const aktif     = true      // boolean
const project   = null      // object, tapi falsy

console.log(age)

// console.log({
//     value           : project,  // null
//     negasiValue     : !project, // true
//     truthinessValue : !!project // false
// })

// console.log("I" + "love" + "coding")

// const people = ["Alex", "Nisa", "Nathan", "Kevin"]

// console.log(people)

// console.table(people)


// array looping

// const newPeople = people.map((person) => {
//     console.log(person)

//     return `${person} - Peserta`
// })

// console.table(newPeople)

// this

// sebagai variable global (gak disarankan)
// this.name = "Edward"
// console.log(this.name)

// sebagai object itu sendiri

// const person = {
//     name: "Farhan",
//     age: 18,
//     // jangan gunakan arrow function jika ingin me-refer kepada object itu sendiri
//     introduce: () => {
//         console.log(`Halo! Saya ${this.name} dan saya berumur ${this.age} tahun.`)
//     }
// }

// person.introduce()

// class Person {
//     constructor (name, age) {
//         this.name = name
//         this.age = age
//     }

//     introduce() {
//         console.log(`Halo! Saya ${this.name} dan saya berumur ${this.age} tahun.`)
//     }


// }


// const fira = new Person("Fira", 20)
// const nathan = new Person("Nathan", 22)

// fira.introduce()
// nathan.introduce()

// destructuring Object

const person = {
    name: "Farhan",
    age: 18,
    location: "Earth"
}

const { name: personName, age: personAge, location } = person

console.log(personName,personAge,location)

