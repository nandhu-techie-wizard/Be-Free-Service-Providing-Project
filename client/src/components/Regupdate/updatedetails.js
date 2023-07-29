import React,{useState,useEffect} from "react";
import'./Regupdte.css'
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faLock, faUserPen } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
export function Updatedetails(){
    var {userid}=useParams()
    const [role,setRole]= useState("")
    const [name,setName]= useState("")
    const [mobile,setMobile] = useState("")
    const [email,setEmail] = useState("")
    const [location,setLocation]=useState("")
    const[password,setPassword]=useState("")
    useEffect(()=>{
        fetch("http://localhost:3005/getdata/"+userid)
        .then(response=> response.json())
        .then((res)=>{
            setRole(res[0].role)
            setName(res[0].name);
            setMobile(res[0].mobile)
            setEmail(res[0].email)
            setLocation(res[0].location)
            setPassword(res[0].password)
        })
    },[])
    const handleupadte=(event)=>{
        event.preventDefault()
        var key={
            "name":name,
            "mobile":mobile,
            "email" :email,
            "location":location,
            "password":password
        }
        axios.put("http://localhost:3005/updatedata/"+userid,key)
        .then(function (res){
            if(res.data.status==="error"){
                alert('Error not upadte')
            }
            else if(res.data.status === "success"){
                alert("the value are updated")
                if(role=== 'Customer'){
                     window.location.href=`/user/${userid}`;}
                 else if(role=== 'Vender'){
                   window.location.href=`/vender/${userid}`;}
                 
            }
    })
}
    return(
        <>
        <div className="updatedetails min-vh-100   ">               
        <h1 className="text-center text-secondary fw-bold mt-3">Update Profile in Be Free</h1>
        <div className="mx-auto  text-center mt-5 bg-white col-lg-6 p-5 rounded-4 Emp_Reg">
        <FontAwesomeIcon icon={faUserPen} className="userpen mb-3" />
        <form onSubmit={handleupadte}>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1" >
        <FontAwesomeIcon icon={faPhone} className='me-2' />
        <input id="mobile" type="tel" name="phone" placeholder="Enter Mobile Number" value={mobile} onChange={(a)=>{setMobile(a.target.value)}}/><br/>
        </div>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faEnvelope} className='me-2' />
        <input id="email" type="email" name="email" placeholder="Enter Email" value={email} onChange={(a)=>{setEmail(a.target.value)}} /><br/></div>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faUser} className='me-2' />
        <input id="fullname" type="text" name="FullName" placeholder="Enter FullName" value={name} onChange={(a)=>{setName(a.target.value)}} /></div>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faLocationDot} className='me-2' />
        <input type="text" id='location' placeholder="Enter Full Address"  value={location} onChange={(a)=>{setLocation(a.target.value)}} /></div>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faLock} className='me-2' />
        <input id="password" type="password" name="password" placeholder="Enter Password"  value={password} onChange={(a)=>{setPassword(a.target.value)}}/></div>
        <div className='button1  mt-3 mx-auto p-1'>
     <button type="submit" className="btn btn-success col-lg-4">update</button> </div>
        </form>
                </div>
        </div>  
        </>

    );
}