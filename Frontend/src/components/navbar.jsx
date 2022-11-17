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
    <Link to='/user/getalluser' className="nav-link " style={{color:"whitesmoke",marginRight:"10px"}} aria-current="page"><i style={{marginRight:"4px"}} class="fa-solid fa-trophy"></i> Add Achievements</Link>
  </li>
        <li className="nav-item">
          <span className="nav-link "  style={{color:"whitesmoke",marginRight:"10px"}} aria-current="page" onClick={logout} ><i class="fa-solid fa-right-to-bracket"style={{marginRight:"4px"}}></i> Logout</span>
        </li>
      </>

  } else {
    login = 
  <li className="nav-item">
    <Link to='/user/login' className="nav-link active" style={{color:"whitesmoke",marginRight:"10px"}} aria-current="page"><i class="fa-solid fa-right-to-bracket"style={{marginRight:"4px"}}></i> Login</Link>
  </li>
  }

  return (
    <>
      <div >


        <nav className="navbar navbar-expand-lg" style={{background:"#3c3d40"}}>
          <div className="container-fluid">
            <a className="navbar-brand" href="#" style={{color:"whitesmoke"}}><i style={{marginLeft:"20px"}} class="fa-sharp fa-solid fa-street-view"></i></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className='ms-auto'>
              <div className="collapse navbar-collapse " id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link to='/' className="nav-link active" style={{color:"whitesmoke",marginRight:"10px"}} aria-current="page"><i class="fa-solid fa-house-user" style={{marginRight:"4px"}}></i> Home</Link>
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
