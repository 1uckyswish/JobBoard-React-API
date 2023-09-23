import React from 'react'
import { BiSearchAlt } from "react-icons/bi";


import "./Banner.css"

function Banner() {
  return (
    <div className='banner-container'>
     <h2>Hiring Just Got Easy Now</h2>
     <p>Your next job is just one click away</p>
     <div className='input-container'>
        <input type="text" placeholder='Job Title'/>
        <input type="text" placeholder='City, state, or zip code'/>
        <select>
            <option value="">Remote</option>
            <option value="">On-site</option>
            <option value="">Hybrid</option>
            <option value="">Any</option>
        </select>
        <button><BiSearchAlt /></button>
     </div>
     <div className="job-block-container">
     <div className="job-block block-1">
      <h4>Work From Home</h4>
     </div>
      <div className="job-block block-2">
      <h4>Digital Marketing</h4>
     </div>
      <div className="job-block block-3">
      <h4>Event Manager</h4>
     </div>
      <div className="job-block block-4">
      <h4>Executive Officer</h4>
     </div>
     </div>
    </div>
  )
}

export default Banner