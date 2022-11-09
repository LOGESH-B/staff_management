


import React from 'react'
import { useState,useRef,useEffect } from 'react'
import {Helmet} from "react-helmet";




function Table() {
    useEffect(() => {
        const script = document.createElement('script')
    
      
        script.async = true
        script.innerHTML=`const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
        const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))`
    
        document.body.appendChild(script)
    
        return () => {
          document.body.removeChild(script)
        }
      }, [])
    
    return (
        <>
            <div className="container">
                <table className="table table-striped table-hover text-center">
                    <thead>
                        <tr>
                            <th scope="col">S.no</th>
                            <th scope="col">Name</th>
                            <th scope="col">Department</th>
                            <th scope="col">Year of Achivements</th>
                            <th scope="col">Brief Achivements details</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td><span className="d-inline-block" tabIndex="0" data-bs-html="true" data-bs-toggle="popover" data-bs-sanitize="false"
                                data-bs-trigger="hover focus" data-bs-placement="bottom" data-bs-content='<div><div className="row">
                <div className="col-5">
                        <img className=" img-thumbnail dg_ncc " src="image/ncc-logo.png" alt="image/ncc-logo.png"  >
                      </div>
                      <div className="col-7">
                        <p className="text-muted mb-0">Name</p>
                        <h6 id="name">LOGESH B</h6>
                        <p className="text-muted mb-0">Position</p>
                        <h6 id="rank">Prof.</h6>
                        <p className="text-muted mb-0">Year</p>
                        <h6 id="year">2022</h6>
                      
                    
                      </div>
                    </div></div>'>
                                LOGESH B
                            </span></td>
                            <td>Information Technology</td>
                            <td>2022</td>
                            <td>Yet to achive something</td>
                            <td>
                                <div className="row text-center d-flex justif-content-around">
                                    <div className="col-6"><a href="#" className='btn btn-sm btn-outline-danger'>Delete</a></div>
                                    <div className="col-6"><a href="#" className='btn btn-sm btn-outline-success'>Edit</a></div>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>LOGESH B</td>
                            <td>Information Technology</td>
                            <td>2022</td>
                            <td>Yet to achive something</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>LOGESH B</td>
                            <td>Information Technology</td>
                            <td>2022</td>
                            <td>Yet to achive something</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>LOGESH B</td>
                            <td>Information Technology</td>
                            <td>2022</td>
                            <td>Yet to achive something</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>LOGESH B</td>
                            <td>Information Technology</td>
                            <td>2022</td>
                            <td>Yet to achive something</td>
                        </tr>
                    </tbody>
                </table>
                   
   
            </div>
      

        </>

    )
}

export default Table