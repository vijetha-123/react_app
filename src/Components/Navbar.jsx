import React from "react";
import {Link} from 'react-router-dom';

export default function navbar(){
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
            <li className="nav-item">
                    <Link className="nav-link" to="classcom">delicious food </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="BScomp">deserts</Link>
                </li>
                </ul>
                </nav>

    )
}