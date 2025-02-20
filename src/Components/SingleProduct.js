import React, { useEffect, useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addToCart } from "../redux/BazarSlice";
import { toast, ToastContainer } from "react-toastify";

const SingleProduct = () => {
  const dispatch=useDispatch();
  const [details, setDetails] = useState({});
  let [baseQty, setBaseQty]=useState(1)
  const location = useLocation();

  useEffect(() => {
    setDetails(location.state.item);
  }, []);
  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 grid grid-cols-1 sm:grid-cols-2  gap-10">
        <div className="w-2/5 relative">
          <img
            className="w-full h-[400px] object-cover mx-7"
            src={details.image}
            alt={details.image}
          ></img>
          <div className="absolute top-4 right-0">
            {details.isNew && (
              <p
                className="bg-black text-white font-semibold font-titleFont px-6 py-1
        "
              >
                Sale
              </p>
            )}
          </div>
        </div>
        {/* finishe the left side  */}
        <div className="w-3/5  grid grid-cols-1 justify-center gap-12">
          <div>
            <h2 className="text-xs font-semibold md:text-4xl">{details.title}</h2>
            <div>
              <div className="flex gap-4 items-center mt-3">
                <p className="line-through text-gray-500 text-xs">
                  ${details.oldPrice}
                </p>
                <p className="font-semibold text-xs">${details.price}</p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center text-base">
            <div className="flex gap-2">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
            </div>

            <p className="text-xs text-gray-500">(1 customer review)</p>
          </div>
          <p className="text-base text-gray-500 mt-3">{details.description}</p>
          <div className="flex gap-4">
            <div className="w-52 flex items-center justify-between gap-4 p-3 text-gray-500 border">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-4 font-semibold text-sm">
                <button 
                onClick={()=>setBaseQty(baseQty===1 ? baseQty=1 :baseQty -1)}
                className="border h-5 text-lg font-normal flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                  -
                </button>
                <span>{baseQty}</span>
                <button
                onClick={()=>setBaseQty(baseQty +1)} className="border h-5 text-lg font-normal flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black">
                  +
                </button>
              </div>
            </div>
            <button
            onClick={()=>dispatch(addToCart({
              _id:details._id,
              title:details.title,
              image:details.image,
              price:details.price,
              quantity:1,
              description:details.description,
            }))& toast.success(`${details.title} is add`)
          }
              className="bg-black text-white py-3
            px-6 active:bg-gray-600"
            >
              add to cart
            </button>
            {/* end of the quantity increment and decrement portion */}
          </div>
          <p className="text-base text-gray-500">Category: <span className="font-medium capitalize">{details.category}</span></p>
        </div>
      </div>
      <ToastContainer
      position="top-left"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
      />
    </div>
  );
};

export default SingleProduct;
