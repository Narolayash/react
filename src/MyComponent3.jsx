import React, {useState} from 'react'

function MyComponent3() {

    const [car, setCar] = useState({
        year: 2024,
        make: "Ford",
        model: "Mustang",
    });

    const hendleYear = (e) => setCar(car => ({...car, year: e.target.value}));
    const hendleMake = (e) => setCar(car => ({...car, make: e.target.value}));
    const hendleModel = (e) => setCar(car => ({...car, model: e.target.value}));

    return (
        <div>
            <p>
                Your favorite car is {car.year} {car.make} {car.model}
            </p>
            <input type="number" value={car.year} onChange={hendleYear} /> <br />
            <input type="text" value={car.make} onChange={hendleMake} /> <br />
            <input type="text" value={car.model} onChange={hendleModel} /> <br />
        </div>
    )

}

export default MyComponent3;
