import './contact.css';
import emailjs from 'emailjs-com';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useState } from 'react';
AOS.init();

export default function Contact(){

    const [isSubmitted,setIssubmitted] = useState(false);

    const handleSubmit = (e)=>{
        
        e.preventDefault();
        setIssubmitted(true);
        
        emailjs.sendForm('service_lxofev3', 'template_rj56upi', e.target, 'user_JnJefJ7Ms8U6JlBXnuhQY')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        setIssubmitted(true);
    }

    return(
        <div className='contact' id='contact' 
            data-aos='fade-up-right'
            data-aos-delay='200'
        >
            <div className='contact-own'>
                <span className='contact-own-line'></span>
                <span className='contact-own-text'>CONTACT FORM</span>
            </div>
            <h3 className='contact-title'>FEEL FREE TO CONTACT</h3>
            <form className='contact-form' onSubmit={(e)=>handleSubmit(e)}>
                <input className='contact-input' name='name' type='text' placeholder='Name'></input>
                <input className='contact-input' name='moNo' type='text' placeholder='Mobile No.' required></input>
                <textarea className='contact-input' name='message' placeholder='Message'></textarea>
                <button type='submit' className='btn btn-outline-secondary'>Get In Touch</button>
                {isSubmitted && <span className='greetingMsg'>Thanks for contacting us !  We will be in touch with you shortly🙂.</span>}
            </form>
        </div>
    );
}
