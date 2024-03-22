import React, { useEffect, useState } from "react";
import "./css/Contact.css";
import Topbar from "../components/topbar/Topbar";
import Footer from "../components/footer/Footer"
import { validationName, validationEmail, validationPhone, validationMessage } from "../components/contact/validation";
import InlineError from "../components/contact/InlineError";
import axios from "axios";
import { toast } from "react-toastify";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [messageError, setMessageError] = useState("");


  useEffect(() => {
    validationName({ name, setNameError })
    validationEmail({ email, setEmailError})
    validationPhone({ phone, setPhoneError})
    validationMessage({ message, setMessageError})
  }, [name, email, phone, message]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (nameError || emailError || phoneError || messageError) {
      toast.error("Please fill all the fields correctly");
    }

    try {
      const response = await axios.post('https://rsr-backend.onrender.com/contact/send', {
        name,
        email,
        phone,
        message

      })
      if (response.status === 200) {
        toast.success("Message sent successfully");
      }
    }
    catch (error) {
      toast.error("Error sending message");
    }
  }

  return (
    <>
      <Topbar />
      <div className="form-container" style={{ marginTop: "3%" }}>
        <div className="form-form">
          <div className="contact-info">
            <h3
              className="form-title"
              style={{ overflowY: "hidden", padding: "10px" }}
            >
              Let's get in touch
            </h3>
            <p className="form-text">
              Contact us with the following details and fillup the form with the
              details. We will get back to you shortly .{" "}
            </p>
            <div className="info">
              <div className="social-information">
                <i className="fa fa-map-marker">&nbsp;&nbsp;</i>
                <p>
                  1826,Periyakaruppan Road, Near Sangeetha Lodge, Sivakasi-626
                  123
                </p>
              </div>
              <div className="social-information"> 
                <i className="fa fa-envelope-o"></i>
                <p>deviradhakrishnan6363@gmail.com</p>
              </div>
              <div className="social-information">
                <i className="fa fa-mobile-phone"></i>
                <p>+91 97892 35454</p>
              </div>
            </div>
            <div className="social-media">
              <p>Connect with us :</p>
              <div className="social-icons" style={{ overflowY: "hidden" }}> 
                <a href="#"> 
                  <i className="fa fa-facebook-f"></i>{" "}
                </a>
                <a href="#">
                  <i className="fa fa-twitter"></i>{" "}
                </a>
                <a href="#"> 
                  <i className="fa fa-instagram"></i>{" "}
                </a>
                <a href="#">
                  <i className="fa fa-linkedin"></i>{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="contact-info-form">
            <span className="circle one"></span>{" "}
            <span className="circle two"></span>
            <form
              onSubmit={handleSubmit}
              className="contact-form"
              action="#"
              style={{ overflowY: "hidden" }}
            >
              <h3 className="form-title" style={{ overflowY: "hidden" }}>
                Contact us
              </h3>
              <div className="social-input-containers">
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  type="text"
                  name="name"
                  className="form-input"
                  placeholder="Name" 
                />{nameError && <InlineError error={nameError} />}
              </div>
              <div className="social-input-containers">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  type="email"
                  name="email"
                  className="form-input"
                  placeholder="Email"
                />{emailError && <InlineError error={emailError} />}
              </div>
              <div className="social-input-containers">
                <input
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  type="tel"
                  name="phone"
                  className="form-input"
                  placeholder="Phone"
                />{phoneError && <InlineError error={phoneError} />}
              </div>
              <div className="social-input-containers textarea">               
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  name="message"
                  className="form-input"
                  placeholder="Message"
                ></textarea>{messageError && <InlineError error={messageError} />}
              </div>
              <button className="send-btn btn-light" >Send</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
