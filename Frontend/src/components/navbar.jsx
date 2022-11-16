


import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom"




function NavBar(props) {
  const navigate= useNavigate();
  // var islogged=props.isloggedIn;
  const [islogged,setislogged]=useState(props.isloggedIn)
  // var islogged=props.isloggedIn;
  const logout = () => {
    localStorage.removeItem("useremail")
    localStorage.removeItem("usertoken")
    setislogged(false)
  }
  var login;
  console.log(islogged)
  if (islogged) {
    login =
      <>
        <li className="nav-item">
          <Link to='/user/getalluser' className="nav-link " aria-current="page">Add Achievements</Link>
        </li>
        <li className="nav-item">
          <span className="nav-link "  onClick={logout} aria-current="page">Logout</span>
        </li>
      </>

  } else {
    login = <li className="nav-item">
      <Link to='/user/login' className="nav-link" aria-current="page">Login</Link>
    </li>
  }

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
                  {login}

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
