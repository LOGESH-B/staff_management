import React from 'react'
import NavBar from '../../components/navbar'
import Table from '../../components/table'
import NewUser from '../user/newuser'
import NewAchiev from '../achivement/Newachiev'
import Login from '../user/login'

function Home() {
  
  return (
    <>
    <NavBar />
    <Table   />
    <NewUser />
    <NewAchiev/>
    <Login />
    </>
  )
}

export default Home