import React, { useEffect, useState } from 'react'
import NewsCard from '../NewsCard/NewsCard'
import "./News.css"
import axios from 'axios'

function News() {
  const array = [1,1,1,1]
  const [fetchedData, setFetchedData] = useState([]);
  const [dataArray, SetDataArray] = useState([]);
const url = 'https://real-time-news-data.p.rapidapi.com/search?query=Job%20Market&country=US&lang=en';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'd7ea4936acmshb95926e6bfdf706p167983jsne68fa565e5f8',
		'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
	}
};

useEffect(() => {
  console.log('Fetching data...');
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
      console.log('Fetched data:', data);
      SetDataArray(data[1], data[2],data[3],data[4]);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);

console.log(dataArray)

  return (
    <div className='news-container'>
        <div className='news-header'>
        <h2> Latest Job News  </h2>
        <p>See All</p>
        </div>
        <div className='news-card-container'>
           {/* {dataArray.map((news)=>{
            return <NewsCard singleNews={news}/>
           })} */}
        </div>
    </div>
  )
}

export default News