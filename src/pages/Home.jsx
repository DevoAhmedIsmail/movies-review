import React from "react";
import Header from "../components/Header/Header";
import { FaStar } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";

// Slick React
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Home = () => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Header />
      <div className="container mx-auto mt-5 lg:-mt-10">
        <h3 className="text-3xl">Popular</h3>
        {/* popular */}
        <div className="mx-8 lg:mx-0">
          <Slider {...settings}>
            {/* Card */}
            <div className="card-item flex flex-col h-150 w-96">
              <div className="card-top image-wrapper h-full rounded">
                <img
                  src="https://image.tmdb.org/t/p/w500/lmf0zzR7ritjOL3qumRh3hfvOFK.jpg"
                  alt="poster"
                  className="rounded"
                />
              </div>
              <div className="card-body pt-5">
                <div className="icons flex">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar />
                </div>
                <p className="text-2xl my-5">Puss in Boots: The Last Wish</p>
                <div className="flex items-center gap-3 ">
                  <BiTimeFive />
                  <span>2022-12-07</span>
                </div>
              </div>
            </div>
            {/* ./Card */}
            {/* Card */}
            <div className="card-item flex flex-col h-150 w-96">
              <div className="card-top image-wrapper h-full rounded">
                <img
                  src="https://image.tmdb.org/t/p/w500/lmf0zzR7ritjOL3qumRh3hfvOFK.jpg"
                  alt="poster"
                  className="rounded"
                />
              </div>
              <div className="card-body pt-5">
                <div className="icons flex">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar />
                </div>
                <p className="text-2xl my-5">Puss in Boots: The Last Wish</p>
                <div className="flex items-center gap-3 ">
                  <BiTimeFive />
                  <span>2022-12-07</span>
                </div>
              </div>
            </div>
            {/* ./Card */}
            {/* Card */}
            <div className="card-item flex flex-col h-150 w-96">
              <div className="card-top image-wrapper h-full rounded">
                <img
                  src="https://image.tmdb.org/t/p/w500/lmf0zzR7ritjOL3qumRh3hfvOFK.jpg"
                  alt="poster"
                  className="rounded"
                />
              </div>
              <div className="card-body pt-5">
                <div className="icons flex">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar />
                </div>
                <p className="text-2xl my-5">Puss in Boots: The Last Wish</p>
                <div className="flex items-center gap-3 ">
                  <BiTimeFive />
                  <span>2022-12-07</span>
                </div>
              </div>
            </div>
            {/* ./Card */}
            {/* Card */}
            <div className="card-item flex flex-col h-150 w-96">
              <div className="card-top image-wrapper h-full rounded">
                <img
                  src="https://image.tmdb.org/t/p/w500/lmf0zzR7ritjOL3qumRh3hfvOFK.jpg"
                  alt="poster"
                  className="rounded"
                />
              </div>
              <div className="card-body pt-5">
                <div className="icons flex">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar />
                </div>
                <p className="text-2xl my-5">Puss in Boots: The Last Wish</p>
                <div className="flex items-center gap-3 ">
                  <BiTimeFive />
                  <span>2022-12-07</span>
                </div>
              </div>
            </div>
            {/* ./Card */}
            {/* Card */}
            <div className="card-item flex flex-col h-150 w-96">
              <div className="card-top image-wrapper h-full rounded">
                <img
                  src="https://image.tmdb.org/t/p/w500/lmf0zzR7ritjOL3qumRh3hfvOFK.jpg"
                  alt="poster"
                  className="rounded"
                />
              </div>
              <div className="card-body pt-5">
                <div className="icons flex">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar />
                </div>
                <p className="text-2xl my-5">Puss in Boots: The Last Wish</p>
                <div className="flex items-center gap-3 ">
                  <BiTimeFive />
                  <span>2022-12-07</span>
                </div>
              </div>
            </div>
            {/* ./Card */}
          </Slider>
        </div>
        {/* ./popular */}
      </div>
    </div>
  );
};

export default Home;
