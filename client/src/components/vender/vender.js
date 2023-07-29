import React, { useEffect, useState } from "react";
import axios from "axios";
import './vender.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link, useParams} from "react-router-dom";
import venderlogo from './logovender.png'
import { faBriefcaseMedical, faHandshake, faRightFromBracket, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
export function Vender(){
  var {userid}=useParams()
  const [name,setName]= useState("")
  const [mobile,setMobile] = useState("")
  const [email,setEmail] = useState("")
  useEffect(()=>{
      fetch("http://localhost:3005/getdata/"+userid)
      .then(response=> response.json())
      .then((res)=>{
          setName(res[0].name)
          setMobile(res[0].mobile)
          setEmail(res[0].email)
      })
  },[])
  const[items,setItems]=useState([])
  useEffect(()=>{
    fetch("http://localhost:3005/getdataservice/"+userid)
    .then((res) => res.json())
    .then((data)=> setItems(data))
})
  function delet(service_id){
    let key={service_id:service_id}
    axios.post('http://localhost:3005/deleteservice',key)
    .then(function(res){
        if(res.data.status ==="error"){
            alert("Data is not del")
        }
        else if(res.data.status === "success"){
            alert("Data is deleted")
        }
})
}
    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-black nav_bg ">
        <Link To='/login'class="navbar-brand" className="ms-2 text-decoration-none text-success" >
        <img src={venderlogo} width="50px" height="50"/> <span className="ms-2 fw-bolder fs-3">Be Free</span></Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ms-auto">
            <li class="nav-item active">
              <Link to={`/addservice/${userid}`} className="nav-link text-success folat-end fw-bolder " href="#">Add Service
              <FontAwesomeIcon icon={faBriefcaseMedical} className="mx-2"/>
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
      <div className="adminpage min-vh-100 ">
      <div className="col-lg-2 mx-auto pt-3" >
      <img src={venderlogo} className="col-lg-5 col-2 "/>
      </div>
      <div className="col-lg-10 mx-auto d-flex row  ">
     
      <div className="col-lg-3 align-self-start mt-5 p-5 position-sticky bg-white text-center rounded-5"> 
      
      <FontAwesomeIcon icon={faUserCircle} className='venderuser'/>
      <h3>{name}</h3>
      <p>{mobile}</p><br/>
      <h5>{email}</h5>
                  <div className="card-body ">
            <Link to={`/updatedetails/${userid}`}><button className="btn btn-success ms-3" >update</button></Link>
               </div>           
      </div>
      
      <div className=" col-lg-8 mt-2 m-2"> 
      <h4>Welcome! Be Free <FontAwesomeIcon icon={faHandshake} />{name}<span> Add Services Details</span></h4>
      
      {items.map((value,index)=>(
        <>
            <div className="row d-flex justify-content-around bg-white col-lg-12 mb-4 rounded-4 p-4">
             <img src={value.worklink} className="card-img-top" alt=".."/>
                <div className="card-body">
                    <h3 className="card-title">{value.service}</h3>
                    <p classNamme ="card-text">{value.aboutven}</p><br/>
                    <h3 className="">{value.experenice}</h3>
                    <h2 className=""><span class="WebRupee">&#8377;</span> {value.charge }</h2><br/>
                    <Link to= {`/updateservice/${value.userid}/${value.service_id}`}>
                    <button className="btn btn-primary">update</button></Link>
                    
                    <button className="btn btn-danger ms-4" onClick={()=>{delet(value.service_id)}}>Delete</button>
             </div>
             </div>
      
        </>
                ))}
     
      </div>
      </div>
      </div>
        </>
    );
}