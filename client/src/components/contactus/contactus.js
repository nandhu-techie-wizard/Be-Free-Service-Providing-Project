import React from "react";
import "./contactus.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedin, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
export function Contactus(){
  return(
    <>
    <div className="container-fluid contactmain pt-5 min-vh-100 text-center">
      <div className="container bg-light text-black col-lg-6 p-5">
        <div className="container mt-5">
        <h1>Contact Us</h1>
        <div className="conatiner mt-5">

          <div className="mt-3 contactdiv col-lg-5 mx-auto">
          <FontAwesomeIcon icon={faUser} />
          <input type="text" placeholder="Enter your name" className="contactinput1" />
          </div>

         <div className="mt-3 contactdiv col-lg-5 mx-auto">
         <FontAwesomeIcon icon={faEnvelope} />
         <input type="text" placeholder="Enter your email address" className="text-black contactinput1"/>
         </div>

         <div className="mt-3 contactdiv col-lg-5 mx-auto">
         <FontAwesomeIcon icon={faClipboard} />
          <input type="text" placeholder="your Service & Feedback" className="text-black contactinput1"/>
         </div>
        </div>

        <button className=" mx-auto rounded-4 btn buttonsubmit mt-2 btn-success col-lg-5 col-12">Submit</button>
        </div>


        <div className="container mt-5">
          <div className="col-lg-12 col-12">
          <h4>You Can Also Contact Us</h4>
          <h5 className="text-info">Custmer Servies: 1800-9600-817157</h5>
          </div>

          <div className="col-lg-12  row">
          <div className="col-lg-3 col-4">
          <a href='https://www.instagram.com/'><FontAwesomeIcon icon={faInstagram} className="instagram text-danger"/></a>
          </div>


          <div className="col-lg-3 col-4">
          <a href='https://twitter.com/i/flow/login?redirect_after_login=%2Flogin%3Flang%3Den'><FontAwesomeIcon icon={faTwitter} className="twitter text-primary" /></a>
          </div>

          <div className="col-lg-3 col-4">
          <a href='https://www.linkedin.com/in/nandaelavarasu-krishnamoorthy-878045199/'><FontAwesomeIcon icon={faLinkedin} className="Linkedin text-primary" /></a>
          </div>
          <div className="col-lg-3 col-4">
          <a href='https://mail.google.com/mail/u/2/#inbox'> <FontAwesomeIcon icon={faEnvelope} className="Linkedin text-danger"/></a>
          </div>
          </div>
          
        </div>
      </div>
      </div>
    </>
  )
}