import React from 'react'

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
                        <a class="nav-link" href="/">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/products">Products</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/posts/2022/02">Post</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="/admin">Admin</a>
                    </li>

                </ul>
            </div>
        </nav>


        // <ul>
        //     <li>
        //         <a href="/">Home</a>
        //     </li>
        //     <li>
        //         <a href="/products">Products</a>
        //     </li>
        //     <li>
        //         <a href="/posts/2022/02">Post</a>
        //     </li>
        //     <li>
        //         <a href="/admin">Admin</a>
        //     </li>
        // </ul>
    )
}
