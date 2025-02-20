import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../Components/CartItem";
import { toast, ToastContainer } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";

const Cart = () => {
  const productData = useSelector((state) => state.bazar.productData);
  const userInfo = useSelector((state) => state.bazar.userInfo);
  const [totalAmount, setTotalAmount] = useState("");
  const [payNow, setPayNow] = useState(false);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmount(price.toFixed(2));
  }, [productData]);
  const handleCheckOut = () => {
    if (userInfo) {
      setPayNow(true);
    } else {
      toast.error("please sign in to checkout");
    }
  };
  return (
    <div className="grid">
      <img
        className="w-full h-60 object-cover"
        src="https://png.pngtree.com/background/20230623/original/pngtree-blue-3d-geometric-background-with-room-for-text-or-product-a-picture-image_3988903.jpg"
        alt="cartImg"
      ></img>
      <div className="max-w-screen-xl mx-auto py-20 flex">
        <CartItem />
        <div className="w-1/3 bg-[#fafafa] py-6 px-4">
          <div className="flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
            <h2 className="text-2xl font-medium">Cart totals</h2>
            <p className="flex items-center gap-4 text-base">
              Subtotal <span>${totalAmount}</span>
            </p>
            
            <p className="flex items-center gap-4 text-base">
              Subtotal{" "}
              <span>
                this is the some general text about the cart page and the items
              </span>
            </p>
          </div>
          <p className="font-titleFont flex font-semibold justify-between mt-6">
            Total<span className="text-xl font-bold ">${totalAmount}</span>
          </p>
          <div className="w-full "></div>
          <button
            onClick={handleCheckOut}
            className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
          >
            proceed to checkout
          </button>
          {
            payNow && (
            <div className="flex w-full mt-6 items-center justify-center">
              <StripeCheckout
              stripeKey="pk_test_51PgjsWAGaeDxMoghPZm8xSWWJEkvoTSHJBeHRMYQMed6yrLyZYVAf0fZ1NuWLpWEYFr96wsl6LxCf8mTSkhlx4ZX00HMYlgWzq"
              name="Bazar online shopping"
              amount={totalAmount * 100}
              label="pay to bazar"
              description={`your payment amuont is $${totalAmount}`}
              // token={payment}
              email={userInfo.email}
              />
            </div>)
          }

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

export default Cart;
