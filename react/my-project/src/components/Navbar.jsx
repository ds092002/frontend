import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {

    const box = [
        {
            height: "100px",
            width: "200px"
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
        <div>
            <h1 className={box[0]}>This is CSS module staructure</h1>
        </div>
    );
};

export default Navbar;
