import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact=()=>{ 
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_21rw04i', 'template_r0n2te6', form.current, 'yTi3wmcxh6ICiZw_B')

        e.target.reset()
      };

    return(
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className='container contact__container'>
                <div className="contact__options">
                    <article className='contact__option'>
                        <h4>Email</h4>
                        <h5>masrooramir76@gmail.com</h5>
                        <a href='mailto:masrooramir76@gmail.com' target='_blank'>Send Me an Email</a>
                    </article>

                    <article className='contact__option'>
                        <h4>WhatsApp</h4>
                        <h5>+9212345678</h5>
                        <a href='https://api.whatsapp.com/send?phone=+923423691120' target='_blank'>Send Me Message</a>
                    </article>
                </div>

                {/* == End of Contact Options == */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required/>
                    <input type='text' name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact