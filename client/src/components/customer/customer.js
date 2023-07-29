import React, { useEffect, useState } from "react";
import './user.css'
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link,useParams} from "react-router-dom";
import logouser from './logouser.png'
import { faBusinessTime, faRightFromBracket, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
export function User(){
  var {userid}=useParams()
  const[items,setItems]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3005/services")
    .then((res) => res.json())
    .then((data)=>setItems(data))
})

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-black nav_bg ">
        <Link to='/login' class="navbar-brand" className="ms-2 text-decoration-none text-success" >
        <img src={logouser} width="50px" height="50"/> <span className="ms-2 fw-bolder fs-3">Be Free</span></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ms-auto">
          <li class="nav-item active">
              <Link to={`/updatedetails/${userid}`} className="nav-link text-success folat-end fw-bolder " href="#">Update
              <FontAwesomeIcon icon={faUserPen} className="mx-2" />
              </Link>
            </li>
            <li class="nav-item">
            <Link to='/contactus'className="nav-link text-success fw-bolder" href="#">Contact Us  </Link>
            </li>
            <li class="nav-item active">
              <Link to='/login' className="nav-link text-success folat-end fw-bolder " href="#">log Out
              <FontAwesomeIcon icon={faRightFromBracket} className="mx-2"/>
              </Link>
              
            </li>
            </ul>
        </div>
      </nav>
        <div className="min-vh-100 userpage ">
        <h1 className="text-center pt-5">Find the Service Person</h1>
        <div class="serachtogle container mt-5 card p-5 rounded-5" >
       <form class="d-flex col-lg-8 mx-auto " role="search">
       <select class="form-select text-center me-2" >
          <option selected disabled hidden >Servies</option>
          <option value="Electrical"> Electrical</option>
          <option value="AC">AC</option>
          <option value="Computer Service">Computer Service</option>
          <option value="Water Purefing">Water Purefing</option>
          <option value="plumbing"> plumbing</option>
        </select>
        <select class="form-select me-2" aria-label="Default select example">
        <option selected disabled hidden >loction</option>
        <option value="chennai">chennai</option>
        <option value="Bangalore">Bangalore</option>
        <option value="covi">covi</option>
      </select>
           <button class="btn btn-outline-success col-lg-3 " type="submit"><span className="fw-bold">Search</span></button>
      </form>
        </div>
        <div className="d-flex row m-1 justify-content-around mx-auto">
       
            {items.map((value,index)=>(
                   
                <> 
                     <div className="card col-lg-3 m-1">
                    
                     <img src={value.worklink} className="card-img-top" alt=".."/>
                <div className="card-body">
                    <h4 classNamme ="card-text"> <FontAwesomeIcon icon={faUser} className='me-2' />{value.name}</h4>
                    <h3 className="card-title">{value.service}</h3>
                    <h4 className="card-title">{value.location}</h4>
                    <p classNamme ="card-text">{value.aboutven}</p><br/>
                    <h3 className=""><FontAwesomeIcon icon={faBusinessTime} />{value.experenice}</h3>
                    <h2 className=""><span class="WebRupee">&#8377;</span> {value.charge }</h2><br/>
                    <a href={`tel:${value.mobile}`} className="btn btn-success"> Call</a>
                
                 

                   
         
                    
             </div>
                    </div>
                </>
                        ))}
         </div>

        </div>
  
        </>
    );
}