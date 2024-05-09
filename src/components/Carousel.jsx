import React from 'react'
import imageOne from '../images/baby-boy.jpg'
import imageTwo from '../images/music-1.jpg'
import imageThree from '../images/music-2.jpg' 

const Carousel = () => {
  return (
    <div>
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={imageOne} className="d-block w-100" alt="music" style={{height:'100vh'}} />
          </div>
          <div className="carousel-item">
            <img src={imageTwo} className="d-block w-100" alt="music" style={{height:'100vh'}} />
          </div>
          <div className="carousel-item">
            <img src={imageThree} className="d-block w-100" alt="music" style={{height:'100vh'}} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Carousel
