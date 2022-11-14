

import React from 'react'
import { useState, useEffect } from 'react'
import api_url from '../../constants/constant'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from '../../components/navbar'

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
      <NavBar />
      <div className="text-center mt-5">
        <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} id="search" placeholder='Search for User' />
      </div>

    
      <table className="table table-striped table-hover text-center mt-5">
        <thead>
          <tr><th>Name</th><th>Department</th><th>Add Achievement</th></tr>
         
        </thead>
        <tbody id='tbody'>
      {wait && getdata.map(e => (

        <tr>
          <td><b>{e.name}</b></td>
          <td>{e.department}</td>
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
