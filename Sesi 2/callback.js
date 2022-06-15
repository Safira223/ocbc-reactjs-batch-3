// function greetBack(name) {
//     console.log(`Halo, ${name}! Apa kabarnya?`)
// }

// function greet(name) {
//     console.log(`Halo, nama saya ${name}!`)
//     return name
// }

// // higher-order function
// greetBack(greet("Alex"))

// function introduceCallback (name, callback) {
//     console.log(`Halo, nama saya ${name}!`)
//     callback(name) // menelepon balik
// }

// introduceCallback("Edward", () => {
//     console.log('callback function dipanggil')
// })

// introduceCallback("Edward", (nickname) => {
//     console.log(nickname)
// })

function greetBack(name) {
    console.log(`Halo, ${name}! Apa kabarnya?`)
}

function introduceCallback (name, callback) {
    console.log(`Halo, nama saya ${name}!`)
    callback(name) // menelepon balik
}

introduceCallback("Farhan", greetBack)

