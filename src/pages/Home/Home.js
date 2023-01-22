import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Genre from '../Genre/Genre'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeDiv">
        <h1>watch. re-watch. repeat.</h1>
        <h3>to all the characters, stories, and scenes that stay with us.</h3>
        <button>
          <a href="#home-corousel"> EXPLORE</a>
        </button>
      </div>
      <Genre />
    </div>
  )
}

export default Home


