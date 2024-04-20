import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Profile from "../assets/home/profile.jpg";
import Facebook from "../assets/home/facebook.png";
import LinkedIn from "../assets/home/linkedin.png";

const Contact = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleChangeSubject = (event) => {
    setSubject(event.target.value);
  };
  const handleChangeText = (event) => {
    setText(event.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("Please type name");
      return;
    }
    if (email === "") {
      alert("Please type email address");
      return;
    }
    if (subject === "") {
      alert("Please type subject");
      return;
    }
    if (text === "") {
      alert("Please type text");
      return;
    }

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.REACT_APP_PUBLIC_KEY,
        }
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setName("");
    setEmail("");
    setSubject("");
    setText("");
    alert("Email has been sent!");
  };
  return (
    <div>
      <div className="text-white font-bold bg-contactHeader bg-cover bg-center py-40">
        <h1 className="lg:text-[8rem] font-bold m-0 text-center">CONTACT</h1>
      </div>
      <div className="lg:px-40 text-center">
        <h2>Let's connect!</h2>
        <div className="flex flex-col items-center">
          <img className="w-1/4 h-auto" src={Profile} alt="" />
        </div>
        <h2 className="mt-10">Tomoyuki Fujii</h2>
        <p>Worked at DUNLOP (Tennis)</p>
        <p>If you have any concerns about tennis, just let me know!</p>
        <div className="flex flex-col items-center">
          <div className="lg:w-1/12 flex justify-around">
            <a
              href="https://www.linkedin.com/in/tomoyuki-fujii-376616251/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={LinkedIn} alt="" />
            </a>
            <a
              href="https://www.facebook.com/tomoyk113"
              target="_blank"
              rel="noreferrer"
            >
              <img src={Facebook} alt="" />
            </a>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex flex-col items-center text-center"
        >
          <label>Name</label>
          <input
            className="border border-black"
            type="text"
            name="user_name"
            value={name}
            placeholder="Name"
            onChange={handleChangeName}
          />
          <label>Email</label>
          <input
            className="border border-black"
            type="email"
            name="user_email"
            value={email}
            placeholder="Email"
            onChange={handleChangeEmail}
          />
          <label>Subject</label>
          <input
            className="border border-black"
            type="subject"
            name="user_subject"
            value={subject}
            placeholder="Subject"
            onChange={handleChangeSubject}
          />
          <label>Message</label>
          <textarea
            className="border border-black"
            name="message"
            value={text}
            placeholder="Message here..."
            onChange={handleChangeText}
          />
          <input className="border border-black" type="submit" value="Send" o />
        </form>
      </div>
    </div>
  );
};

export default Contact;
