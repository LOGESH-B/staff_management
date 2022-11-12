
import Axios from 'axios'
import api_url from "../constants/constant"
import React from 'react'
import { useState, useRef, useEffect } from 'react'
import { Helmet } from "react-helmet";

import { Link } from 'react-router-dom'



function Table() {
    const [getachivedata, setachiveData] = useState()
    const [getuserdata, setuserData] = useState()

    const [dispdata, setdispdata] = useState()
    const [wait, setwait] = useState(false)
    const [disp, setdisp] = useState('View by User')

    //api call
    async function apicall() {
        const api = Axios.create({ baseURL: api_url })
        const res = await api.get('/achievement/getallachievement');
        setachiveData(res.data.achivement)
        setuserData(res.data.user)
    }
    useEffect(() => {
        apicall()
    }, [])
    useEffect(() => {
        if (getachivedata) {
            setwait(true)
            setdispdata(getachivedata)
        }
    }, [getachivedata, getuserdata])

    const toggle = async () => {
        // setwait(false)
        disp == 'View by User' ? setdispdata(getuserdata) : setdispdata(getachivedata);
        disp == 'View by User' ? setdisp('View by Achievement') : setdisp('View by User');
        
    }



    //adding script for search
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
        <>
            <div className="ms-4">
                <input type="text" name="search" id="search" placeholder='Search for User' />
                <button onClick={toggle}>{disp}</button>
            </div>
            <div className="container">
                <table className="table table-striped table-hover text-center">
                    {disp == 'View by User' ?
                        <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Name</th>
                                <th scope="col">Department</th>
                                <th scope="col">Year</th>
                                <th scope="col">Achivements</th>
                                <th scope="col">Awards</th>
                                <th scope="col">View Profile</th>

                            </tr>
                        </thead> : <thead>
                            <tr>
                                <th scope="col">S.no</th>
                                <th scope="col">Name</th>
                                <th scope="col">Department</th>
                                <th scope="col">View Profile</th>

                            </tr>
                        </thead>}
                    <tbody id='tbody'>
                        {disp == 'View by User' ?
                            wait && dispdata.map((e, i) => (

                                <tr>
                                    <td>{i}</td>
                                    <td>
                                        {e.achiever_id.name}
                                    </td>
                                    <td>{e.achiever_id.department}</td>
                                    <td>{e.year}</td>
                                    <td>{e.title}</td>
                                    <td>{e.recognitions}</td>
                                    <td><Link to={{ pathname: `/user/viewProfile/${e.achiever_id._id}` }}>View  </Link></td>

                                </tr>))
                            :
                            wait && dispdata.map((e, i) => (<tr>
                                <td>{i}</td>
                                <td>
                                    {e.name}
                                </td>
                                <td>{e.department}</td>
                                <td><Link to={{ pathname: `/user/viewProfile/${e._id}` }}>View  </Link></td>

                            </tr>

                            ))
                        }

                    </tbody>
                </table>


            </div>


        </>

    )
}

export default Table