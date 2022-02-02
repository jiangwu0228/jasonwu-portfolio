import React, { useState, useContext, useRef } from "react";
import "./contact.scss";
import { ThemeContext } from "../../context";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [message, setMessage] = useState(false);
  const theme = useContext(ThemeContext);
  const darkTheme = theme.state.darkTheme;

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE,
        process.env.REACT_APP_TEMPLATE,
        formRef.current,
        process.env.REACT_APP_API_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className={"contact " + (darkTheme && "dark")} id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" name="user_name" />
          <input type="text" placeholder="Subject" name="user_subject" />
          <input type="text" placeholder="Email" name="user_email" />
          <textarea placeholder="Message" name="message" />
          <button>Submit</button>
          {message && <p>Message sent</p>}
        </form>
      </div>
    </div>
  );
};

export default Contact;
