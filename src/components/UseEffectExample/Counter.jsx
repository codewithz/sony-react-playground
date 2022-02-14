import React, { useState, useEffect } from 'react'

export default function Counter() {

    const [name, setName] = useState("");
    const [count, setCount] = useState(0);

    //componentDidMount, componentDidUpdate,componentWillUnmount
    useEffect(() => {
        document.title = `${name} have clicked ${count} times`;

        return () => {
            //here we write the code supposed to go in componentWillUnmount
            console.log("Clean Up");
        }
    }, []);

    const handleInput = (event) => {
        setName(event.target.value)
    }

    const handleIncrement = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <input type="text" onChange={handleInput} />
            <div>
                {name} have clicked for {count} times
            </div>
            <br />
            <button className="btn btn-success" onClick={handleIncrement}>Increment</button>
        </div>
    )
}
