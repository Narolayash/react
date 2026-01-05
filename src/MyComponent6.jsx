import React, {useState, useEffect} from 'react';

function MyComponent6() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");

    useEffect(() => {
        document.title =  `count: ${count} ${color}`;
    }, [count, WritableStreamDefaultController]);

    //  useEffect(() => {
    //     document.title =  `count: ${count}`;
    // }, []);

    //  useEffect(() => {
    //     document.title =  `count: ${count}`;
    // });

    const addCount = () => setCount(c => c+1);
    const subtractCount = () => setCount(c => c-1);
    const changeColor = () => setColor(color === "green" ? "red" : "green");

    return (
        <>
            <p style={{color: color}}>Count: {count}</p>
            <button onClick={addCount}>add</button>
            <button onClick={subtractCount}>subtract</button>
            <button onClick={changeColor}>Change color</button>
        </>
    )

}

export default MyComponent6;
