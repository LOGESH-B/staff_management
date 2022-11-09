
import React from 'react'
import Axios from 'axios'

import {useState} from 'react'

function NewUser() {

    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const [experiance,setexperiance]=useState('')
    const [department,setdepartment]=useState('')
    const [rank,setrank]=useState('')

    const handlesubmit=async (e)=>{
        e.preventDefault()
        const data={
            name:name,
            email:email,
            password:password,
            experiance:experiance,
            department:department,
            rank:rank
        }
         console.log(data)
        const api= Axios.create({ baseURL: 'http://localhost:4000/'})
console.log(api)
        await api.post('/newuser',data)
    }

  return (
    <div>
        <form onSubmit={handlesubmit} method="post">
            <input type="text" name="name" id="name" onChange={(e)=>setname(e.target.value)} />
            <input type="text" name="email" id="email" onChange={(e)=>setemail(e.target.value)} />
            <input type="text" name="password" id="password" onChange={(e)=>setpassword(e.target.value)} />
            <input type="text" name="experiance" id="experiance" onChange={(e)=>setexperiance(e.target.value)} />
            <input type="text" name="department" id="department" onChange={(e)=>setdepartment(e.target.value)} />
            <input type="text" name="rank" id="rank" onChange={(e)=>setrank(e.target.value)} />
            <button type='submit'>Submit</button>
           

        </form>
    </div>
  )
}

export default NewUser