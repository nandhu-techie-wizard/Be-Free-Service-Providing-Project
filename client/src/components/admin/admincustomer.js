import React,{useEffect,useState}from "react";
import axios from "axios";
import { Link ,useParams} from "react-router-dom";
import'./admin.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import adminlogo from'./logoadmin.png'
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";
import { faRightFromBracket, faUserAlt } from "@fortawesome/free-solid-svg-icons";
export function Admincustmers(){
    var {userid}=useParams()
    const[details,setDetails]=useState([])
    useEffect(()=>{
      fetch("http://localhost:3005/getcustemer")
      .then((res) => res.json())
      .then((data)=> setDetails(data))
  })
  function deleted(userid){
    let key={userid:userid}
    axios.post('http://localhost:3005/deletevender',key)
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
        <a class="navbar-brand" href="#" className="ms-2 text-decoration-none text-success" >
        <img src={adminlogo} width="50px" height="50"/> <span className="ms-2 fw-bolder fs-3">Be Free</span></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav  ms-auto">
          <li class="nav-item active">
          <Link to='/admin' className="nav-link text-success folat-end fw-bolder " href="#">Admin
          <FontAwesomeIcon icon={faUserAlt} className="mx-2"/>
          </Link></li>
            <li class="nav-item active">
              <Link to='/login' className="nav-link text-success folat-end fw-bolder " href="#">log Out
              <FontAwesomeIcon icon={faRightFromBracket} className="mx-2"/>
              </Link></li>

            </ul>
        </div>
      </nav>
      <div className="min-vh-100  adminpage">
      <h1 className="text-success text-center">All Customers Details.</h1>
        <div className="d-flex row m-1 justify-content-around mx-auto">
        {details.map((value,index)=>(
            <>
            <div className="card col-lg-3 m-1 text-center">
            <FontAwesomeIcon icon={faUserCircle} className='useradmin p-3'/>
       <div className="card-body">
           <h3 className="card-title">{value.name}</h3>
           <h4 classNamme ="card-text">{value.email}</h4>
           <h3 className="">{value.mobile}</h3>
           <h5 className=""> {value.location }</h5><br/>
           <a href={`tel:${value.mobile}`} className="btn btn-success"> call</a>
           <button className="btn btn-danger ms-4" onClick={()=>{deleted(value.userid)}}>Delete</button>
           <Link to={`/user/${value.userid}`}><button className="btn btn-info ms-4" >Veiw Page</button></Link>
                
         </div>
                </div>
            </>
                    ))}
     </div>
     </div>
        </>
    )
}