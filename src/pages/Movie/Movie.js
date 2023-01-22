import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import React from 'react'
import Footer from '../../components/Footer/Footer';
import Navbar from '../../components/Navbar/Navbar'
import './Movie.css';

const Movie = () => {

  const layerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }

  const src = './home-bg-desktop.png'

  const MovieCard = ({title, description, cl}) => {
    return(
      <section className={cl} >
        <article className="mv-txt-content">
          <h3>{title}</h3>
          <sub>
            {description}
          </sub>

          <button>Know more</button>
        </article>
      </section>
    )
  }

  return (
    <>
      <img src={src} alt="bg" className='mv-bg' />
      <Navbar />

      <Parallax pages={6}>

        <ParallaxLayer style={layerStyle} offset={0} sticky={{start: 0, end: 5}} speed={2.5}>
          <MovieCard
            cl='mv-section chhichhore'
            title={'Chhichhore'}
            description='A tragic incident forces Anirudh, a middle-aged man, to take a trip down memory lane and reminisce his college days along with his friends, who were labelled as losers.'
          />
        </ParallaxLayer>

        <ParallaxLayer style={layerStyle} offset={1} sticky={{start: 1, end: 5}} speed={2.5}>
          <MovieCard
            cl='mv-section citylights'
            title={'City lights'}
            description='This classic story of love, tragedy and hope centers around a homeless tramp whom meets and instantly falls in love with a beautiful, albeit blind, flower seller.'
          />
        </ParallaxLayer>

        <ParallaxLayer style={layerStyle} offset={2} sticky={{start: 2, end: 5}} speed={2.5}>
          <MovieCard
            cl='mv-section modern-times'
            title={'Modern Times'}
            description='This comedic masterpiece finds the iconic Little Tramp (Charlie Chaplin) employed at a state-of-the-art factory where the inescapable machinery completely overwhelms him, and where various mishaps keep getting him sent to prison.'
          />
        </ParallaxLayer>

        <ParallaxLayer style={layerStyle} offset={3} sticky={{start: 3, end: 5}} speed={2.5}>
          <MovieCard
            cl='mv-section life-is-beautiful'
            title={'Life is Beautiful'}
            description='A gentle Jewish-Italian waiter, Guido Orefice (Roberto Benigni), meets Dora (Nicoletta Braschi), a pretty schoolteacher, and wins her over with his charm and humor. Eventually they marry and have a son, Giosue (Giorgio Cantarini).'
          />
        </ParallaxLayer>

        <ParallaxLayer style={layerStyle} offset={4} sticky={{start: 4, end: 5}} speed={2.5}>
          <MovieCard
            cl='mv-section forest-gump'
            title={'Forrest Gump'}
            description='Slow-witted Forrest Gump (Tom Hanks) has never thought of himself as disadvantaged, and thanks to his supportive mother (Sally Field), he leads anything but a restricted life.'
          />
        </ParallaxLayer>

      </Parallax>
      <Footer />
    </>
  )
}

export default Movie