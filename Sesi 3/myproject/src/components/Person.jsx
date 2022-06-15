import React, { useState, useEffect } from 'react';

// stateless component
const Person = (props) => {
    // top level
    const [name, setName] = useState("")

    // useEffect -> implementasi lifecycle dari class component
    // pada function component

    useEffect(() => {
        // componentDidMount() -> component sudah dibuat / di-render
        // componentDidUpdate() -> state berubah di dalam component
        setTimeout(() => {
            setName(props.name) // akan menjalankan effect
        }, 2000)
        
        // componentWillUnmount() -> component akan dihancurkan
        // return -> sebagai cleanup
        return () => {
            console.log("Anda berhasil menghancurkan component ini!")
        }
    }, 
    
        // shouldComponentUpdate()
        // kosong -> useEffect() akan berjalan selalu, setiap kali ada perubahan
        // [] -> memaksa useEffect() untuk menjalankannya sekali saja
        // [variable] -> useEffect() akan dijalankan setiap kali variable berubah
        Object.values(props)
        // [props.name]
    )

    const [red, setRed] = useState(255)
    const [green, setGreen] = useState(255)
    const [blue, setBlue] = useState(255)

    // useEffect ke 2 -> ubah warna background
    useEffect(() => {
        setRed(Math.random() * 255)
        setGreen(Math.random() * 255)
        setBlue(Math.random() * 255)
    }, [name]) 

    // useEffect ke 3-> fetch data lalu menyimpan di dalam sebuah state
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                setUsers(data)
            })
    }, [])

    function changeName (newName){
        setName(newName)
    }


    // if(something) {
    // // bukan top level
    //     doSomething()
    // }

    // function doSomething() {
    // // bukan top level
    // }

    // for(let i = 0; i < 10; i++) {
    // // bukan top level
    // }

    // top level

    // render
    return (
        <div style={{backgroundColor: `rgb(${red},${green},${blue})`}}>
            <h2>Halo! Nama saya adalah {name}</h2>
            <h3>Pekerjaan saya adalah {props.job}</h3>
            {/* {JSON.stringify(users)} */}
            {
                users.map(user => {
                    return (
                        <div key={user.id}>
                            <span>Name: {user.name}</span> <br />
                            <span>Username: {user.username}</span> <br />
                            <span>Email: {user.email}</span>
                        </div>
                    )
                })
            }
            <button onClick={() => changeName("Fira")}>Ganti Nama</button>
        </div>
    )
    
}

export default Person;