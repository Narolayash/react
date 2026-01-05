import React, {useState, useEffect, useRef} from "react";


export default function MyComponent8() {
    // const [number, setNumber] = useState(0);
    const inputRef = useRef(null);

    useEffect(() => {
        console.log("Component Render")
    })

    const handleChick = () =>  {
        inputRef.current.focus();
    }

    return (
        <>
            <button onClick={handleChick}>Click Me</button>
            <input type="text" ref={inputRef}/>
        </>
    )
}