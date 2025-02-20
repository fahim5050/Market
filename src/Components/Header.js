import React, { useState } from "react";
import { cartImg, logoDark } from "../assets/index";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
// import { ToastContainer } from "react-toastify";
const Header = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
 console.log(userInfo)
  const [item, setItem] = useState();
  const handleChange = (e) => {
    setItem(e.target.value);
  };
  
  return (
    <div className="w-full h-14 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
      <div className="max-w-screen-xl h-full mx-10 flex items-center justify-between">
        <div>
          <Link to="/">
            <img className="w-28" src={logoDark} alt="imageDark"></img>
          </Link>
        </div>
        <div className="flex items-center gap-8  grid-cols-2">
          <div className="flex w-96   ">
            <input
              className="flex text-center w-full bg-gray-200 rounded-2xl p-1"
              type="text"
              value={item}
              onChange={handleChange}
              placeholder="search item"
            />
          </div>
          <ul className="flex items-center gap-8">
            <Link to="/">
              <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Home
              </li>
            </Link>
            <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Pages
            </li>
            <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Shop
            </li>
            <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Element
            </li>
            <li className="text-base text-black hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              Blog
            </li>
          </ul>
          <Link to="/cart">
          <div className="relative">
            <img className="w-6" src={cartImg} alt=""></img>
            <span className="absolute w-6 top-2 left-2 text-sm items-center justify-center font-semibold ">
              {productData.length}
            </span>
          </div>
          </Link>
          <Link to="/login">
          <img
            className="w-8 h-8 rounded-full"
            src={userInfo
              ? userInfo.image :"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
            alt="profile"
          ></img>
          </Link>
          {
            userInfo && <p className="text-base font-titleFont font-semibold underline underline-offset-2">{userInfo.name}</p>
          }
        </div>
      </div>
     
    </div>
  );
};

export default Header;
