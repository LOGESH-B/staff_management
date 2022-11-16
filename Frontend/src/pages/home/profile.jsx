

import React from 'react'
import { useState, useEffect } from 'react'
import api_url from '../../constants/constant'
import Axios from 'axios'
import { useParams } from 'react-router-dom'
import NavBar from '../../components/navbar'

function Profile() {
  const [getdata, setData] = useState()
  const [wait, setwait] = useState(false)

  const { id } = useParams()

  async function apicall() {
    const api = Axios.create({ baseURL: api_url })
    const res = await api.get(`/user/userProfile/${id}`);
    setData(res.data)

  }
  useEffect(() => {
    apicall()
  }, [])
  useEffect(() => {
    if (getdata) {
      setwait(true)
      console.log(getdata)
    }
  }, [getdata])


  

  return (
    <>
    <div>
    <NavBar/>
   <div className="container">
      {wait && <div className='container' style={{marginTop:"30px"}}>
        <div className='row'>
        <div className='col-5'>
          <p><h3 style={{marginLeft:"10px",marginBottom:"20px"}}>Staff Details</h3></p>
          <div className="card mb-3">
            <img src={getdata.imageurl} alt="" />
            <div className="card-body">
                <ul className="list-group list-group-flush">
                <h5 className="list-group-item">{getdata.name}</h5>
                <li className="list-group-item">Department :  {getdata.department}</li>
                <li className="list-group-item">Experience :  {getdata.experiance} years</li>
            </ul>
            </div></div>
        </div>
        <div className='col-7'>
        <p><h3 style={{marginLeft:"40px",marginBottom:"20px"}}>Awards</h3></p>
        <table className="table table-striped table-hover text-center" style={{marginLeft:"30px"}}>
          <thead>
            <tr className='table-secondary'>
              <th>Title</th>
              <th>Year</th>
              <th>Recognitions</th>
            </tr>
          </thead>
          <tbody id='tbody'>
            {getdata.achivements.map(e => (
              <tr>
                <td>{e.title}</td>
                <td>{e.year}</td>
                <td>{e.recognitions}</td>
              </tr>
            ))}
          </tbody>

        </table>
        </div></div>
      </div>}
      </div>
      </div>
    </>


  )
}

export default Profile