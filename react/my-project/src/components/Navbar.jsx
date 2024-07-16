import React from "react";
import styles from "./Navbar.module.css";
import {useState} from "react"

const Navbar = () => {
    let initialState = 0;
    const [count, setCount] = useState(initialState);

    const box = [
        {
            height: "100px",
            width: "200px",
            display: "flex" 
        },
        {
            height: "100px",
            width: "200px"
        },
        {
            height: "100px",
            width: "200px"
        }
    ]
    return (
        <div className="flex justify-center flex-col text-center">
            {/* <h1 style={box[0]}>This is CSS module staructure</h1> */}
            <h1>This is CSS module staructure</h1>
            <span>countNo:- {count}</span><br/>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={() => setCount(initialState)}>Reset</button>
        </div>
    );
};

export default Navbar;
