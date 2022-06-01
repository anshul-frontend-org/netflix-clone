import React from "react";
import "../css/Nav.css"

function Nav() {
    return (
        <div className="nav">
            <img 
              className="nav__logo"
              src={require('../images/download.jpeg')}
            />

            <img 
              className="nav__avatar"
              src={require('../images/avatar.png')}
            />
        </div>
    )
}

export default Nav;