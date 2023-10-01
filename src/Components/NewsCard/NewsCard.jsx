import React from 'react'
import "./NewsCard.css"
import logoImage from "../../assets/Logos/amazon.png"

function NewsCard() {
  return (
    <div className='news-detail-card'>
      <img src="https://images.barrons.com/im-81261077?width=940&size=1.5005861664712778"/>
     <div className='news-detail-card-title'>
        <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/CNN_International_logo.svg/2048px-CNN_International_logo.svg.png' />
        <p>CNN News <span>- 10 hours ago</span></p>
     </div>
     <div className='news-detail-info'>
      <h2>This Time Really Is Different for the Economy. Just Look at the Job Market’s Confounding Strength.</h2>
      <p>Since early last year, Fed officials have warned of the labor-market fallout that their attempt to cool prices probably would cause. Fed Chair Jerome Powell called the anticipated pain an “unintended consequence” of the task at hand. </p>
      <div className='news-detail-category'>
        <p>Job Market <span>- 1min read</span></p>
      </div>
     </div>
    </div>
  )
}

export default NewsCard
