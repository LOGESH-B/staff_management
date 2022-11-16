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
    const [loading, setLoading] = useState(false)
    const [image, setImage] = useState("")
    const [imageurl ,setImageurl] = useState('')

    const api= Axios.create({ baseURL: api_url})

    const uploadImage = async e => {
        const files = e.target.files
        const data = new FormData()
        data.append('file', files[0])
        data.append('upload_preset', 'staff_award')
        setLoading(true)
        const res = await fetch("https://api.cloudinary.com/v1_1/djylwtcvn/image/upload",
            {
                method: 'POST',
                body: data
            })

        const file = await res.json()
        console.log(file)
        console.log(file.url)
        setImageurl(file.url)
        setImage(file.secure_url)
        setLoading(false)
    }

    const handlesubmit=async (e)=>{
        e.preventDefault()
        const data={
            name:name,
            email:email,
            experiance:experiance,
            department:department,
            rank:rank,
            imageurl:imageurl
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
                                    <div className="mb-4">
                                        <label className="form-label" for="cmpimg">Upload Image</label>
                                        <input className="form-control" type="file" onChange={uploadImage} id="cmpimg" name="cmpimg" required />
                                        {
                                            loading ? (
                                                <h5>Loading..</h5>
                                            ) : (
                                                <img src={image} style={{ width: '300px' }} alt=".." />
                                            )

                                        }</div>
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