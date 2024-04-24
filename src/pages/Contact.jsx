import React, { useEffect, useRef, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(window.innerWidth < 769);
  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 769;
        if (ismobile !== isMobile) {
          setIsMobile(ismobile);
        }
      },
      false
    );
  }, [isMobile]);

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
      <div className="w-full pl-3 pr-3 lg:pl-40 lg:pr-40 text-center">
        <h2 className="text-[3rem] font-bold my-20">Let's connect!</h2>
        <div className="flex flex-col items-center">
          <img
            className="w-[15rem] lg:w-[22rem] h-auto rounded p-1 border"
            src={Profile}
            alt=""
          />
        </div>
        <h2 className="mt-10">Tomoyuki Fujii</h2>
        <p className="mb-5">Junior Front-end developer</p>
        <a
          href="https://drive.google.com/file/d/1WPhK0XO1r5hqr7XrPmwZC1FLmIAuy6Mp/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
          className="no-underline hover:text-white hover:bg-[#0f375d] border-2 border-[#0f375d] py-4 px-8 mb-5"
        >
          RESUME
        </a>
        <p className="lg:px-[20%] mt-12 text-lg lg:text-xl lg:leading-relaxed">
          I started playing tennis when I was 15 years old. After graduating
          from university, I have worked at tennis brands (
          <span>
            <a
              href="https://dunlopsports.com/tennis/"
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              DUNLOP
            </a>
          </span>{" "}
          /{" "}
          <span>
            <a
              href="https://www.babolat.ca"
              target="_blank"
              rel="noreferrer"
              className="no-underline"
            >
              BabolaT
            </a>
          </span>
          ). <br />
          I’m currently studying computer programming in Vancouver and looking
          for a job to become a web developer. <br />
          With this project, I have used my skills from what I learned and
          experienced to create the website that I wanted.
        </p>
        <p className="lg:px-[20%] mb-12 text-lg lg:text-xl lg:leading-relaxed">
          I can give you my suggestions about rackets, strings, and other
          equipments! Feel free to ask me through my social media or email! I
          can also help you learn Japanese if you want:)
        </p>
        <div className="flex flex-col items-center">
          <div className="flex justify-around">
            <a
              href="https://www.linkedin.com/in/tomoyuki-fujii-376616251/"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-[3rem] lg:w-[4rem]" src={LinkedIn} alt="" />
            </a>
            <div className="w-[3rem] lg:w-[4rem]"></div>
            <a
              href="https://www.facebook.com/tomoyk113"
              target="_blank"
              rel="noreferrer"
            >
              <img className="w-[3rem] lg:w-[4rem]" src={Facebook} alt="" />
            </a>
          </div>
        </div>
        <div className="flex w-full lg:mb-20 mb-0">
          <div className="w-full google-map flex flex-col items-center justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83327.37148313464!2d-123.20630488144621!3d49.2578181906132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x548673f143a94fb3%3A0xbb9196ea9b81f38b!2sVancouver%2C%20BC!5e0!3m2!1sen!2sca!4v1710879539088!5m2!1sen!2sca"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              className="w-[600px] h-[600px]"
            ></iframe>
          </div>
          <div className="w-full flex flex-col items-center">
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col items-center text-center my-20"
            >
              <label className="font-bold my-2">Name</label>
              <input
                className="border-2 border-[#0f375d] rounded-sm w-[20rem] lg:w-[30rem] p-2"
                type="text"
                name="user_name"
                value={name}
                placeholder="Name"
                onChange={handleChangeName}
              />
              <label className="font-bold my-2">Email</label>
              <input
                className="border-2 border-[#0f375d] rounded-sm w-[20rem] lg:w-[30rem] p-2"
                type="email"
                name="user_email"
                value={email}
                placeholder="Email"
                onChange={handleChangeEmail}
              />
              <label className="font-bold my-2">Subject</label>
              <input
                className="border-2 border-[#0f375d] rounded-sm w-[20rem] lg:w-[30rem] p-2"
                type="subject"
                name="user_subject"
                value={subject}
                placeholder="Subject"
                onChange={handleChangeSubject}
              />
              <label className="font-bold my-2">Message</label>
              <textarea
                className="border-2 border-[#0f375d] rounded-sm w-[20rem] lg:w-[30rem] h-[20rem] p-2"
                name="message"
                value={text}
                placeholder="Message here..."
                onChange={handleChangeText}
              />
              <input
                className={`mt-3 border-2 px-8 py-3 border-[#0f375d] ${
                  isMobile
                    ? "hover:bg-white bg:text-black"
                    : "transition ease-in-out delay-150 duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-[#0f375d] hover:text-white"
                } `}
                type="submit"
                value="SEND"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
