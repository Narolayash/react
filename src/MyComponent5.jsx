import React, {useState} from 'react';

function MyComponent5() {

    const [cars, setCars] = useState([]);
    const [car, setCar] = useState({
        year: new Date().getFullYear(),
        make: "",
        model: "",
    });

    const hendleAddCar = () => {
        const newCar = {
            year: car.year,
            make: car.make,
            model: car.model,
        }
        setCars(cars => [...cars, newCar]);
        setCar({
            year: new Date().getFullYear(),
            make: "",
            model: "",
        })
    };

    const hendleRemoveCar = (index) => {
        setCars(cars.filter((_, i) => i !== index));
    } 

    const hendleYearChange = e => setCar(car => ({...car, year: e.target.value}));
    const hendleMakeChange = e => setCar(car => ({...car, make: e.target.value}));
    const hendleModelChange = e => setCar(car => ({...car, model: e.target.value}));
    
    return (
        <div>
            <h2>List of Car</h2>
            <ul>
                {cars.map((car, index) => (
                    <li key={index} onClick={() => hendleRemoveCar(index)}>
                        {car.year} {car.make} {car.model}
                    </li>
                ))}
            </ul>

            <input type="number" value={car.year} onChange={hendleYearChange} /> <br />
            <input type="text" value={car.make} onChange={hendleMakeChange} /> <br />
            <input type="text" value={car.model} onChange={hendleModelChange} /> <br />
            <button onClick={hendleAddCar}>Add Car</button>
        </div>
    )
}

export default MyComponent5;