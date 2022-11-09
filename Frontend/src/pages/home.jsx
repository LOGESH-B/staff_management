import React from 'react'
import NavBar from '../components/navbar'
import Table from '../components/table'
import NewUser from './Newuser'
import NewAchiev from './Newachiev'

function Home() {
  
  return (
    <>
    <NavBar />
    <Table   />
    <NewUser />
    <NewAchiev/>
    </>
  )
}

export default Home