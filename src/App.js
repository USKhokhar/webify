import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import Movie from './pages/Movie/Movie'
import MovieInfo from './pages/MovieInfo/MovieInfo'
import './App.css'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/movie' element={<Movie />} />
      <Route path='/movieInfo' element={<MovieInfo />} />
      <Route path='/about' element={<About />} />
    </Routes>
  )
}

export default App