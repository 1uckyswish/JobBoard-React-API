import React from 'react'
import Header from './Components/Header/Header'
import Banner from './Components/Banner/Banner'
import TopCitys from './Components/TopCitys/TopCitys'
import Category from './Components/Category/Category'
import "./App.css"
import News from './Components/News/News'
import UserReviews from './Components/UserReviews/UserReviews';

function App() {
  return (
    <>
    <Header/>
    <Banner />
    <TopCitys/>
    <Category />
    <News/>
    <UserReviews />
    </>
  )
}

export default App