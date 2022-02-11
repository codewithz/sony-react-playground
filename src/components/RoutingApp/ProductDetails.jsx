import React from 'react'

export default function ProductDetails(props) {

    const { id } = props.match.params;
    return (
        <div>
            <h1>Product Details - {id}</h1>
            <button>Save</button>
        </div>
    )
}
