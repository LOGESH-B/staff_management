import React from 'react'
import "./newachiev.css"
import Axios from 'axios'
import {useState} from 'react'

function Newachiev() {
    const [title,setTitle]=useState('')
    const [year,setYear]=useState('')
    const [recognition,setRecognition]=useState('')

    const handlesubmit=async (e)=>{
        e.preventDefault()
        const data={
            title:title,
            year:year,
            recognition:recognition,
        }
         console.log(data)
         await Axios.post('http://localhost:4000/newachiev',data)
        }

  return (
    <div>
         <div className="container" style={{ marginTop: "50px", marginBottom: "50px" }}>
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-xl-6 offset-xl-3">
                        <div className="card shadow">
                            <div><p className="card-title reg">Register</p></div>
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
                                        <label className="form-label" for="password">Recognition</label>
                                        <input className="form-control" type="password" id="recognition" name="recognition" onChange={(e) => setRecognition(e.target.value)} autofocus required />
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