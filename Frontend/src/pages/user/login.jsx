import React from 'react'
import "./newuser.css"
import Axios from 'axios'
import {useState} from 'react'
import api_url from "../../constants/constant"
import NavBar from '../../components/navbar'

function Login() {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    //base Url
    const api= Axios.create({ baseURL: api_url})

    const handlesubmit=async (e)=>{
        e.preventDefault()
        const data={
            email:email,
            password:password,
        }
         console.log(data)
         await api.post('/user/login',data)
        }

  return (
    <div>
        <NavBar/>
         <div className="container" style={{ marginTop: "90px", marginBottom: "50px" }}>
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xl-6 offset-xl-3">
                        <div className="card shadow">
                            <div><p className="card-title reg">Login</p></div>
                            <div className="card-body">
                                <form onSubmit={handlesubmit} method="post" className="validated-form" noValidate>
                                    <div className="mb-3">
                                        <label className="form-label" for="email">Email</label>
                                        <input className="form-control" type="email" id="email" name="email" onChange={(e) => setEmail(e.target.value)} autofocus required />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" for="password">Password</label>
                                        <input className="form-control" type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)} autofocus required />
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
export default Login;