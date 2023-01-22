import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'
import './About.css'

const Card = ({state, handleFunction, clsFront, clsBack, name, codeName, quote}) => {
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
            {quote}
          </blockquote>
          <div className="ab-social">
            <a href="#" target="_blank">LI</a>
            <a href="#" target="_blank">IN</a>
            <a href="#" target="_blank">GH</a>
          </div>
          <button className="flip-btn" onClick={handleFunction}>Back</button>
          </div>
      </article>
    </ReactCardFlip>
  )
}

const About = () => {

  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = (e) => {
    e.preventDefault()
    setIsFlipped(!isFlipped)
  }

  return (
    <section className='ab-section'>
      <div className="ab-container">
        <Card 
          key={'c1'}
          state={isFlipped}
          handleFunction={handleFlip}
          clsBack= 'ab-back'
          clsFront={'ab-front'}
          name={'Deepak Jain'}
          codeName={'DeeJai'}
          quote={'Web Developer || Competitive Programmer'}
        />
        <Card 
          key={'c2'}
          state={isFlipped}
          handleFunction={handleFlip}
          clsBack= 'ab-back'
          clsFront={'usk'}
          name={'Utkarsh Khokhar'}
          codeName={'USK'}
          quote={'Web Developer || Designer'}
        />
        <Card 
          key={'c3'}
          state={isFlipped}
          handleFunction={handleFlip}
          clsBack= 'ab-back'
          clsFront={'tandon'}
          name={'Kartikey Tandon'}
          codeName={'The Tandon'}
          quote={'Web Developer || Designer'}
        />
      </div>
    </section>
  )
}


export default About