

import React from 'react'
import { useState, useEffect } from 'react'
import api_url from '../../constants/constant'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import NavBar from '../../components/navbar'
import {useNavigate} from 'react-router-dom'
import decode from 'jwt-decode'

function AddAchivements() {
  const [search, setSearch] = useState('')
  const [getdata, setData] = useState()
  const [wait, setwait] = useState(false)
  const [isloggedIn, setisloggedin] = useState(false)
  const navigate= useNavigate();

  async function apicall() {
    const api = Axios.create({ baseURL: api_url })
    const res = await api.get('/user/getalluser');
    setData(res.data)
  }
  useEffect(() => {
    apicall()
    const result =  localStorage.getItem("usertoken")
    console.log(result)
    const token = result;
    if (token) {
      const decodedToken = decode(token)
      if (decodedToken.exp * 1000 > new Date().getTime()) {
        console.log(isloggedIn)
      }
      else{
        navigate('/')
      }
    }
    else{
      navigate('/')
    console.log("token not found")
    }
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
    <div className=''>
      <NavBar isloggedIn={true} />
      <div className="text-center mt-5">
        <input type="text" name="search" style={{width:"30%"}} onChange={(e) => setSearch(e.target.value)} id="search" placeholder='Search for User' />
      </div>
    
      <div className='container'>
      <table className="table table-striped table-hover text-center mt-5">
        <thead>
          <tr className='table-secondary'><th>Name</th><th>Department</th><th>Add Achievement</th></tr>
         
        </thead>
        <tbody id='tbody'>
      {wait && getdata.map(e => (

        <tr>
          <td><b>{e.name}</b></td>
          <td>{e.department}</td>
          <td><Link className='btn' style={{background:"#7e3ab5",color:"white"}} to={{ pathname: `/user/newachievement/${e._id}` }}  >Add </Link></td>
        </tr>

      ))
      }
      </tbody>
      </table>
      </div>

    </div>
  )
}

export default AddAchivements
