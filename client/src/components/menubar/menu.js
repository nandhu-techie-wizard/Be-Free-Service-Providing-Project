import React from "react";
import axios from "axios";
import'./menu.css'
import logo from './logo-no-background.png'
import { Link } from 'react-router-dom'

export function Menu(){

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-black nav_bg ps-4">
  <Link to='/login' class="navbar-brand" href="" className="ms-2 text-decoration-none text-success"><img src={logo} width="50px" height="50"/> <span className="ms-2 fw-bolder fs-3">Be Free</span></Link>
  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav  ms-auto">
      <li class="nav-item active">
        <Link to='/aboutus' className="nav-link text-success fw-bolder" href="#">About us</Link>
      </li>
      <li class="nav-item">
      <Link to='/contactus'className="nav-link text-success fw-bolder" href="#">Contact Us  </Link>
      </li>
  </ul>
  </div>
</nav>
    </>);
}