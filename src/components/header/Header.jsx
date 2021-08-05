import './header.css'



export default function Header(){
    return(
        <div className='header' id='header'>
            <div className='intro' >
                <div className='head-own'>
                    <span className='head-own-line'></span>
                    <span className='head-own-text'>WITH MUKUNDA TAPRE</span>
                </div>
                <h1 className='head-msg'>BUILD PERFECT BODY SHAPE FOR GOOD AND HEALTHY LIFE.</h1>
                <a href='#contact'><button className='head-btn'>BECAME A MEMBER</button></a> 
            </div>
        </div>
    )
}