
import React, { useState } from "react";
import './../styles/App.css';
import Home from "./Home";
import About from "./About";
import { Link } from "react-router-dom";

const App = ({children}) => {

  return (
    <div>
        {/* Do not remove the main div */}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul> 
        {children}

    </div>
  )
}

export default App
