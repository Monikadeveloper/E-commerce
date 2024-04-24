import React, { useState } from 'react'
import './Banner.css'
import hero3 from './Assets/hero3.avif'
import Navbar from './Navbar'
import NavItem from './NavItem'
import SearchResultsList from './SearchResultsList'

const Banner = () => {
  const [results, setResults] = useState([])
  return (
    <>
      <Navbar setResults={setResults} />
      <NavItem />
      <div className="banner">
        <img src={hero3} alt="coverimage" />
      </div>
      <SearchResultsList results={results}/>
    </>
  )
}

export default Banner
