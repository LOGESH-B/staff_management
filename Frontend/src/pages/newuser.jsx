import React from 'react'
import Axios from 'axios'
import {useState} from 'react'
import "./newuser.css"

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
        {/* <form onSubmit={handlesubmit} method="post">
            <input type="text" name="name" id="name" onChange={(e)=>setname(e.target.value)} />
            <input type="text" name="email" id="email" onChange={(e)=>setemail(e.target.value)} />
            <input type="text" name="password" id="password" onChange={(e)=>setpassword(e.target.value)} />
            <input type="text" name="experiance" id="experiance" onChange={(e)=>setexperiance(e.target.value)} />
            <input type="text" name="department" id="department" onChange={(e)=>setdepartment(e.target.value)} />
            <input type="text" name="rank" id="rank" onChange={(e)=>setrank(e.target.value)} />
            <button type='submit'>Submit</button></form> */}


            <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xl-6 offset-xl-3">
                        <div className="card shadow">
                            <div><p className="card-title reg">Register</p></div>
                            <div className="card-body">
                                <form onSubmit={handlesubmit} method="post" className="validated-form" noValidate>
                                    <div className="mb-3">
                                        <label className="form-label" for="name">Name</label>
                                        <input className="form-control" type="text" id="name" name="name" onChange={(e) => setname(e.target.value)} autofocus required />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" for="email">Email</label>
                                        <input className="form-control" type="text" id="email" name="email" onChange={(e) => setemail(e.target.value)} autofocus required />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" for="password">Password</label>
                                        <input className="form-control" type="password" id="password" name="password" onChange={(e) => setpassword(e.target.value)} autofocus required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" for="dept">Department</label>
                                        <input className="form-control" type="text" id="dept" name="dept" onChange={(e) => setdepartment(e.target.value)} autofocus required />
                                    </div> 
                                    <div>
                                    <div className="mb-3" >
                                        <label className="form-label" for="exp">Experience</label>
                                        <input className="form-control" type="text" id="exp" name="exp" onChange={(e) => setexperiance(e.target.value)} autofocus required />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" for="rank">Rank</label>
                                        <input className="form-control" type="text" id="rank" name="rank" onChange={(e) => setrank(e.target.value)} autofocus required />
                                    </div>
                                    </div>
                                    <button className="btn but"  type="submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
    </div>
  )
}

export default NewUser;