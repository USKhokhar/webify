import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
        <Link onClick={() => window.open('https://petrichor.events/technical_events/event?id=4&tech=1', '_blank')}>
            <sub className="ft-link">
                Webify'23
            </sub>
        </Link>

        <Link to='/about'>
            <sub className="ft-link">
                Our Designers
            </sub>
        </Link>
    </footer>
  )
}

export default Footer