import React from 'react'
import "./NewsCard.css"
import logoImage from "../../assets/Logos/amazon.png"

function NewsCard() {
  return (
    <div className='news-detail-card'>
      <img src="https://ichef.bbci.co.uk/news/976/cpsprodpb/1AAA/production/_131262860_ec10df05890093f10ef58569e4a742ed0f44535d0_106_5500_30951000x563.jpg.webp"/>
     <div className='news-detail-card-title'>
        <img src={logoImage} />
        <p>Amazon <span>- 10 hours ago</span></p>
     </div>
    </div>
  )
}

export default NewsCard
