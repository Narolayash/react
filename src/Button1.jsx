
function Button1() {
    // const handleClick = () => {console.log("OUCH!!")};
    // const handleClick = (name) => {console.log(`${name} stop clicking me`)};

    // let count = 0;
    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name} you clicked me ${count} times/s`);
    //     }
    //     else {
    //         console.log(`${name} stop clicking me!`);
    //     }
    // };

    const handleClick = (e) => {
        e.target.textContent = "Ouchh!!"
    };

    return (<button onClick={(e) => handleClick(e)}>Click ME</button>)
    // return (<button onDoubleClick={(e) => handleClick(e)}>Click ME</button>)
}

export default Button1;