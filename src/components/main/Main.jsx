import React from 'react'
import Header from '../layout/header/Header'
import Hero from '../layout/hero/Hero'
import TopStar from '../topstar/TopStar'
import SimilarMovies from '../simliarmovies/SimilarMovies'



const movies = [
  {
    title: 'Tenet',
    poster: 'https://upload.wikimedia.org/wikipedia/en/1/14/Tenet_movie_poster.jpg',
    rating: '7.4'
  },
  {
    title: 'Fight Club',
    poster: 'https://upload.wikimedia.org/wikipedia/en/f/fc/Fight_Club_poster.jpg',
    rating: '8.8'
  },
  {
    title: 'Dune',
    poster: 'https://upload.wikimedia.org/wikipedia/en/8/8e/Dune_%282021_film%29.jpg',
    rating: '8.1'
  }
];

const Main = () => {
  return (
    <>
      <div className='flex-1 py-10 px-5 sm:px-10 w-4/6'>
        <Header/>
        <Hero/>
        <TopStar/>
        <SimilarMovies movies={movies}/>
      </div>
    </>
  )
}

export default Main
