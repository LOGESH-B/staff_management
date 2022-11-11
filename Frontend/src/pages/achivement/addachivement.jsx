

import React from 'react'
import { useState, useEffect } from 'react'
import api_url from '../../constants/constant'
import Axios from 'axios'
import { Link } from 'react-router-dom'

function AddAchivements() {
  const [search, setSearch] = useState('')
  const [getdata, setData] = useState()
  const [wait, setwait] = useState(false)

  async function apicall() {
    const api = Axios.create({ baseURL: api_url })
    const res = await api.get('/user/getalluser');
    setData(res.data)
  }
  useEffect(() => {
    apicall()
  }, [])
  useEffect(() => {
    if (getdata) {
      setwait(true)
    }
  }, [getdata])

  //adding script
  useEffect(() => {
    const script = document.createElement('script')
    script.async = true
    script.innerHTML = `    $(document).ready(function () {
      $("#search").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $("#tbody tr").filter(function () {
          $(this).toggle($(this).text()
            .toLowerCase().indexOf(value) > -1)
        });
      });
    });`
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, []);

  return (
    <div className='container'>
      <div className="ms-4">
        <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} id="search" placeholder='Search for User' />
      </div>

      {/* <h1>{getdata.map(e=><h1>e.email</h1>)}</h1> */}
      <table>
        <thead>
          <tr><td>Name</td><td>Department</td><td>Add Achievement</td></tr>
         
        </thead>
        <tbody id='tbody'>
      {wait && getdata.map(e => (

        <tr>
          <td><h4>{e.name}</h4></td>
          <td><h4>{e.department}</h4></td>
          <td><Link className='btn btn-success' to={{ pathname: `/user/newachivement/${e._id}` }}  >Add </Link></td>
        </tr>

      ))
      }
      </tbody>
      </table>
      

    </div>
  )
}

export default AddAchivements
