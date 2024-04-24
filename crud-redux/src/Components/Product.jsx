import React from 'react'
import './Banner.css'
import Banner from './Banner'
import Card from './Card'


const Product = () => {
  return (
    <>
      <Banner />
      <div className="product-card">
        <Card /> 
      </div>
    </>
  )
}

export default Product
