import React,{useState,useEffect} from "react";
import { Link  ,useParams} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faUser } from "@fortawesome/free-regular-svg-icons";
import { faHospitalUser, faIndianRupeeSign} from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import './venderservice.css'
import axios from "axios";
export function Addservender(){
  var {userid}=useParams()
  const [name,setName]= useState("")
const [mobile,setMobile] = useState("")
const [email,setEmail] = useState("")
const [location,setLocation] = useState("")
useEffect(()=>{
  fetch("http://localhost:3005/getdata/"+userid)
    .then(response=> response.json())
    .then((res)=>{
        setName(res[0].name)
        setMobile(res[0].mobile)
        setEmail(res[0].email)
        setLocation(res[0].location)
    })
  },[])
  const handleinsertserv=async(event)=>{
    event.preventDefault()
    var service=document.getElementById("service").value
    console.log(service)
    var experenice=document.getElementById("experenice").value
    console.log(experenice)
    var charge=document.getElementById("charge").value
    console.log(charge)
    var aboutven=document.getElementById("aboutven").value
    console.log(aboutven)
    var worklink=document.getElementById("worklink").value
    console.log(worklink)
    var key={
      "service":service,
      "experenice":experenice,
      "charge":charge,
      "aboutven":aboutven,
      "worklink":worklink
    }
    if(service==''){
      alert("please fill serivce")
    }else if(experenice==''){
      alert("please fill experenice")
    }else if(aboutven==''){
            alert("please fill about")
    }else if(charge==''){
            alert("please fill charge")
    }else if(worklink==''){
            alert("please fill password")
    }else{
      await axios.post("http://localhost:3005/insertdataserv/"+userid,key)
      .then((res)=>{
        if(res.data.status==="error"){
          alert("data is not insert")
        }else if(res.data.status==="success"){
          alert("data is inserted")
          window.location.href=`/vender/${userid}`;}
        
      })
    }
  }
    return(
        <>
        <div className="addservice vh-100  ">               
        <h1 className="text-center text-secondary fw-bold mt-3">Add Our Service Be Free</h1>
        <div className="mx-auto  text-center mt-5 bg-white col-lg-6 p-5 rounded-4 Emp_Reg">
        <FontAwesomeIcon icon={faHospitalUser} className="userpen mb-2 text-success"  />
                <div className="input1 mt-2 col-lg-4 mx-auto p-1" >
        <FontAwesomeIcon icon={faPhone} className='me-2' />
        <input id="mobile" type="tel" name="phone" placeholder="Enter Mobile Number" value={mobile}/><br/>
        </div>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faEnvelope} className='me-2' />
        <input id="email" type="email" name="email" placeholder="Enter Email"value={email} /><br/></div>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faUser} className='me-2' />
        <input id="name" type="text" name="FullName" placeholder="Enter FullName" value={name} /></div>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faLocationDot} className='me-2' />
        <input type="text" id='location' placeholder="Enter Full Address" value={location}  /></div>
        <form onSubmit={handleinsertserv}>
        <select id="service" zclassName="mb-2 col-lg-4 text-center rounded-2 ">
        <option disabled>Servies</option>
        <option value="Electrical"> Electrical</option>
        <option value="AC">AC</option>
        <option value="Computer Service">Computer Service</option>
        <option value="Water Purefing">Water Purefing</option>
        <option value="plumbing"> plumbing</option>
      </select><br/>

        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faEnvelope} className='me-2' />
        <input type="text" id='experenice' placeholder="Enter Experenice this serive" /></div>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faIndianRupeeSign}className='me-2' />
        <input id="charge" type="Number" name="charge" placeholder="Enter charge per/hr"/></div>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <textarea  id='aboutven' placeholder="Enter about work" />
        </div>
        <div className=" input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faImage}className='me-2' />
        <input id="worklink" type="text" name="charge" placeholder="upload working image link"/></div>
        <div className='button1  mt-3 mx-auto p-1'>
  <button type="submit" className="btn btn-success col-lg-4">Register</button></div>
        </form>
                </div>
        </div>  
        </>
    );
}