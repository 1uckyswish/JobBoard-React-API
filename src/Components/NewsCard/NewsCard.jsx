import React from 'react';
import "./NewsCard.css";

function NewsCard({ singleNews }) {
  // Regular expression to match "https://", "www.", and ".com" in the source_url
  const modifiedSourceUrl = singleNews?.source_url.replace(/^(https?:\/\/)?(www\.)?|\.com$/gi, '');
  const dateObject = new Date(singleNews?.published_datetime_utc);
// Extract month, day, and year
const month = dateObject.getUTCMonth() + 1; // Months are zero-based, so add 1
const day = dateObject.getUTCDate();
const year = dateObject.getUTCFullYear().toString().slice(-2); // Get the last two digits of the year

// Format the components into a readable string
const formattedDate = `${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}-${year}`;

  return (
    <div className='news-detail-card'>
      <img src={singleNews?.photo_url} />
      <div className='news-detail-card-title'>
        <img src={singleNews?.source_favicon_url} />
        <p>{modifiedSourceUrl}</p>
      </div>
      <div className='news-detail-info'>
        <h2>{singleNews?.title}</h2>
        <p>Read Article- <a href={singleNews?.link}>Here</a></p>
        <div className='news-detail-category'>
          <p>Article Date <span>-{formattedDate}</span></p>
        </div>
      </div>
    </div>
  );
}

export default NewsCard;
