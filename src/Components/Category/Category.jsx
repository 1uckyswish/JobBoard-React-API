import React from 'react'
import CategoryCard from '../CategoryCard/CategoryCard'
import "./Category.css"

function Category() {
 const jobDetails = [
  {
    id: 0,
    cat: "engineering",
    title: "Software Engineer",
    time: 'full time',
    loc: 'San Francisco',
    buss: 'Facebook',
    date: 'posted 9.25/23'
  },
  {
    id: 1,
    cat: "marketing",
    title: "Digital Marketing Specialist",
    time: 'part time',
    loc: 'Los Angeles',
    buss: 'Amazon',
    date: 'posted 9.24/23'
  },
  {
    id: 2,
    cat: "finance",
    title: "Financial Analyst",
    time: 'full time',
    loc: 'Chicago',
    buss: 'Microsoft',
    date: 'posted 9.23/23'
  },
  {
    id: 3,
    cat: "healthcare",
    title: "Registered Nurse",
    time: 'contract',
    loc: 'Houston',
    buss: 'Apple',
    date: 'posted 9.22/23'
  },
  {
    id: 4,
    cat: "education",
    title: "Elementary School Teacher",
    time: 'full time',
    loc: 'Boston',
    buss: 'Netflix',
    date: 'posted 9.21/23'
  },
  {
    id: 5,
    cat: "sales",
    title: "Sales Representative",
    time: 'full time',
    loc: 'Miami',
    buss: 'Tesla',
    date: 'posted 9.20/23'
  },
  {
    id: 6,
    cat: "technology",
    title: "IT Support Specialist",
    time: 'part time',
    loc: 'Seattle',
    buss: 'Microsoft',
    date: 'posted 9.19/23'
  },
  {
    id: 7,
    cat: "healthcare",
    title: "Physical Therapist",
    time: 'full time',
    loc: 'Denver',
    buss: 'Medtronic',
    date: 'posted 9.18/23'
  },
  {
    id: 8,
    cat: "design",
    title: "Graphic Designer",
    time: 'contract',
    loc: 'New York',
    buss: 'Apple',
    date: 'posted 9.17/23'
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
