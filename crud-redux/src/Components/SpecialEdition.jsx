import React from 'react'
import Banner from './Banner'
import { useEffect } from 'react'
import './Banner.css'
import { useSelector, useDispatch } from 'react-redux'
import { fetchProduct } from './store/specialSlice'

const SpecialEdition = () => {
  const state = useSelector((state) => state.specialSlice.data)
  console.log(state)
  const dispatch = useDispatch()
  const handleSubmit = (id, title, price, image) => {
    const items = JSON.parse(localStorage.getItem('cart'))
    if (!items) {
      let cartArray = []
      cartArray.push({
        id: id,
        cartTitle: title,
        // cartImage: image,
        cartPrice: price,
        cartImage: image,
      })
      localStorage.setItem('cart', JSON.stringify(cartArray))
    } else {
      const arr = [
        ...items,
        {
          id: id,
          cartTitle: title,

          cartPrice: price,
          cartImage: image,
        },
      ]

      localStorage.setItem('cart', JSON.stringify(arr))
    }
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
              <>
                <div className="card_jewel">
                  <p className="card-title">{item.title}</p>
                  <p className="card-price">Price: {item.price}</p>
                  <p className="card-rating">Rating: {item.rating.rate}</p>
                  <div className="card-body-mens">
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
                    onClick={(id) =>
                      handleSubmit(item.id, item.title, item.price, item.image)
                    }
                  >
                    Add to cart
                  </button>
                </div>
              </>
            )
          })}
        </div>
      </>
    )
  }
}

export default SpecialEdition
