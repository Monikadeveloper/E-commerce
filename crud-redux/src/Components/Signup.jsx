import React, { useState } from 'react'
import './Signup.css'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {
  const [name, setName] = useState('')
  const [mobile, setMobile] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (name === '' || mobile === '' || password === '' || email === '') {
      alert('Please enter valid details')
    } else {
      alert(mobile)
      console.log(name, mobile, password, email)
      navigate('/signin')
    }
  }
  return (
    <div className="container">
      <div className="row">
        <div className="signup">
          <h1>Create Account</h1>
          <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">
              Your name
            </label>
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="First and last name "
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label for="exampleFormControlInput1" class="form-label">
              Mobile number
            </label>
            <input
              type="number"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Mobile number "
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <label for="exampleFormControlInput1" class="form-label">
              Email ID
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleFormControlInput1"
              placeholder="Email id "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div class="col-auto">
              <label for="exampleFormControlInput1" class="form-label">
                Password
              </label>
              <input
                type="password"
                class="form-control"
                id="inputPassword2"
                placeholder="At least 6 character"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>Passwords must be at least 6 characters.</p>
              <p>
                To verify your number, we will send you a text message with a
                temporary code. Message and data rates may apply.
              </p>

              <button
                type="button"
                class="btn btn-warning btn-lg"
                onClick={handleSubmit}
              >
                Verify mobile number
              </button>

              <p>Alread have an account?</p>
              <p>
                <Link to="/signin">Log in</Link>
              </p>
              <p>
                By creating an account or logging in, you agree to Terms and
                Conditions of Use and Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
