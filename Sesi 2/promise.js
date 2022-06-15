// promise -> new promise()
// kita buat di dalam sebuah function

function janjian(tempat) {
    // bentuk dasar promise di dalam function
    return new Promise((resolve, reject) => {
         // 1. cek kondisi tempat
        if(tempat) {
         //    - kalau ada, maka kita panggil resolve()
        resolve(`Janjian berhasil dilakukan di ${tempat}`)
        }
        else {
         //    - kalau tidak ada, maka kita panggil reject() 
        reject("Nama tempat harus diisi")
       }
    })
}

// console.log(janjian("online class"))

// penggunaan dasar promise
janjian("online class")
// jika Promise memanggil resolve, maka
// .then akan dipanggil
.then(pesan => {
    console.log(pesan)
})

// penggunaan dasar promise dengan chaining

janjian("kafe")
.then(pesan => {
    console.log(pesan)

    // agar bisa lakukan chaining, panggil return-nya dengan promise baru
    return janjian("tempat parkiran")
})
.then(pesanLain => {
    console.log(pesanLain)
    // coba lakukan error
    return janjian()
})
.then(() => {
    console.log("Janjian selesai!")
})
// error harus dihandle dengan catch
.catch(pesanError => {
    console.error(pesanError)
})

console.log(
    fetch('https://jsonplaceholder.typicode.com/users')
)
.then(response => console.log(response))