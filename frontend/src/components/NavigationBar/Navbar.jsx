import React from 'react'
import { Link } from 'react-router-dom'

import './NavbarStyles.css'

function Navbar() {
  return (
    <div class="containe-fluid">
        <div >
    <nav class="navbar navbar-expand-lg  navigationBar">
        <div class="container-fluid">
            <Link to={'/'}>
            <h1 class="navbar-brand siteName">
              Harbinger
            </h1>
            </Link>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav">
                 
                </div>
                <div class="navbar-nav ms-auto">
                   <button class="button-70" >Login</button>
                </div>
            </div>
        </div>
    </nav>
</div>
    </div>
  )
}

export default Navbar