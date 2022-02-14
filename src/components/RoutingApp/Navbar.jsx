import React from 'react'
import { Link } from 'react-router-dom'
import NavLink from './../../../node_modules/react-router-dom/es/NavLink';

export default function Navbar() {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#">React Playground</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">

                    <li class="nav-item">
                        <NavLink className="nav-link" to="/">Home</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/products">Products</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/posts/2022/02">Post</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/admin">Admin</NavLink>
                    </li>
                    <li class="nav-item">
                        <NavLink className="nav-link" to="/counter">Counter</NavLink>
                    </li>

                </ul>
            </div>
        </nav>

    )
}
