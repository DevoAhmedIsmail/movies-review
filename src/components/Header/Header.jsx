import React from 'react'
import { BiTimeFive } from "react-icons/bi";


import './Header.css'

const Header = () => {
  return (
    <header className="lg:h-screen w-full relative">
    {/* Header Wrapper */}
    <div className="flex flex-col lg:flex-row lg:h-5/6 ">
      {/* Left */}
      <div className="w-full h-96 lg:h-full lg:w-1/2 relative flex flex-row place-items-end">
        <img
          src="https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg"
          alt="header"
          className="img-absolute"
        />
        <div className="overlay"></div>
        <div className="relative z-10 ml-5 flex flex-col pr-24 pb-5 lg:pb-16 mt-24">
          <p className="text-4xl font-semibold mb-3">
            {" "}
            Puss in Boots: The Last Wish
          </p>
          <p className="text-xl hidden lg:block">
            "Puss in Boots discovers that his passion for adventure has
            taken its toll: He has burned through eight of his nine lives,
            leaving him with only one life left. Puss sets out on an epic
            journey to find the mythical Last Wish and restore his nine
            lives.
          </p>
          {/* Footer */}
          <div className="flex items-center gap-3 mt-5">
            <BiTimeFive className="text-lg font-bold text-yellow-600" />
            2022-12-07
          </div>
        </div>
      </div>
      {/* ./Left */}
      {/* Right */}
      <div className="w-full h-auto lg:w-1/2 flex flex-col bg-violet-500">
        {/* Top */}
        <div className="bg-green-500 relative pb-5 h-96 lg:h-1/2 flex flex-row place-items-end">
          <img
            src="https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg"
            alt="header"
            className="img-absolute"
          />
          <div className="overlay"></div>
          <div className="relative z-10 ml-5 mt-36 pr-24 flex flex-col ">
            <p className="text-4xl font-semibold mb-3">
              Puss in Boots: The Last Wish
            </p>
            <p className="text-xl hidden ">
              "Puss in Boots discovers that his passion for adventure has
              taken its toll: He has burned through eight of his nine lives,
              leaving him with only one life left. Puss sets out on an epic
              journey to find the mythical Last Wish and restore his nine
              lives.
            </p>
            {/* Footer */}
            <div className="flex items-center gap-3">
            <BiTimeFive className="text-lg font-bold text-yellow-600" />
              2022-12-07
            </div>
          </div>
        </div>
        {/* ./Top */}
        {/* Bottom */}
        <div className="bg-yellow-300 relative h-96 lg:h-1/2 flex flex-row place-items-end">
          <img
            src="https://image.tmdb.org/t/p/w500/r9PkFnRUIthgBp2JZZzD380MWZy.jpg"
            alt="header"
            className="img-absolute"
          />
          <div className="overlay"></div>
          <div className="relative z-10 ml-5 pb-5 flex flex-col pr-24 mt-24">
            <p className="text-4xl font-semibold mb-3">
              {" "}
              Puss in Boots: The Last Wish
            </p>
            <p className="text-xl hidden">
              "Puss in Boots discovers that his passion for adventure has
              taken its toll: He has burned through eight of his nine lives,
              leaving him with only one life left. Puss sets out on an epic
              journey to find the mythical Last Wish and restore his nine
              lives.
            </p>
            {/* Footer */}
            <div className="flex items-center gap-3">
            <BiTimeFive className="text-lg font-bold text-yellow-600" />
              2022-12-07
            </div>
          </div>
        </div>
        {/* ./Bottom */}
      </div>
      {/* ./Right */}
    </div>
  </header>
  )
}

export default Header
