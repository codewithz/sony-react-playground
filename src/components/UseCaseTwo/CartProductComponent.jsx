import React, { useState } from 'react'

export default function CartProductComponent(props) {

    const [productName, setProductName] = useState(props.name);
    const [quantity, setQuantity] = useState(props.quantity);
    const [productId, setProductId] = useState(props.id);

    const styles = {
        fontSize: 20,
        fontWeight: 'bold'
    }

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    }

    const handleDecrement = () => {
        if (quantity >= 1) {
            setQuantity(quantity - 1);
        }

    }

    const formatQuantity = () => quantity == 0 ? 'Zero' : quantity;

    const getBadgeClasses = () => {
        let classes = "badge m-2 badge-"
        classes += (quantity == 0) ? 'warning' : 'primary'
        return classes;
    }



    return (
        <div>
            <h4>{productName}</h4>
            <button
                className="btn btn-secondary btn-sm m-2"
                onClick={handleIncrement}
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
                onClick={handleDecrement}
            >
                -
            </button>

            <button
                className="btn btn-danger btn-sm m-2"
                onClick={() => props.onRemove(productId)}>
                Remove From Cart
            </button>
        </div>
    )
}
