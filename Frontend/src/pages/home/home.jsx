import React from 'react'
import NavBar from '../../components/navbar'
import Table from '../../components/table'
import NewUser from '../user/newuser'
import NewAchiev from '../achievement/Newachiev'
import Login from '../user/login'
import "./home.css"

function Home() {
  
  return (
    <>
    <NavBar />
    <div>
      <h6 className='h'>Staff Award Management</h6>
    </div>
    <Table/>
    </>
  )
}

export default Home;