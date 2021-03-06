import React from "react";
import emailjs from 'emailjs-com';
//import 'bootstrap/dist/css/bootstrap.min.css';
import './contact.css'


function contact(){

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.init("user_L9rIYFbcYs3DcvKumt9o1");
        emailjs.sendForm('service_adroit', 'template_adroit', e.target, 'user_L9rIYFbcYs3DcvKumt9o1')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
      }

    return(
        <div className="contactPanel">
            <form className="contactForm" onSubmit={sendEmail}>
            <div className="row">
            <h3 class="contactTitle">Contact US</h3>
            </div>
            <div className="row label1">
                <label class="namelabel" for="name">Name* : </label>
            </div>
            <div className="row">
                <input class="nameinput" id="name" type="text" required/>
            </div>
            <div className="row label1">
                <label class="emaillabel" for="email">Email* : </label>
            </div>
            <div className="row">
                <input class="emailinput" id="email" type="email" required/>
            </div>
            <div className="row label1">
                <label class="phonelabel" for="phone">Phone* : </label>
            </div>
            <div className="row">
                <input class="phoneinput" id="phone" type="phone" required/>
            </div>
            <div className="row label1">
                <label class="msglabel" for="msg" required>Message* : </label>
            </div>
            <div className="row">
                <textarea class="msginput" id="msg"></textarea>
            </div>
            <div className="row">
                <input class="submitbtn" type="submit" value="Submit" />
                <input class="resetbtn" type="reset" value="Reset" />
            </div>
            </form>
        </div>
    )
}

export default contact;

/*
<div className="search container-fluid">
                <div className="row">
                    <label className="NameLabel" for="NameVal">Name : </label>
                    <input type="text" className="NameVal"/>
                </div>
                <div className="row">
                    <label className="PhoneLabel" for="PhoneVal">Phone No : </label>
                    <input type="numbers" className="PhoneVal"/>
                </div>
                <div className="row">
                    <label className="EmailLabel" for="EmailVal">Email : </label>
                    <input type="email" className="EmailVal"/>
                </div>
                <div className="row">
                    <label className="MsgLabel" for="MsgVal">Message : </label>
                    <input type="text" className="MsgVal"/>
                </div>
            </div>
            */