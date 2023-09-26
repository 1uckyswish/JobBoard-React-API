import React from 'react';
import './CategoryCard.css'
import logo from "../../assets/Img/google.png"

function CategoryCard({index, data}) {
  return (
    <div id={`card-${data.id}`}>
      <div className="category-title">
        <img src={logo} />
        <h3>{data.cat}</h3>
      </div>
      <div className="category-job-title">
        <h2>{data.title}</h2>
      <div className="category-job-title-details">
          <p>{data.time}</p>
      <p>{data.loc}</p>
      </div>
      </div>
    <div className="category-job-date">
         <h3>{data.buss}</h3>
      <p>{data.date}</p>
    </div>
    </div>
  )
}

export default CategoryCard