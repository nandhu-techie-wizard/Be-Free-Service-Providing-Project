import React, { useEffect, useState }  from "react";
import { Link } from "react-router-dom";
import'./admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonDigging, faPersonShelter, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import adminlogo from'./logoadmin.png'
export function Admin(){
    const[items,setItems]=useState([])
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((data)=> setItems(data))
    })
    return(<>
        <nav className="navbar navbar-expand-lg navbar-light bg-black nav_bg ">
        <a class="navbar-brand" href="#" className="ms-2 text-decoration-none text-success" >
        <img src={adminlogo} width="50px" height="50"/> <span className="ms-2 fw-bolder fs-3">Be Free</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ms-auto">
            <li class="nav-item active">
              <Link to='/login' className="nav-link text-success folat-end fw-bolder " href="#">log Out
              <FontAwesomeIcon icon={faRightFromBracket} className="mx-2"/>
              </Link></li>

            </ul>
        </div>
      </nav>

      <div className="adminpage min-vh-100  ">
      <div className="col-lg-2 mx-auto pt-4">
      <img src= {adminlogo} alt="" className="col-lg-8 col-4 "/>
      </div>
 
      <div className="row col-lg-10 mx-auto p-5">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card text-center">
    <FontAwesomeIcon icon={faPersonShelter}className="adminicon p-3"/>
      <div class="card-body ">
        <h2 class="card-title ">Customers</h2>
        <p class="card-text">All Customers Details.</p>
        <Link to='/admincustmers' class="btn btn-primary">Customers</Link>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card text-center">
    <FontAwesomeIcon icon={faPersonDigging} className="p-3 adminicon"/>
      <div class="card-body">
        <h2 class="card-title">Vendors</h2>
        <p class="card-text">All Vendors Details</p>
        <Link to='/adminvender'class="btn btn-primary">Vendors</Link>
      </div>
    </div>
  </div>
</div>
   </div>



        </>);
}