import React from "react";
import { FaStar } from "react-icons/fa";
import { BiTimeFive } from "react-icons/bi";
// Slick React
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slide.css";

const Slide = ({ data }) => {
  const settings = {
    // dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    speed: 300,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 660,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {data.map((item) => {
        return (
          <div className="card relative" key={item.id}>
            {/* Card */}
            <div className="card-item flex flex-col h-150 md:h-120 lg:h-120 w-96">
              <div className="card-top image-wrapper h-full rounded">
                <img src={item.image} alt="poster" className="rounded" />
              </div>
              <div className="card-body pt-5">
                <div className="icons flex">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar />
                </div>
                <p className="text-2xl my-5">{item.title}</p>
                <div className="flex items-center gap-3 ">
                  <BiTimeFive />
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
            {/* ./Card */}
          </div>
        );
      })}
    </Slider>
  );
};

export default Slide;
