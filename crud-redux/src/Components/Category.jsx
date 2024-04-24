import React, { useState } from 'react'
import Banner from './Banner'
import { useEffect } from 'react'
import './Banner.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from './store/categorySlice'
import { useNavigate } from 'react-router-dom'
import { addItemToCart } from './store/cartSlice'

const Category = () => {
  const [items, setItems] = useState([])
  const state = useSelector((state) => state.CategorySlice.data)
  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = (item) => {
    dispatch(addItemToCart(item))
    navigate('/cart')
  }

  useEffect(() => {
    dispatch(fetchProduct())
  }, [])

  if (state === null) {
    return <h1>Loading....</h1>
  } else {
    return (
      <>
        <Banner />
        <div className="product-card">
          {state.map((item) => {
            return (
              <div className="card">
                <div className="card-category">
                  <p className="card-title">{item.title}</p>
                  <p className="card-price">Price: {item.price}</p>
                  <p className="card-rating">Rating: {item.rate}</p>
                  <div className="card-body">
                    <img
                      src={item.image}
                      alt="image"
                      style={{
                        height: '200px',
                        width: '200px',
                        margin: '10px',
                      }}
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
              </div>
            )
          })}
        </div>
      </>
    )
  }
}

export default Category
