import React, {useState, useEffect} from "react";

function MyComponent7() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);


    useEffect(() => {
        window.addEventListener('resize', hendleResize);
        console.log("Event listener add")

        return () => {
            window.removeEventListener("resize", hendleResize);
            console.log("Event listener remove");
        }
    }, []);
    

    useEffect(() => {
        document.title = `size: ${height} ${width}`
    }, [height, width]);
    
    
    const hendleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }
    
    
    return (
        <> 
            <p>window width: {width}</p>
            <p>window height: {height}</p>
        </>
    )
}

export default MyComponent7;