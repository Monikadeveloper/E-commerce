import React from 'react'
import './Navbar.css'
import ListIcon from '@mui/icons-material/List'
import { Link, useNavigate } from 'react-router-dom'

const NavItem = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate('/signin')
  }
  return (
    <>
      <div className="header_nav_item">
        <div className="list_item">
          <Link to="/product" className="navbar-brand">
            <p className="p">
              <ListIcon fontSize="large" />
              <span className="text-gold">All category</span>
            </p>{' '}
          </Link>

          <Link to="/category" className="navbar-brand">
            <p className="p">
              {' '}
              <span className="text-gold">Jewellery</span>
            </p>
          </Link>
          <Link to="/electronics" className="navbar-brand">
            <p className="p">
              <span className="text-gold">Electronics</span>
            </p>
          </Link>
          <Link to="/mensedition" className="navbar-brand">
            <p className="p">
              <span className="text-gold">Men's edition</span>
            </p>
          </Link>
          <Link to="/special" className="navbar-brand">
            {' '}
            <p className="p">
              <span className="text-gold">Special Edition</span>
            </p>
          </Link>
          <button type="button" class="btn btn-primary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </>
  )
}

export default NavItem
