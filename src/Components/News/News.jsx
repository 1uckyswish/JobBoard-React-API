import React, { useEffect, useState } from 'react'
import NewsCard from '../NewsCard/NewsCard'
import "./News.css"
import axios from 'axios'

function News() {
  const [fetchedData, setFetchedData] = useState([]);
const url = 'https://real-time-news-data.p.rapidapi.com/search?query=Job%20Market&country=US&lang=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '8d2171684amsh40c452b66155ebfp1c033ajsn3c95ae02c598',
		'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
	}
};

useEffect(()=>{
  fetch(url, options)
  .then(response => response.json())
  .then(data => {
    // Handle the data here
    setFetchedData(data.data)
  })
  .catch(error => {
    // Handle errors here
    console.error('Error:', error);
  });
},[]);

console.log(fetchedData)


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