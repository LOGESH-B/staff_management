


import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <>
      <div className="container">


        <nav className="navbar navbar-expand-lg bg-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className='ms-auto'>
              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/user/getalluser' className="nav-link active" aria-current="page">Add Achievements</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/user/login' className="nav-link" aria-current="page">Login</Link>
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </nav>
      </div>
    </>
  )
}

export default NavBar
