// import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleClick = () => {
        if (location.pathname === "/") {
            navigate("/hal2");
        } else {
            navigate("/");
        }
    };

    const buttonText = location.pathname === "/" ? "Next " : "return";

    return <button style={{ alignItems: "center", backgroundColor: "orange" }} onClick={handleClick}>{buttonText}</button>;
}

export default Navbar;

