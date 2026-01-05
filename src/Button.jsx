// import styles from '/button.module.css'

function Button() {
    // const styles = {
    //     backgroundColor: "hsl(200, 100%, 50%)",
    //     color: "white",
    //     padding: "10px 20px",
    //     border: "none",
    //     borderRadius: "5px",
    //     cursor: "pointer",
    // }

    return (
        // External Style
        <button className="button">Click me</button>

        // Inline Style
        // <button  style={styles} className="button">Click me</button>

        // Modules Style
        // <button className={syles.button}>Click me</button>
    )
}

export default Button;  