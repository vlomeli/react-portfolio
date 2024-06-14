import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_w2spjch', 'template_xdtgrec', form.current, 'MAlFkml9eGdPHhKb4')
        .then((result) => {
            console.log(result.text);
            console.log("message sent");
            window.alert('Email has been sent!');
            form.current.reset();
        }, 
        (error) => {
            console.log(error.text);
        });
    };

    return (
      <>
        <section className="contact">
          <div className="contact-content">
            <h1>CONTACT ME</h1>
            <form ref={form} onSubmit={sendEmail}>
              <label>Name</label>
              <input type="text" name="user_name" />
              <label>Email</label>
              <input type="email" name="user_email" />
              <label>Message</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
            <section className="contact-links">
              <h1>vlponcebusiness@gmail.com</h1>
              <div className="links-row">
                <h3>
                  <a href="https://www.linkedin.com/in/vlomeliponce/">
                    LinkedIn
                  </a>
                </h3>
                <h3>
                  <a href="https://github.com/vlomeli">GitHub</a>
                </h3>
              </div>
            </section>
          </div>
        </section>
      </>
    );
}