import React, { useState } from 'react';

function Counter(props) {
    const [count, setCount] = useState(0);
    console.log(props)
    return (
        <>
            Count: {count} <br />
            <button onClick={() => setCount(prevCount => prevCount - 1)}>Kurang (-)</button> <br />
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Tambah (+)</button> <br />
            <button onClick={() => setCount()}>Reset</button>
        </>
    )        
}

export default Counter;