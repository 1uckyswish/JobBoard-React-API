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
    </div>
  )
}

export default Banner