import React from 'react'
import Carousel from '../components/Carousel'
import Services from '../components/Services'
import About from '../components/About'
import Board from '../components/Board'
import Footer from '../components/Footer'
import board1 from '../images/board1.jpg'
import board2 from '../images/board2.jpg' 
import board3 from '../images/board3.jpg'
import board4 from '../images/board4.jpg'
import board5 from '../images/board5.jpg'
import board6 from '../images/board6.jpg'

const Home = () => { 
  return (
    <div> 
      <Carousel/>
      <Services heading="Our Top Services" titleOne="Artists Recordings" titleTwo="Musical Instruments" titleThree="Trainings and Vocals" detailOne="With supporting text below as a natural lead-in to additional content." detailTwo="With supporting text below as a natural lead-in to additional content." detailThree="With supporting text below as a natural lead-in to additional content." />

      <Services titleOne="Music Shows" titleTwo="Record Labels" titleThree="Buy Tickets" detailOne="Explore live music events near you, or browse by genre, venues, artists, and more." detailTwo="Enjoy personalized concert recommendations and stay connected with your favorite artists." detailThree="Get tickets to upcoming concerts, live shows, festivals, and events in Lagos." /> 

      <About first="fade-right" second="fade-left" /> 
      <Board directors="Board of Directors" board1={board1} board2={board2} board3={board3} first="fade-down-right" second="zoom-in-down" third="fade-down-left" fourth="flip-down" /> 
      <Board board1={board4} board2={board5} board3={board6} first="fade-up-right" second="zoom-in-up" third="fade-up-left" fourth="flip-up" /> 
      <Footer />
    </div>
  )
}

export default Home
