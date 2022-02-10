import React, { useState } from 'react'

export default function CounterComponent() {

    const [name, setName] = useState("Zartab Nakhwa");
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h3>Hello , {name}</h3>
            <br />
            <br />
            Counter:{counter}
            <br />
            <br />
            <button onClick={() => setCounter(counter + 1)}>Increment</button>&nbsp; &nbsp;
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>

        </div>
    )
}
