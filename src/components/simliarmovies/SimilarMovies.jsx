import React, { useEffect, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { BASE_URL } from '../../constant/constant';
import axios from 'axios';
import { IMG_URL } from './../../constant/constant';



const SimilarMovies = ({ movies }) => {
  const swiperRef = useRef(null);
  const tokan = localStorage.getItem('token');
  const [similarMovies, setSimilarMovies] = useState([])

  const handlePrev = () => {
    if (swiperRef.current) swiperRef.current.slidePrev();
  };

  const handleNext = () => {
    if (swiperRef.current) swiperRef.current.slideNext();
  };


const getSimilarMovies = async() => {
  try{
    const res = await axios.get(`${BASE_URL}/3/movie/upcoming?language=en-US&page=1`,{
      headers: {
        Authorization : `Bearer ${tokan}`
      }
    })
    console.log(res)
    setSimilarMovies(res.data.results)
  }catch(error){
    console.log(error);
  }
}

console.log({similarMovies})
useEffect(() => {
  getSimilarMovies()
},[])
  return (
    <section className="mt-9">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-gray-700 text-base dark:text-white">Similar Movies</span>
        <div className="flex items-center space-x-2 fill-gray-500">
          <svg
            className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M13.293 6.293L7.58 12l5.7 5.7 1.41-1.42 -4.3-4.3 4.29-4.293Z"></path>
          </svg>
          <svg
            className="h-7 w-7 rounded-full border p-1 hover:border-red-600 hover:fill-red-600 dark:fill-white dark:hover:fill-red-600"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M10.7 17.707l5.7-5.71 -5.71-5.707L9.27 7.7l4.29 4.293 -4.3 4.29Z"></path>
          </svg>
        </div>
      </div>

      <div className="mt-4 ">
      <Swiper
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    slidesPerView={1}
                    spaceBetween={10}
                    // loop={true}
                   
                    breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10,
                    },
                    }}
                    className="mySwiper w-full "
                >
                    {
                        similarMovies.map((item, index)=>{
                            return (
                                <SwiperSlide className=''> 
                                    <div className="relative rounded-xl overflow-hidden">
                                    <img src={IMG_URL+item.poster_path} className="object-cover h-full w-full -z-10" alt="Leonardo DiCaprio" />
                                    <div className="absolute top-0 h-full w-full bg-gradient-to-t from-black/50 p-3 flex flex-col justify-between">
                                        <a href="#" className="p-2.5 bg-gray-800/80 bg-slate-900 rounded-lg text-white self-end hover:bg-red-600/80">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                                            </svg>
                                        </a>
                                        <div className="self-center flex flex-col items-center space-y-2">
                                            <span className="capitalize text-white font-medium drop-shadow-md">{item.title}</span>
                                            <span className="text-gray-100 text-xs">{item.vote_average}</span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>

                            )
                        } )   
                    }
                </Swiper>

      </div>
    </section>
  );
};

export default SimilarMovies;
