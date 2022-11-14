

import React from 'react'
import { useState, useEffect } from 'react'
import api_url from '../../constants/constant'
import Axios from 'axios'
import { useParams } from 'react-router-dom'

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
   <div className="container">
      {wait && <div>
        <h3>{getdata.name}</h3>
        <h3>{getdata.department}</h3>
        <h3>{getdata.experiance}</h3>
        <h3>{getdata.achivements[0].title}</h3>
        <table className="table table-striped table-hover text-center">
          <thead>
            <tr>
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
      </div>}
      </div>
    </>


  )
}

export default Profile