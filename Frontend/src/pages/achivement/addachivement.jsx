

import React from 'react'
import {useState, useEffect} from 'react'
import api_url from '../../constants/constant'
import Axios from 'axios'

function AddAchivements() {
    const [search,setSearch] = useState('')
    const [getdata,setData]=useState()
    const [wait,setwait]=useState(false)

    async function apicall (){
        const api= Axios.create({baseURL:api_url})
        const res= await api.get('/user/getalluser');
        setData( res.data)
    }
    useEffect(()=>{
        apicall()
    },[])
    useEffect(()=>{
        if(getdata){
            setwait(true)
        }
    },[getdata])
 
  return (
    <div>
      <input type="text" name="search" onChange={(e)=>setSearch(e.target.value)} id="search" placeholder='Search for User' />
      <div>
        {/* <h1>{getdata.map(e=><h1>e.email</h1>)}</h1> */}
{wait && <div> {getdata.map(l=>(
    <>
    <h1>{l.email}</h1>
    </>
))}
</div>}
      </div>
    </div>
  )
}

export default AddAchivements
