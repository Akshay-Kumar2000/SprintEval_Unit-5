import React from "react";

import { useNavigate } from "react-router-dom";

function Navbar() {
    const Navigate = useNavigate();

    return(
        <div id="navbar">
            <img src="" alt="" />
            <input type="text" placeholder="Google Search"></input>
            <button className="search" onClick={() => {
                Navigate("/Home");
                console.log("clicked");
            }}>Search</button>
        </div>
    )
}

export default Navbar;