import React from 'react'
import NewsCard from '../NewsCard/NewsCard'
import "./News.css"

function News() {
  return (
    <div className='news-container'>
        <div className='news-header'>
        <h2> Latest Job News  </h2>
        <p>See All</p>
        </div>
        <div className='news-card-container'>
            <NewsCard />
              <NewsCard />
                <NewsCard />
                  <NewsCard />
        </div>
    </div>
  )
}

export default News