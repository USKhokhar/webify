import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa'
import './About.css'
import Footer from '../../components/Footer/Footer'

const Card = ({state, handleFunction, clsFront, clsBack, name, codeName, quote, insta, lin, gh, tw, det}) => {
  det='2nd Year '
  return (
    <ReactCardFlip isFlipped={state} flipDirection='horizontal'>
      <article className={`ab-card ${clsFront}`}>
        <div className="front-content">
          <h3 className='ab-title'>{name}</h3>
          <button className="flip-btn" onClick={handleFunction}>about</button>
        </div>
      </article>
      <article className={`ab-card ${clsBack}`}>
        <div className="back-content">
          <h3 className='ab-title'>{codeName}</h3>
          <blockquote>
            {det}
            <br />
            <br />
            {quote}
          </blockquote>
          <div className="ab-social">
            <IconContext.Provider value={{size: "2rem", color: 'hsl(223, 83%, 76%)'}} >
              <Link 
                onClick={() => window.open(`${insta}`, '_blank')}
              >
                <FaInstagram />
              </Link>
              <Link 
                onClick={() => window.open(`${lin}`, '_blank')}
              >
                <FaLinkedin />
              </Link>
              <Link 
                onClick={() => window.open(`${gh}`, '_blank')}
              >
                <FaGithub />
              </Link>
              <Link 
                onClick={() => window.open(`${tw}`, '_blank')}
              >
                <FaTwitter />
              </Link>
            </IconContext.Provider>
          </div>
          <button className="flip-btn" onClick={handleFunction}>Back</button>
          </div>
      </article>
    </ReactCardFlip>
  )
}

const About = () => {

  const [isFlipped1, setIsFlipped1] = useState(false)
  const [isFlipped2, setIsFlipped2] = useState(false)
  const [isFlipped3, setIsFlipped3] = useState(false)

  const handleFlip1 = (e) => {
    e.preventDefault()
    setIsFlipped1(!isFlipped1)
    setIsFlipped2(false)
    setIsFlipped3(false)
  }
  const handleFlip2 = (e) => {
    e.preventDefault()
    setIsFlipped2(!isFlipped2)
    setIsFlipped1(false)
    setIsFlipped3(false)
  }
  const handleFlip3 = (e) => {
    e.preventDefault()
    setIsFlipped3(!isFlipped3)
    setIsFlipped1(false)
    setIsFlipped2(false)
  }

  return (
    <>
    <section className='ab-section'>
      <h1>Meet The Team</h1>
      <div className="ab-container">
        <Card
          
          key={'c1'}
          state={isFlipped1}
          handleFunction={handleFlip1}
          clsBack= 'deejaiBack'
          clsFront={'deejai'}
          name={'Deepak Jain'}
          codeName={'DeeJai'}
          quote={'Web Developer || Competitive Programmer'}
det='2nd Year CSE'

          lin='https://www.linkedin.com/in/deepak-jain-691834239/'
          tw='https://twitter.com/DeepakJain__'
          gh='https://github.com/Deejai007'
          insta='https://www.instagram.com/d33pak.exe/'
        />
        <Card
          
          key={'c2'}
          state={isFlipped2}
          handleFunction={handleFlip2}
          clsBack= 'uskBack'
          clsFront={'usk'}
          name={'Utkarsh Khokhar'}
          codeName={'USK'}
          quote={'Web Developer || Designer'}
          det='2nd Year CSE'
          lin='https://www.linkedin.com/in/utkarsh-singh-khokhar-177662224/'
          tw='https://twitter.com/US_Khokhar'
          gh='https://github.com/USKhokhar'
          insta='https://www.instagram.com/u.s.khokhar/'
        />
        <Card
          
          key={'c3'}
          state={isFlipped3}
          handleFunction={handleFlip3}
          clsBack= 'tandonBack'
          clsFront={'tandon'}
          name={'Kartikey Tandon'}
          codeName={'The Tandon'}
          quote={'Web Developer || Competitive Programmer'}
          det='2nd Year CSE'
          lin='https://www.linkedin.com/in/kartikey-tandon-526516204/'
          tw='https://twitter.com/kartikeystwt'
          gh='https://github.com/kartikeytandon'
          insta='https://www.instagram.com/kartikey.tandon_18/'
        />
      </div>
    </section>
    <Footer />
    </>
  )
}


export default About
