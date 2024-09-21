import React from 'react'
import Header from '../layout/header/Header'
import Hero from '../layout/hero/Hero'
import TopStar from '../topstar/TopStar'
import SimilarMovies from '../simliarmovies/SimilarMovies'




const Main = () => {
  return (
    <>
      <div className='flex-1 py-10 px-5 sm:px-10 w-4/6'>
        <Header/>
        <Hero/>
        <TopStar/>
        <SimilarMovies/>
      </div>
    </>
  )
}

export default Main
