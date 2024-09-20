import React from 'react'
import heroImg from '../../../assets/img/hero.jpg'
const Hero = () => {
  return (
    <div>
      <section>
    <nav className="flex space-x-6 text-gray-400 font-medium">
        <a href="#" className="hover:text-gray-700 dark:hover:text-white">TV Series</a>
        <a href="#" className="text-gray-700 dark:text-white font-semibold">Movies</a>
        <a href="#" className="hover:text-gray-700 dark:hover:text-white">Animes</a>
    </nav>

    <div
        className="flex flex-col justify-between mt-4 bg-black/10 bg-blend-multiply rounded-3xl h-80 overflow-hidden bg-cover bg-center px-7 pt-4 pb-6 text-white"
        style={{ backgroundImage: `url(${heroImg})` }}
    >
        {/* <img class="object-cover w-full h-full" src="../../../assets/img/hero.jpg" alt=""> */}
        <div className="flex -space-x-1 items-center">
            <img
                className="rounded-full w-7 h-7 shadow-lg border border-white"
                src="https://api.lorem.space/image/face?w=32&h=32&hash=zsrj8csk"
                alt=""
            />
            <img
                className="rounded-full w-7 h-7 shadow-lg border border-white"
                src="https://api.lorem.space/image/face?w=32&h=32&hash=zsrj8cck"
                alt=""
            />
            <img
                className="rounded-full w-7 h-7 shadow-lg border border-white"
                src="https://api.lorem.space/image/face?w=32&h=32&hash=zsfj8cck"
                alt=""
            />
            <span className="pl-4 text-xs drop-shadow-lg">+8 friends are watching</span>
        </div>

        <div className="bg-gradient-to-r from-black/30 to-transparent -mx-7 -mb-6 px-7 pb-6 pt-2">
            <span className="uppercase text-3xl font-semibold drop-shadow-lg">Inception</span>
            <div className="text-xs text-gray-200 mt-2">
                <a href="#">Action</a>, <a href="#">Adventure</a>, <a href="#">Sci-Fi</a>
            </div>
            <div className="mt-4 flex space-x-3 items-center">
                <a href="#" className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-xs inline-block">Watch</a>
                <a href="#" className="p-2.5 bg-gray-800/80 rounded-lg hover:bg-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path
                            fillRule="evenodd"
                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                            clipRule="evenodd"
                        />
                    </svg>
                </a>
            </div>
        </div>
    </div>
</section>

    </div>
  )
}

export default Hero
