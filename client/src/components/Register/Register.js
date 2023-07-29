import React from "react";
import axios from "axios";
import './register.css'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export function Reg(){
        const handleinsertreg=async(event)=>{
                event.preventDefault()
                var name=document.getElementById("name").value
                alert(name)
                var mobile=document.getElementById("mobile").value 
                console.log(mobile)
                var email=document.getElementById("email").value
                console.log(email)
                var location=document.getElementById("location").value 
                console.log(location)
                var password=document.getElementById("password").value
                console.log(password)
                var role=document.getElementById("role").value
                console.log(role)
                var key={
                "role":role,
                  "mobile":mobile,
                  "email":email,
                  "name":name,
                  "location":location,
                  "password":password
                }
                if(role==''){
                  alert("please fill role")
                // eslint-disable-next-line eqeqeq
                }else if(mobile==''){
                  alert("please fill mobile")
                }else if(email==''){
                  alert("please fill email")
                }else if(name==''){
                        alert("please fill name")
                }else if(location==''){
                        alert("please fill loction")
                }else if(password==''){
                        alert("please fill password")
                }else{
                  await axios.post("http://localhost:3005/insertdata",key)
                  .then((res)=>{
                    if(res.data.status==="error"){
                      alert("data is not insert")
                    }else if(res.data.status==="success"){
                      alert("data is inserted")
                      window.location.href="/login";
                    }
                  })
                }
              }
    return(<>  
        <div className="Reg vh-100  ">               
        <h1 className="text-center text-secondary fw-bold mt-3">Welcome To Be Free</h1>
        <div className="mx-auto  text-center mt-5 bg-white col-lg-6 p-5 rounded-4 Emp_Reg">
        <FontAwesomeIcon icon={faUserPen} className="userpen mb-3" />
       <form onSubmit={handleinsertreg}>
        <select id="role" className="mb-2 col-lg-4 text-center rounded-2 ">
        <option disabled>Select User Type: </option>
        <option value="Customer">Customer</option>
        <option value="Vender">Vender</option>
        </select><br/>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1" >
        <FontAwesomeIcon icon={faPhone} className='me-2' />
        <input id="mobile" type="tel" name="phone" placeholder="Enter Mobile Number" /><br/>
        </div>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faEnvelope} className='me-2' />
        <input id="email" type="email" name="email" placeholder="Enter Email" /><br/></div>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faUser} className='me-2' />
        <input id="name" type="text" name="FullName" placeholder="Enter FullName" /></div>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faLocationDot} className='me-2' />
        <input type="text" id='location' placeholder="Enter Full Address" /></div>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faLock} className='me-2' />
        <input id="password" type="password" name="password" placeholder="Enter Password"/></div>
        <div className='button1  mt-3 mx-auto p-1'>
     <button type="submit" className="btn btn-primary col-lg-4">Register</button></div>
        </form>
                </div>
        </div>  
        </>);
}