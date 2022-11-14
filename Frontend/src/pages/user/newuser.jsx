import React from 'react'
import Axios from 'axios'
import {useState} from 'react'
import "./newuser.css"
import api_url from "../../constants/constant"

function NewUser() {

    const [name,setname]=useState('')
    const [email,setemail]=useState('')
    const [experiance,setexperiance]=useState('')
    const [department,setdepartment]=useState('')
    const [rank,setrank]=useState('')

    const api= Axios.create({ baseURL: api_url})

    const handlesubmit=async (e)=>{
        e.preventDefault()
        const data={
            name:name,
            email:email,
            experiance:experiance,
            department:department,
            rank:rank
        }
         console.log(data)
        await api.post('/user/newuser',data)
    }

  return (
    <div>
            <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xl-6 offset-xl-3">
                        <div className="card shadow">
                            <div><p className="card-title reg">New User</p></div>
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