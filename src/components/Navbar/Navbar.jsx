import React from "react";
import { Link, NavLink } from "react-router-dom";
import movieLogo from "../../assets/photos/logo.svg";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = React.useState(false);

  const showNav = () => setShow(true);
  const hideNav = () => setShow(false);
  if(show){
    document.body.style.overflow = "hidden";
    document.body.classList.add('overlay-body')
  }else {
    document.body.style.overflow = "auto";   
    document.body.classList.remove('overlay-body')

  }

  return (
    <>
      <nav className="flex flex-row justify-between items-center py-10 px-3 md:px-10">
        <div>
          <Link to="/">
            <img
              src={movieLogo}
              alt="movies logo"
              className="w-64 md:w-80 lg:w-96 h-full"
            />
          </Link>
        </div>
        <div className="hidden lg:block space-x-5">
          <NavLink
            to="/"
            end
            className="text-xl tracking-widest hover:text-yellow-400 transition"
          >
            Home
          </NavLink>
          <NavLink
            to="/discover"
            className="text-xl tracking-widest hover:text-yellow-400 transition"
          >
            Discover
          </NavLink>
          <NavLink
            to="/popular"
            className="text-xl tracking-widest hover:text-yellow-400 transition"
          >
            Popular
          </NavLink>
          <NavLink
            to="/top-rated"
            className="text-xl tracking-widest hover:text-yellow-400 transition"
          >
            Top Rated
          </NavLink>
          <NavLink
            to="/upcoming"
            className="text-xl tracking-widest hover:text-yellow-400 transition"
          >
            Upcoming
          </NavLink>
        </div>
        <FaBars className="block lg:hidden text-3xl cursor-pointer"  onClick={showNav} />
      </nav>
    
        <div className={`sidebar w-96 h-screen py-16 px-3 ${show && 'show'}`}>
          <AiOutlineClose
            className="absolute top-5 right-5 text-red-500  hover:text-red-800 transition text-4xl cursor-pointer text-bold"
            onClick={hideNav}
          />
          <ul onClick={hideNav} className="py-10 px-10 flex flex-col">
            <li className="flex justify-start items-center">
              <NavLink
                to="/"
                end
                className="flex items-center text-xl tracking-widest hover:text-yellow-400 transition w-full h-20"
              >
                Home
              </NavLink>
            </li>
            <li className="flex justify-center items-center">
              <NavLink
                to="/discover"
                className="flex items-center text-xl tracking-widest hover:text-yellow-400 transition w-full h-20"
              >
                Discover
              </NavLink>
            </li>
            <li className="flex justify-center items-center">
              <NavLink
                to="/popular"
                className="flex items-center text-xl tracking-widest hover:text-yellow-400 transition w-full h-20 "
              >
                Popular
              </NavLink>
            </li>
            <li className="flex justify-center items-center">
              <NavLink
                to="/top-rated"
                className="flex items-center  text-xl tracking-widest hover:text-yellow-400 transition w-full h-20 "
              >
                Top Rated
              </NavLink>
            </li>
            <li className="flex justify-center items-center">
              <NavLink
                to="/upcoming"
                className="flex items-center text-xl tracking-widest hover:text-yellow-400 transition w-full h-20"
              >
                Upcoming
              </NavLink>
            </li>
          </ul>
        </div>
 
    </>
  );
};

export default Navbar;
