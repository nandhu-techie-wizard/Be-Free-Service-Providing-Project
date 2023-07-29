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
export function Updateservender(){
  var {userid}=useParams()
  var{service_id}=useParams()
  const [service,setService]= useState("")
const [experenice,setExperenice] = useState("")
const [charge,setCharge] = useState("")
const [aboutven,setAboutven]=useState("")
const [worklink,setWorklink]=useState("")
const[location,setLocation]=useState("")

useEffect(()=>{
    fetch("http://localhost:3005/getdataupadte/"+service_id)
    .then(response=> response.json())
    .then((res)=>{
        setService(res[0].service)
        setExperenice(res[0].experenice)
        setCharge(res[0].charge)
        setAboutven(res[0].aboutven)
        setWorklink(res[0].worklink)
    })
  },[])
  const handleupdateserv=(event)=>{
    event.preventDefault()
    var key={
      "experenice":experenice,
      "charge":charge,
      "aboutven":aboutven,
      "worklink":worklink
    }
        axios.put("http://localhost:3005/updatedataserv/"+service_id,key)
        .then(function (res){
            if(res.data.status==="error"){
                alert('Error not upadte')
            }
            else if(res.data.status === "success"){
                alert("the value are updated")
                window.location.href=`/vender/${userid}`;
            }
    })
    }
    return(
        <>
        <div className="addservice vh-100  ">               
        <h1 className="text-center text-secondary fw-bold mt-3">Update Our Service in Be Free</h1>
        <div className="mx-auto  text-center mt-5 bg-white col-lg-6 p-5 rounded-4 Emp_Reg">
        <h5>Update all Details without Services</h5>
        <form onSubmit={handleupdateserv}>
        <select id="service"value={service} zclassName="mb-2 col-lg-4 text-center rounded-2 ">
        <option disabled>Servies</option>
        <option value="Electrical"> Electrical</option>
        <option value="AC">AC</option>
        <option value="Computer Service">Computer Service</option>
        <option value="Water Purefing">Water Purefing</option>
        <option value="plumbing"> plumbing</option>
      </select><br/>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faEnvelope} className='me-2' />
        <input type="text" id='experenice' placeholder="Enter Experenice this serive" value={experenice}  onChange={(a)=>{setExperenice(a.target.value)}}/></div>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faIndianRupeeSign}className='me-2' />
        <input id="charge" type="Number" name="charge" placeholder="Enter charge per/hr" value={charge} onChange={(a)=>{setCharge(a.target.value)}}/></div>
        <div className="input1 mt-2 col-lg-4 mx-auto p-1">
        <textarea  id='aboutven' placeholder="Enter about work" value={aboutven} onChange={(a)=>{setAboutven(a.target.value)}} />
        </div>
        <div className=" input1 mt-2 col-lg-4 mx-auto p-1">
        <FontAwesomeIcon icon={faImage}className='me-2' />
        <input id="worklink" type="text" name="charge" placeholder="upload working image link" value={worklink} onChange={(a)=>{setWorklink(a.target.value)}}/></div>
        <div className='button1  mt-3 mx-auto p-1'>
  <button type="submit" className="btn btn-success col-lg-4">Update</button></div>
        </form>
                </div>
        </div>  
        </>
    );
}