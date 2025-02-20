import React from "react";
import woman from "../assets/women.png";
import shopping from "../assets/shopping.png";
import sale from "../assets/sale.png";
const imageList = [
  {
    id: 1,
    img: woman,
    title: "upto 50% off on all men's wear",
    description: "this is the some loerm text about the shopping",
  },
  {
    id: 2,
    img: shopping,
    title: "upto 50% off on all men's wear",
    description: "this is the some loerm text about the shopping",
  },
  {
    id: 3,
    img: sale,
    title: "upto 50% off on all men's wear",
    description: "this is the some loerm text about the shopping",
  },
];
const Hero = () => {
  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 items-center justify-center flex dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattren */}
      <div className="h-[700px] w-[700px] bg-slate-400 absolute-top-1/2 right-0 rounded-3xl rotate-45 -z-9"></div>
      {/* hero section */}
      <div className="container pb-8 sm:pb-0">
            <div>
                <div className="grid grid-cols-1 sm:grid-cols-2">
{/* text containe section */}
                <div>
                    <h1>heading</h1>
                    <p>description side</p>
                    <div>
                        
                    </div>
                </div>

                </div>
            </div>
      </div>
    </div>
  );
};

export default Hero;
