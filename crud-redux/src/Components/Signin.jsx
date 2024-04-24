import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()

  const handleSubmit = () => {
    if (email === '' || password === '') {
      alert('Please Enter valid details')
    } else {
      console.log(email, password)
      alert('Login successfully')
      navigate('/product')
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="signup">
          <h1>Sign in</h1>
          <div class="mb-3">
            <label for="exampleFormControlInput1" className="form-label">
              Enter your email id
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="enter your mail id"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <div class="col-auto">
              <label for="exampleFormControlInput1" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword2"
                placeholder="Enter Password here"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Link to="#">
                {' '}
                <p>Forgot password</p>
              </Link>
              <button
                type="button"
                class="btn btn-warning btn-lg"
                onClick={handleSubmit}
              >
                Continue
              </button>
              <p>
                By continuing, you agree to Terms & Conditions of Use and
                Privacy Notice.
              </p>
              <p>
                If you don't have any account you can create by click on
                <Link to="/"> Signin </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
