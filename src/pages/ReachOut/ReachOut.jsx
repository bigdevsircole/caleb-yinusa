import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ReachOut.css';

const ReachOut = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jqqfn9q', 'template_pjyxg1p', form.current, 'y-fZwQR7f20KakfWj')
      .then(() => {
        toast.success('Message sent successfully!');
      })
      .catch(() => {
        toast.error('Failed to send message. Please try again.');
      });
  };

  const handleSubmit = (e) => {
    sendEmail(e);
  };

  return (
    <div className="reach-out-page">
      <h1>ReachOut Form</h1>
      <p>Feel free to send us a message when you have a project </p>
      <form ref={form} onSubmit={handleSubmit} className="reach-out-form">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required />
        <button type="submit">Submit</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default ReachOut;