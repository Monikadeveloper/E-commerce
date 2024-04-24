import React, { useState, useEffect } from 'react'
import './Navbar.css'
import LocalMallIcon from '@mui/icons-material/LocalMall'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import SearchIcon from '@mui/icons-material/Search'
import { Link } from 'react-router-dom'
import Cart from './Cart'
import { useDispatch, useSelector } from 'react-redux'
import { totalCart } from './store/cartSlice'

const Navbar = ({ setResults }) => {
  const cart = useSelector((state) => state.cartSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(totalCart)
  }, [cart.cartTotalQuantity])

  const [input, setInput] = useState('')
  const fetchData = (value) => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((item) => {
          return (
            value &&
            item &&
            item.title &&
            item.title.toLowerCase().includes(value)
          )
        })
        setResults(results)
      })
  }
  const handleChange = (value) => {
    setInput(value)
    fetchData(value)
  }
  return (
    <>
      <div className="container-fluid">
        <div className="header">
          <div className="header_logo">
            <LocalMallIcon fontSize="large" />
          </div>
          <span className="header_logname">E-shop</span>
          <div className="header-search">
            <SearchIcon fontSize="large" />
            <input
              type="text"
              placeholder="Search here.........."
              value={input}
              onChange={(e) => handleChange(e.target.value)}
            />
          </div>
          <div className="header_nav"></div>
          <div className="header_nav_user">
            <AccountCircleIcon />
            <span className="header_nav_lineOne">Hello Guest</span>
            <span className="header_nav_lineTwo">
              <Link to="/">Sign in</Link>
            </span>
          </div>
          <div className="header_nav_item_basket">
            <Link to="/cart" className="add-to-cart-btn-flex">
              <span className="btn-ico">
                <ShoppingCartIcon />
              </span>
              <div className="btn-txt fw-5">
                Cart
                <span className="cart-count-value">
                  {cart.cartTotalQuantity}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
