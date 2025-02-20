import React, { useState } from "react";
import { HiArrowRight, HiArrowLeft } from "react-icons/hi";

const Banner = () => {
    const [currentSlide, setCurrentSlide]=useState(0)
  const data = [
    "https://as2.ftcdn.net/v2/jpg/03/83/21/85/1000_F_383218557_t5fC98hOdrg0hr4BsulCZ9mPX9a4uube.jpg",
    "https://as1.ftcdn.net/v2/jpg/03/83/21/88/1000_F_383218892_B98gEq5bFMslw4FUv8DhuipERuS7yi8z.jpg",
    "https://t3.ftcdn.net/jpg/05/26/53/52/240_F_526535232_3FG0tckX1I3yAaHqqBeCdt0MVE1A5UQ2.jpg",
    "https://as1.ftcdn.net/v2/jpg/03/83/21/88/1000_F_383218892_B98gEq5bFMslw4FUv8DhuipERuS7yi8z.jpg",
    
  ]
  const prevSlide=()=>{
    setCurrentSlide(currentSlide===0?3:(prev)=>prev-1)
  }
  const nextSlide=()=>{
    setCurrentSlide(currentSlide===3?0:(prev)=>prev+1)
  }
 
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className="w-screen h-[650px] relative">
        <div style={{transform:`translateX(-${currentSlide * 100}vw)`}} className="w-[300vw] h-full flex transition-transform duration-1000">
          <img
            className="w-screen h-full object-cover"
            src={data[0]}
            alt="imgOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[1]}
            alt="imgOne"
            loading="priority"
          />
          <img
            className="w-screen h-full object-cover"
            src={data[2]}
            alt="imgOne"
            loading="priority"
          />
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto gap-8 bottom-44 flex">
          <div onClick={prevSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center 
          justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
           active:bg-gray-900 duration-300">
            <HiArrowLeft />
          </div>
          <div onClick={nextSlide} className="w-14 h-12 border-[1px] border-gray-700 flex items-center
           justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white
            active:bg-gray-900 duration-300">
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
