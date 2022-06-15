import React, { useState, useEffect } from 'react';

function Example() {
    // Deklarasi variable state baru yang kita sebut "count"
    const [count, setCount] = useState(0);

    // mirip dengan componentDidMount dan componentDidUpdate:
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>Anda menekan sebanyak {count} kali</p>
            <button onClick={() => setCount(count + 1)}>
                Klik saya
            </button>
        </div>
    );
}


export default Example;