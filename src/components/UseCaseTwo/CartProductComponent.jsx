import React, { useState } from 'react'

export default function CartProductComponent(props) {

    const { name, quantity, id } = props.product;

    // const [productName, setProductName] = useState(name);
    // const [quantity, setQuantity] = useState(productQuntity);
    // const [productId, setProductId] = useState(id);

    const styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    // const handleIncrement = () => {
    //     setQuantity(quantity + 1);
    // }

    // const handleDecrement = () => {
    //     if (quantity >= 1) {
    //         setQuantity(quantity - 1);
    //     }

    // }

    const formatQuantity = () => quantity == 0 ? 'Zero' : quantity;

    const getBadgeClasses = () => {
        let classes = "badge m-2 badge-"
        classes += (quantity == 0) ? 'warning' : 'primary'
        return classes;
    }



    return (
        <div>
            <h4>{name}</h4>
            <button
                className="btn btn-secondary btn-sm m-2"
                onClick={() => props.onIncrement(props.product)}
            >
                +
            </button>

            <span style={styles}
                className={getBadgeClasses()}
            >
                {formatQuantity()}
            </span>

            <button
                className="btn btn-info btn-sm m-2"
                onClick={() => props.onDecrement(props.product)}
            >
                -
            </button>

            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => props.onRemove(id)}>
                Remove From Cart
            </button>
        </div>
    )
}
