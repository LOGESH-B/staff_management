import React from 'react'
import NavBar from '../../components/navbar'
import Table from '../../components/table'
import NewUser from '../user/newuser'
import NewAchiev from '../achievement/Newachiev'
import Login from '../user/login'

import { useEffect } from 'react'
import decode from 'jwt-decode'
import { useState } from 'react'


function Home() {
  const [isloggedIn, setisloggedin] = useState(false)
  const [wait, setwait] = useState(false)

  useEffect(() => {
    const result =  localStorage.getItem("usertoken")
    console.log(result)
    const token = result;
    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 > new Date().getTime()) {
        setisloggedin(true)
        console.log(isloggedIn)
      }
    }
    else{
    console.log("token not found")
    }
  },[isloggedIn])
  useEffect(() => {
    if (isloggedIn) {
        setwait(true)
    }
}, [isloggedIn])


  return (
    <>
    {wait && <NavBar isloggedIn={isloggedIn} />}
    {!wait && <NavBar isloggedIn={false} />}
    <div>
      <h6 className='h'>Staff Award Management</h6>
    </div>
    {wait && <Table isloggedIn={isloggedIn}/>}
    {!wait && <Table isloggedIn={false} />}
    
    </>
  )
}

export default Home;