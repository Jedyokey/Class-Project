import React, { useEffect } from 'react'
// import board1 from '../images/board1.jpg'
// import board2 from '../images/board5.jpg' 
// import board3 from '../images/board3.jpg'
import '../css/board.css'
import AOS from 'aos' 
import 'aos/dist/aos.css'  
import 'aos/dist/aos.js' 

const Board = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        })
    })

  return (
    <div className=''>
        <h2 className='text-center mt-5 mb-3'>{props.directors}</h2> 
        <div className='d-flex mx-auto board-content'>
            <div className="card col me-3" data-aos={props.first}>  
                <img src={props.board1} className="card-img-top board-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div> 

            <div className="card col me-3" data-aos={props.second}>
                <img src={props.board2} className="card-img-top board-img board-img2" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
            </div>

            <div className="card col" data-aos={props.third}>
                <img src={props.board3} className="card-img-top board-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Board
