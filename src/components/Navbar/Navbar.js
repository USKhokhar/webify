import React from 'react'
import { BiSun } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <header>

      {/* logo */}
        <Link to={'/'}>
      <h2>
          BingeWatch
      </h2>
        </Link>

      {/* nav items */}
      {/* <nav>
        <input type="search" name="search" id="nav-search" placeholder='Search' />
        <BiSun />
      </nav> */}

      <nav>
        <Link to={'/about'}>
          <h2>Our Team</h2>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar