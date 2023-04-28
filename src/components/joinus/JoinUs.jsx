import React, { useRef } from 'react'
import './joinus.css'
import emailjs from '@emailjs/browser';

const JoinUs = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_igtsjzg', 'template_nvwbtjw', form.current, '_A6fp0r0WHaqbSYaC')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div className="join" id="join">

      <div className="left-j">
        <hr />
        <div>
          <span className='stroke-text'>READY TO </span>
          <span> LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span className='stroke-text'> WITH US</span>
        </div>
      </div>

      <div className="righjt-j">
        <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
          <input type="email" name="user_email" placeholder='Enter your email adress' />
          <button className='btn btn-j'>Join Now</button>
        </form>
      </div>

    </div>
  )
}

export default JoinUs