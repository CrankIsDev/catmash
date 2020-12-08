// Display cat for vote
import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";

const Navigation = () => {

    return(
      <nav>
       <div className="nav-columns">
        <div className="nav-column">
          <ul>
            <li>
              <NavLink to="/" className="nav-links" exact>
                Cat Mash
              </NavLink>
            </li>
            <li>
              <NavLink to="/best-cat" className="nav-links" exact>
                Les plus beaux chats
              </NavLink> 
            </li>
          </ul>
        </div>
       </div>
      </nav>
    )
  };

export default Navigation;