import React, { useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './ReachOut.css';

const ReachOut = () => {
  const form = useRef();
  const containerRef = useRef();
  const location = useLocation();

  const sendEmail = async (e) => {
    e.preventDefault();

    // Debug info: log form values (do not log sensitive data in production)
    try {
      const formData = new FormData(form.current);
      const debugData = {};
      formData.forEach((v, k) => (debugData[k] = v));
      console.log('ReachOut: sending email with data', debugData);
    } catch (err) {
      console.warn('ReachOut: could not read form data for debug', err);
    }

    try {
      const res = await emailjs.sendForm(
        'service_jqqfn9q',
        'template_pjyxg1p',
        form.current,
        'y-fZwQR7f20KakfWj'
      );
      console.log('EmailJS sendForm success', res);
      toast.success('Message sent successfully!');
    } catch (err) {
      console.error('EmailJS sendForm error', err);
      // Try to surface a useful error message in the toast
      const errMsg = (err && (err.text || err.message)) ? (err.text || err.message) : JSON.stringify(err);
      toast.error('Failed to send message. ' + (errMsg || 'Please try again.'));
    }
  };

  const handleSubmit = (e) => {
    sendEmail(e);
  };

  useEffect(() => {
    // If navigated to /reachout or to a URL with #reachout, scroll to this component
    const hashId = location && location.hash ? location.hash.replace('#', '') : null;
    const shouldScroll = hashId === 'reachout' || (location && location.pathname === '/reachout');

    if (shouldScroll) {
      // slight delay to ensure DOM is ready
      setTimeout(() => {
        const el = containerRef.current || document.getElementById('reachout');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          // set focus to the first input for accessibility
          const firstInput = el.querySelector('input[name="name"]');
          if (firstInput && typeof firstInput.focus === 'function') {
            firstInput.focus({ preventScroll: true });
          }
        }
      }, 50);
    }
  }, [location]);

  return (
    <div id="reachout" ref={containerRef} className="reach-out-page">
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