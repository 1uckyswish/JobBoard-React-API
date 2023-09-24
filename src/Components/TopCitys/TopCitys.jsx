import React from 'react'
import "./TopCitys.css"

function TopCitys() {
  return (
    <div className='top-citys-container'>
    <div className='city-header'>
        <h3>Find By Location </h3>
        <p>Top & Perfect location listings</p>
    </div>
    <div class="angry-grid">
    <div id="item-0">
      <h2>Los Angeles</h2>
       <span></span>
      <p>3351 Listing</p>
    </div>
    <div id="item-1">
       <h2>San Francisco</h2>
        <span></span>
      <p>3351 Listing</p>
    </div>
    <div id="item-2">
       <h2>New York</h2>
        <span></span>
      <p>3351 Listing</p>
    </div>
    <div id="item-3">
       <h2>Chicago</h2>
        <span></span>
      <p>3351 Listing</p>
    </div>
    <div id="item-4">
       <h2>Atlanta</h2>
        <span></span>
      <p>3351 Listing</p>
    </div>
    <div id="item-5">
       <h2>London</h2>
        <span></span>
      <p>3351 Listing</p>
    </div>
    </div>
</div>
  )
}

export default TopCitys
