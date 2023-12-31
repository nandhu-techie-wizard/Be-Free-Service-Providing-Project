import React ,{useState,useEffect} from 'react'
import'./login.css'
import logo from './logo-no-background.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faLock } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios'

import { Link } from 'react-router-dom'
export function Login(){
    localStorage.clear()
    const handlelogin=async(event)=>{
    event.preventDefault();
    var username=document.getElementById("mobile").value
    var password=document.getElementById("password").value
    var key={
        "username":username,"password":password
    }
    await axios.post("http://localhost:3005/login",key)
    .then(function(res){
        if (res.data.status === "error"){
            alert('Invalid Credentials contact Admin')
            window.location.reload();
            
        }
        else if (res.data.status==='success')
        {
            let userid=res.data.userid;
            let role =res.data.role;
            alert(role)
        if(role=== 'admin'){
            localStorage.setItem('userid',userid);
             window.location.href="/admin"}
        else if(role=== 'Customer'){
            localStorage.setItem('userid',userid);
             window.location.href=`/user/${userid}`;}
         else if(role=== 'Vender'){
           localStorage.setItem('userid',userid); 
           window.location.href=`/vender/${userid}`;}
         }
         else if(res.data.status==='Invalid_data'){
            alert("the given data is incorrect")
        }
        else if(res.data.status==='Invalied'){
            alert("your username and password is incorrect")
        }
    })
    }
    return(<>
        <div className='loginpage text-center min-vh-100 '>
        <h1 >Login</h1><br/>
    <div className='mx-auto  mb-3 bg-white col-lg-6 p-5 rounded-4' >
    <div>
    <img src={logo} className='col-lg-3 col-4'/>
    </div>
    <form onSubmit={handlelogin}>
    <div className='input1 col-lg-4 mx-auto mt-4  mb-3'>
    <FontAwesomeIcon icon={faUserAlt} className='me-2' /><input placeholder='Enter UserName/Email' name='mobile' id='mobile' />
    </div>
    <div className='input1 col-lg-4 mx-auto'>
    <FontAwesomeIcon icon={faLock} className='me-2'/>  <input type='password' placeholder='Password'name='password' id='password'/>
    </div>
    <div className='button1  pt-3 '>
        <button className='btn btn-success col-lg-3'>Login</button></div>
        </form>
        <div className='mt-4'><Link to ='/Reg' className='userreg'><p className='text-success '>New User/Register Now</p></Link></div>
    </div>

        </div>

        </>);
}