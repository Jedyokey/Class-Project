import React, { useEffect } from 'react'
import about from '../images/about.jpg'
import '../css/about.css'
import AOS from 'aos' 
import 'aos/dist/aos.css'  
import 'aos/dist/aos.js'  

const About = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    })

  return (
    <div>
        <div className='bg-primary py-5 mt-4'>       
            <h2 className='text-center text-light mb-5'>Who We Are</h2>
            <div className='row mx-auto content'> 
                <div className='col-5' data-aos={props.first}>
                    <img src={about} alt="Good Sound" style={{width: '93%', height: '74vh', borderRadius: '10px'}} />  
                </div> 

                <div className='col-7 about-text text-light' data-aos={props.second}>
                    <h4 className='text-center'>Music and Talent</h4> 
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam labore quas porro! Magnam porro, dolorum in ad voluptatem alias fugit laudantium. Est aspernatur sit commodi sapiente veritatis ipsa deserunt corporis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae hic, aliquam voluptate fuga harum pariatur tempora eius ea porro dolore laboriosam voluptatibus? Quos minus voluptatum modi tempore quis omnis consectetur.</p>

                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius nulla commodi repellat? Porro nisi quo officia voluptates corrupti possimus aliquam totam quis odio obcaecati corporis ab fuga, commodi repudiandae repellat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eligendi ut soluta quidem fugiat ab, eius rem fuga asperiores omnis, obcaecati aut sit magnam incidunt commodi quam tempora, hic quae.</p>

                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum vitae repellendus quas quia assumenda! Quisquam culpa quasi, molestiae itaque dolor, quia cum laboriosam magni velit veniam beatae, ducimus et a?</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
