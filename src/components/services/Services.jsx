import './services.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

export default function Services(){
    return(
        <div className='services' id='services'>
            <div className='services-txt ' data-aos='side-right'>
                <div className='service-own'>
                    <span className='service-own-line'></span>
                    <span className='service-own-text'>WITH OUR SERVICES FOR YOU</span>
                </div>
                <h5 className='services-title'>PUSH YOUR LIMITS FORWARD WE OFFER TO YOU</h5>
            </div>
            <div className='services-cont '>
                <div className='serv-item' data-aos='zoom-in-left'
                    data-aos-easing="ease-in-out"
                    data-aos-delay='100'
                    data-aos-duration="500"
                >
                    <div className='serv-item-txt'>
                        <span><i class="fas fa-dumbbell"></i></span>
                        <h6>QUALITY EQUIPMENT</h6>
                        <p>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
                    </div>
                    <div className='serv-anim'>
                        DISCOVER MORE ABOUT US
                    </div>
                </div>
                <div className='serv-item' 
                    data-aos='zoom-in' 
                    data-aos-easing="ease-in-out"
                    data-aos-duration="500"
                >
                    <div className='serv-item-txt'>
                        <span><i class="fas fa-heartbeat"></i></span>
                        <h6>HEALTH CARING</h6>
                        <p>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
                    </div>
                    <div className='serv-anim'>
                        DISCOVER MORE ABOUT US
                    </div>
                </div>
                <div className='serv-item' 
                    data-aos='zoom-in-right' 
                    data-aos-easing="ease-in-out"
                    data-aos-delay='100'
                    data-aos-duration="500"
                >
                    <div className='serv-item-txt'>
                        <span><i class="far fa-clock"></i></span>
                        <h6>FLEXIBLE TIMING</h6>
                        <p>The sea freight service has grown consider ably in recent years. We spend timetting to kn.</p>
                    </div>
                    <div className='serv-anim'>
                        DISCOVER MORE ABOUT US
                    </div>
                </div>
            </div>
        </div>
    )
}