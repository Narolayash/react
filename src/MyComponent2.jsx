import React, {useState} from "react";

function MyComponent2() {
    const [name, setname] = useState("");
    const [quantity, setQuantity] = useState();
    const [comment, setComment] = useState("");
    const [pyment, setPyment] = useState("");
    const [shipping, setShipping] = useState();;

    const hendleNameChange = (e) => setname(e.target.value);
    const hendleQuantityChange = (e) => setQuantity(e.target.value);
    const hendleCommentChange = (e) => setComment(e.target.value);
    const hendlePymentChange = (e) => setPyment(e.target.value);
    const hendleShippingChage = (e) => setShipping  (e.target.value);

    return (
        <div>
            <input type="text" value={name} onChange={hendleNameChange} />
            <p>Name : {name}</p>

            <input type="number" value={quantity} onChange={hendleQuantityChange} />
            <p>Quantity : {quantity}</p>

            <textarea name="" id="" value={comment} onChange={hendleCommentChange} placeholder="Enter your commennt"></textarea>
            <p>Comment: {comment}</p>

            <select name="" id="" value={pyment} onChange={hendlePymentChange}>
                <option value="">Select an option</option>
                <option value="visa">Visa</option>
                <option value="mastercard">Master Card</option>
                <option value="giftcard">Gift Card</option>
            </select>
            <p>payment : {pyment}</p>

            <label htmlFor="">
                <input type="radio" name="ship" value="pickup" checked={shipping === "pickup"} onChange={hendleShippingChage} />
                Pick Up
            </label>
            <br />
            <label htmlFor="">
                <input type="radio" name="ship" value="delivery" checked={shipping === "delivery"} onChange={hendleShippingChage} />
                Delivery
            </label>
            <p>Shipping: {shipping}</p>
        </div>
    )
}

export default MyComponent2;