import React from 'react'
import { BiSun } from 'react-icons/bi'
import './Navbar.css';

const Navbar = () => {
  return (
    <header>

      {/* logo */}
      <h2>BingeWatch</h2>

      {/* nav items */}
      <nav>
        <input type="search" name="search" id="nav-search" placeholder='Search' />
        <BiSun />
      </nav>
    </header>
  )
}

export default Navbar