import { useState } from 'react';
import './topbar.css'

export default function Topbar(){

    return(
        <nav className='navbar navbar-expand-lg navbar-dark topbar'>
            <div className='container'>
                <a href='#' className='navbar-brand'>Muscle Trainer</a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#nav-menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                
                <div className='collapse navbar-collapse' id='nav-menu'>
                    <ul className='navbar-nav ms-auto top-items' >
                        <li className='nav-item nav-item-custom'>
                            <a href='#header' className='nav-linkk'>Home</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#about' className='nav-linkk'>About</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#services' className='nav-linkk' >Services</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#gallery' className='nav-linkk' >Gallery</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#contact' className='nav-linkk' >Contact</a>
                        </li>
                        <li className='nav-item'>
                            <a href='#contact'><button className='top-btn' href='#contact'>BECAME A MEMBER</button></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}