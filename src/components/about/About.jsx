import './about.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function About(){
    return(
        <div className='about' id="about">
            <div className='imgDiv' data-aos='fade-left'
                data-aos-delay='100'
                data-aos-once="false"
                data-aos-easing="ease-in-out"
                
            ></div>
            <div className='aboutDesc' data-aos='fade-right'
                data-aos-delay='100'
                data-aos-once="false"
                data-aos-easing="ease-in-out"
            >
                <div className='about-top'>
                    <span className='about-top-line'></span>
                    <span className='about-top-text'>ABOUT OUR GYM</span>
                </div>
                <h4 className='aboutHead'>SAFE BODY BUILDING PROPER SOLUTIONS THAT SAVES OUR VALUABLE TIME!</h4>
                <p className='aboutDescTxt'>Brook presents your services with flexible, convenient and cdpose layouts. You can select your favorite layouts & elements for cular ts with unlimited ustomization possibilities. Pixel-perfect replication of the designers is intended.</p>
                <button className='head-btn'>BECAME A MEMBER</button>
            </div>
        </div>
    );
}