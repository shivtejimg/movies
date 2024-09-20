import React from 'react'

const RightBar = () => {
  return (
      <aside className=" flex-none w-1/6 py-10 px-10 min-w-min border-l border-gray-300 dark:border-zinc-700 hidden lg:block">
        <div className="relative items-center content-center flex">
          <span className="text-gray-400 absolute left-4 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </span>
          <input
            type="text"
            className="text-xs ring-1 bg-transparent ring-gray-200 dark:ring-zinc-600 focus:ring-red-300 pl-10 pr-5 text-gray-600 dark:text-white py-3 rounded-full w-full outline-none focus:ring-1"
            placeholder="Search ..."
          />
        </div>

        <div className="mt-10 text-start">
          <span className="font-semibold text-gray-700 dark:text-white text-start">Popular Movies</span>
          <ul className="mt-4 text-gray-400 text-xs space-y-3">
            {/* Movie Item */}
            <li className="flex space-x-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/8/81/ShawshankRedemptionMoviePoster.jpg"
                className="w-1/3 rounded-md"
                alt="The Shawshank Redemption"
              />
              <div className="flex flex-col justify-between">
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-700 dark:text-white font-semibold">The Shawshank Redemption</span>
                  <span className="text-xxs hidden xl:block">Drama</span>
                </div>
                <div className="flex space-x-2 items-center">
                  <svg className="w-8 h-5" xmlns="http://www.w3.org/2000/svg" width="64" height="32" viewBox="0 0 64 32">
                    <g fill="#F5C518">
                      <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>
                    </g>
                    <g transform="translate(8.000000, 7.000000)" fill="#000000" fillRule="nonzero">
                      <polygon points="0 18 5 18 5 0 0 0"></polygon>
                      <path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>
                      <path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>
                    </g>
                  </svg>
                  <span>9.2</span>
                </div>
              </div>
            </li>
            {/* More Movies... */}
          </ul>
        </div>

        <div className="mt-10 text-start">
          <span className="font-semibold text-gray-700 dark:text-white">Favorites</span>
          <ul className="mt-4 text-gray-400 text-xs space-y-3">
            {/* Favorite Movie Item */}
            <li className="flex space-x-3">
              <img
                src="https://upload.wikimedia.org/wikipedia/en/c/c1/The_Matrix_Poster.jpg"
                className="object-cover w-1/3 rounded-md"
                alt="The Matrix"
              />
              <div className="flex flex-col justify-between">
                <div className="flex flex-col space-y-1">
                  <span className="text-gray-700 dark:text-white font-semibold">The Matrix</span>
                  <span className="text-xxs hidden xl:block">Action, Sci-Fi</span>
                </div>
                <div className="flex space-x-2 items-center">
                  <svg className="w-8 h-5" xmlns="http://www.w3.org/2000/svg" width="64" height="32" viewBox="0 0 64 32">
                    <g fill="#F5C518">
                      <rect x="0" y="0" width="100%" height="100%" rx="4"></rect>
                    </g>
                    <g transform="translate(8.000000, 7.000000)" fill="#000000" fillRule="nonzero">
                      <polygon points="0 18 5 18 5 0 0 0"></polygon>
                      <path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path>
                      <path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path>
                    </g>
                  </svg>
                  <span>8.7</span>
                </div>
              </div>
            </li>
            {/* More Favorite Movies... */}
          </ul>
        </div>
      </aside>
  )
}

export default RightBar
