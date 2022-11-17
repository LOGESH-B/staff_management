import React from 'react'
import "./newachiev.css"
import Axios from 'axios'
import {useState} from 'react'
import api_url from "../../constants/constant"
import { useNavigate, useParams} from "react-router-dom"
import NavBar from '../../components/navbar'

function Newachiev(props) {
    const [title,setTitle]=useState('')
    const [year,setYear]=useState('')
    const [recognitions,setRecognitions]=useState('')
    const navigate=useNavigate()

    //data from params
    const {id}=useParams()
    console.log(id)
    
    //base Url
    const api= Axios.create({ baseURL: api_url})

    const handlesubmit=async (e)=>{
        e.preventDefault()
        const data={
            title:title,
            year:year,
            recognitions:recognitions,
        }
         console.log(data)
         await api.post(`/achievement/newachievement/${id}`,data)
         navigate('/')
        }

  return (
    <div>
        <NavBar />
         <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xl-6 offset-xl-3">
                        <div className="card shadow">
                            <div><p className="card-title reg">Add Achievement</p></div>
                            <div className="card-body">
                                <form onSubmit={handlesubmit} method="post" className="validated-form" noValidate>
                                    <div className="mb-3">
                                        <label className="form-label" for="name">Title</label>
                                        <input className="form-control" type="text" id="name" name="name" onChange={(e) => setTitle(e.target.value)} autofocus required />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" for="year">Year</label>
                                        <input className="form-control" type="text" id="year" name="year" onChange={(e) => setYear(e.target.value)} autofocus required />
                                    </div>
                                    <div className="mb-4">
                                        <label className="form-label" for="password">Recognitions</label>
                                        <input className="form-control" type="text" id="recognitions" name="recognitions" onChange={(e) => setRecognitions(e.target.value)} autofocus required />
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
export default Newachiev;