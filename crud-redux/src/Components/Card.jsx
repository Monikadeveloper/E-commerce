import React from 'react'
import './Banner.css'
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetchProduct } from './store/productSlice'
import Banner from './Banner'
import { addItemToCart } from './store/cartSlice'

const Card = () => {
  const state = useSelector((state) => state.productSlice.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleSubmit = (item) => {
    dispatch(addItemToCart(item))
    navigate('/cart')
  }

  useEffect(()=>{
    dispatch(fetchProduct())
  },[])

  if (state === null) {
    return <h1>Loading....</h1>
  } else {
    return (
      <>
        {state.map((item) => {
          return (
            <div className="card">
              <p className="card-title">{item.title}</p>
              <p className="card-price">Price: {item.price}</p>
              <p className="card-rating">Rating: {item.rate}</p>
              <div className="card-body">
                <img
                  src={item.image}
                  alt="image"
                  style={{ height: '200px', width: '200px', margin: '10px' }}
                />
              </div>
              <button
                type="button"
                className="btn btn-warning"
                onClick={() => handleSubmit(item)}
              >
                Add to cart
              </button>
            </div>
          )
        })}
      </>
    )
  }
}

export default Card
