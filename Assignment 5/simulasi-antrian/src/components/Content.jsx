import React, { useState } from "react"
import './css/Style.css'


const FieldText = ({ addName }) => {
    const [name, setName] = useState('')
    const handleSubmit = (queue) => {
        queue.preventDefault()
        addName(name)
    }

    return (
        <>
            <div className="inline-block">
                <form onSubmit={handleSubmit}>
                    <div className="submit">
                        <input className="input" type="text" value={name} required 
                        onChange={(queue) => setName(queue.target.value)} 
                        maxLength={9}
                        />
                    </div>
                    <div>
                        <button className="button is-primary is-light">Antrikan!</button>
                    </div>
                </form>
            </div>
        </>
    )
}

function Content() {
    const [names, setNames] = useState([
        { name: '' }
    ])

    const addName = (name) => {
        setNames([...names, { name }])
    }

    const fwdName = (name) => {
        var array = [...names];
        array.splice(name, 1)
        setNames(array)
    }

    return (
        <>
            <div className="Card">
                <div className="Title">
                    <h1>Simulasi Antrian</h1>
                </div>

                <hr />

                <label>
                    <p>Masukkan Nama</p>
                    <FieldText addName={addName} />
                    {names.length > 1 && 
                    <button onClick={fwdName} className="button is-danger is-light">
                        Majukan!
                    </button>}
                </label>

                <hr />

                {names.length > 0 && names.map((element, index) => {
                    return index > 0 ? 
                    <div className="List" key={index}>
                        <ul>{element['name']}</ul>
                    </div> 
                    : ''
                })}

            </div>
        </>
    )
}

export default Content