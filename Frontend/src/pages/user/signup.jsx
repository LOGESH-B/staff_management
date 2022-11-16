import React from 'react'
import "./newuser.css"
import Axios from 'axios'
import {useState} from 'react'
import api_url from "../../constants/constant"
import NavBar from '../../components/navbar'
import {useNavigate} from "react-router-dom"
import decode from 'jwt-decode'

function Signup() {
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const navigate= useNavigate();

    //base Url
    const api= Axios.create({ baseURL: api_url})

    const handlesubmit=async (e)=>{
        e.preventDefault()
        const data={
            name:name,
            email:email,
            password:password,
        }
         try{
           const res= await api.post('/user/signup',data)
           localStorage.setItem("useremail", res.data.email);
           localStorage.setItem("usertoken", res.data.token);
           console.log(res.data)
           navigate('/')

         }
         catch(e){
            console.log(e.response.data.message)
            navigate('/user/signup')
         }
        }

  return (
    <div>
        <NavBar/>
         <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xl-6 offset-xl-3">
                        <div className="card shadow">
                            <div><p className="card-title reg">SignUp</p></div>
                            <div className="card-body">
                                <form onSubmit={handlesubmit} method="post" className="validated-form" noValidate>
                                <div className="mb-3">
                                        <label className="form-label" for="name">Name</label>
                                        <input className="form-control" type="text" id="name" name="name" onChange={(e) => setName(e.target.value)} autofocus required />
                                    </div>
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
export default Signup;