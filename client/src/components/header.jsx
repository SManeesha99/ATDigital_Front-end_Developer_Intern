import React from 'react'
import Logo from '../images/Logo.png'
import './header.css'

function header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <img src={Logo} style={{ height:'25px'  }}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">Service</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link " aria-current="page" href="#">Careers</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default header