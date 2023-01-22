import React from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="homeDiv">
        <h1>watch. re-watch. repeat.</h1>
        <h3>to all the characters, stories, and scenes that stay with us.</h3>
        <button>EXPLORE</button>
      </div>
    </div>
  )
}

export default Home


