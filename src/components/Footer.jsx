import React from 'react'
import '../css/footer.css'
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='d-flex justify-content-around bg-primary py-5 mt-5 footer'>
        <div >
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/">Services</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </div>
            
        <div>
            <ul>
                <li><a href="/">News</a></li>
                <li><a href="/about">FAQs</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms & Conditions</a></li>
            </ul>
        </div>

        <div>
            <ul>
                <li><a href="/">Affliate Programs</a></li>
                <li><a href="/about">Subscribe</a></li>
                <li><a href="/">Tickets</a></li>
                <li><a href="/">Help Center</a></li>
            </ul>
        </div>

        <div>
            <ul>
                {/* <li><a href="/"><i class="bi bi-facebook"></i><CiFacebook/>Facebook</a></li> */}
                <li><a href="/"><CiFacebook/>Facebook</a></li> 
                <li><a href="/about"><FaInstagram/>Instagram</a></li>
                <li><a href="/"><BsTwitterX/>Twitter (X)</a></li>
                <li><a href="/"><FaWhatsapp/>WhatsApp</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
