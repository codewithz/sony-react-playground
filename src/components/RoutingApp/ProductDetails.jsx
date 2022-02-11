import React from 'react'

export default function ProductDetails(props) {

    const { id } = props.match.params;

    const handleSave = () => {
        //Navigate to /products
        props.history.push("/products");
        // props.history.replace("/products");
    }
    return (
        <div>
            <h1>Product Details - {id}</h1>
            <button className="btn btn-warning btn-sm"
                onClick={handleSave}
            >

                Save
            </button>
        </div>
    )
}
