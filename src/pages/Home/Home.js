import React from 'react'
import './Home.css'
import '../../App.css'
import Navbar from '../../components/Navbar/Navbar'
import Genre from '../Genre/Genre'
import Footer from '../../components/Footer/Footer'

const Home = () => {

  const handleClickScroll = () => {
    const element = document.getElementById("home-corousel");
    element.scrollIntoView({ behavior: "smooth"});
  };
  const bg = './home-bg-desktop.png'
  return (
    <>
          <section id='home'>
    <img src={bg} className='bg'/>
    <Navbar />

    <div className="home-cont">
      <article className="txt-content">
      <h1 className='home-h1'>Watch. Re-Watch. Repeat.</h1>
      <sub className='home-sub'>
        to all the characters, stories, and scenes that stay with us.
      </sub>
        <button className='ex-btn' onClick={handleClickScroll}>EXPLORE</button>
    </article>
    </div>

    <Genre />
    </section>
    <Footer />
    </>
  )
}

export default Home


