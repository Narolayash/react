import React, {useState} from 'react';

function MyComponent4() {
    const [foods, setFoods] = useState(['Apple', 'Banana']);

    const hendleAddFood = () => {
        const newFood = document.getElementById('foodInput').value;
        document.getElementById('foodInput').value = "";
        setFoods(foods => [...foods, newFood]);
        document.getElementById('foodInput').focus();
    }

    const hendleRemoveFood = (index) => {
        setFoods(foods.filter((_, i) => i !== index));
    }

    // foods.forEach((food, index) => console.log(food, index));

    return (
        <div>
            <h2></h2>
            <ul>
                {foods.map((food, index) => 
                <li key={index} onClick={() => hendleRemoveFood(index)} > 
                    { food } 
                </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder='Enter the food name' />
            <button onClick={hendleAddFood}>Add Fodd</button>
        </div>
    )
}

export default MyComponent4;