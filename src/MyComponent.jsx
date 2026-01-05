import React, {useState} from "react";

function MyComponent() {
    const [name, setName ] = useState('Guest');
    const [age, setAge] = useState(15);
    const [isEmplloyed, setIsEmplloyed] = useState(false);

    const updateName = () => {
        setName('Zubber');
    }

    const updateAge = () => {
        setAge(age + 1);
    }
    
    const toggleEmpStatus = () => {
        setIsEmplloyed(!isEmplloyed);
    }

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={() => {updateName()}}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={() => {updateAge()}}>Increment Age</button>
            <p>Is employed: {isEmplloyed? 'Yes' : 'No'}</p>
            <button onClick={() => {toggleEmpStatus()}}>Toggle Status</button>
        </div>
    )
}

export default MyComponent;