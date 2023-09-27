import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import "./Category.css"
import { objOfLogos } from '../../utils/logo';

function Category() {

const jobDetails = [
  {
    id: 0,
    cat: "engineering",
    title: "Machine Learning Engineer",
    time: 'full time',
    loc: 'San Francisco',
    buss: 'Amazon',
    date: 'posted 9.25/23',
    image: objOfLogos[0],
  },
  {
    id: 1,
    cat: "marketing",
    title: "Content Marketing Manager",
    time: 'part time',
    loc: 'Los Angeles',
    buss: 'Apple',
    date: 'posted 9.24/23',
     image: objOfLogos[1],
  },
  {
    id: 2,
    cat: "finance",
    title: "Investment Analyst",
    time: 'full time',
    loc: 'Chicago',
    buss: 'Figma',
    date: 'posted 9.23/23',
     image: objOfLogos[2],
  },
  {
    id: 3,
    cat: "healthcare",
    title: "Emergency Room Physician",
    time: 'contract',
    loc: 'Houston',
    buss: 'Google',
    date: 'posted 9.22/23',
     image: objOfLogos[3],
  },
  {
    id: 4,
    cat: "education",
    title: "Online Course Instructor",
    time: 'full time',
    loc: 'Boston',
    buss: 'Linkedin',
    date: 'posted 9.21/23',
     image: objOfLogos[4],
  },
  {
    id: 5,
    cat: "sales",
    title: "Sales Manager",
    time: 'full time',
    loc: 'Miami',
    buss: 'Microsoft',
    date: 'posted 9.20/23',
     image: objOfLogos[5],
  },
  {
    id: 6,
    cat: "technology",
    title: "Cybersecurity Analyst",
    time: 'part time',
    loc: 'Seattle',
    buss: 'Slack',
    date: 'posted 9.19/23',
     image: objOfLogos[6],
  },
  {
    id: 7,
    cat: "healthcare",
    title: "Physical Therapist",
    time: 'full time',
    loc: 'Denver',
    buss: 'Spotify',
    date: 'posted 9.18/23',
     image: objOfLogos[7],
  },
  {
    id: 8,
    cat: "design",
    title: "UX/UI Designer",
    time: 'contract',
    loc: 'New York',
    buss: 'Twitch',
    date: 'posted 9.17/23',
     image: objOfLogos[8],
  }
];






  return (
    <div className='category-card-container'>
      <h2>Search By Category</h2>
      <p>Top Jobs based by Category</p>
        <div class="grid-card">
          {jobDetails.map((job, index) => {
 return  <CategoryCard key={index} data={job} />
})}
</div>
    </div>
  )
}

export default Category
