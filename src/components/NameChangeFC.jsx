import React, { useState } from 'react'

export default function NameChangeFC() {

    const [name, setName] = useState("Zartab");

    //state={
    //  name: "Zartab"
    //  }

    const changeName = () => {
        setName("Zartab Nakhwa");
    }

    return (
        <div>
            <h3>Name CHange Functional Component</h3>
            My name is <b>{name}</b>
            <br />
            <br />
            <button onClick={changeName}>Change Name</button>
        </div>
    )
}
