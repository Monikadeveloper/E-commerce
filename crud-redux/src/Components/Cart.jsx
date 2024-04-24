import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import cartSlice from './store/cartSlice'
import Banner from './Banner'
import { Link, NavLink } from 'react-router-dom'
import {
  clearCart,
  removeItemFromCart,
  subtractQuantityToItem,
  addItemToCart,
  totalCart,
} from './store/cartSlice'

const Cart = () => {
  const cart = useSelector((state) => state.cartSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(totalCart())
  }, [cart, dispatch])

  const handleDelete = (item) => {
    dispatch(removeItemFromCart(item))
  }
  const handleClear = () => {
    dispatch(clearCart())
  }
  const handleDec = (item) => {
    dispatch(subtractQuantityToItem(item))
  }
  const handleInc = (item) => {
    dispatch(addItemToCart(item))
  }
  const handleTotal = (item) => {
    dispatch(totalCart(item))
  }
  return (
    <>
      <Banner />
      <div className="cart-container">
        <h1>Shopping Cart</h1>
        {cart.cartItems.length === 0 ? (
          <>
            <h4>Your card is empty</h4>
            <Link to="/product">
              <button type="button" class="btn btn-info">
                Shop now
              </button>
            </Link>
          </>
        ) : (
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product name</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Total</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.cartItems.map((item, id) => {
                return (
                  <>
                    <tr>
                      <th scope="row" key={id}>
                        {item.id}
                      </th>
                      <td>{item.title}</td>
                      <td>{item.price}</td>
                      <td>
                        <div
                          class="btn-group"
                          role="group"
                          aria-label="Basic outlined example"
                        >
                          <button
                            type="button"
                            class="btn btn-outline-primary"
                            onClick={() => handleDec(item)}
                          >
                            -
                          </button>
                          <button type="button" class="btn btn-outline-primary">
                            {item.cartQuantity}
                          </button>
                          <button
                            type="button"
                            class="btn btn-outline-primary"
                            onClick={() => handleInc(item)}
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td>{item.price * item.cartQuantity}</td>
                      <td>
                        <button
                          type="button"
                          class="btn btn-warning"
                          onClick={() => handleDelete(item)}
                        >
                          Remove from cart
                        </button>
                      </td>
                    </tr>
                  </>
                )
              })}
            </tbody>
          </table>
        )}
        <div
          className="cart_items"
          style={{ display: 'flex', justifyContent: 'space-evenly' }}
        >
          <NavLink to="/product">
            <button type="button" class="btn btn-info">
              Continue shopping
            </button>
          </NavLink>
          {/* <button type="button" class="btn btn-warning" onClick={handleTotal}>
            Show Total price
          </button> */}
          <button type="button" class="btn btn-info" onClick={handleClear}>
            Clear Cart
          </button>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>
            Total amount
            <span class="badge bg-secondary">{cart.cartTotalAmount}</span>
          </h1>
        </div>
      </div>
    </>
  )
}

export default Cart

