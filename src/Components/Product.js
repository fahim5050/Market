import React from "react";
import ProductsCard from "./ProductsCard";

const Product = ({products}) => {
  
  return (
    <div className="py-10  ">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center ">
          Shoping every day
        </h1>
        <span className="w-24 h-[3px] bg-black"></span>
        <p className="text-center max-w-[700px] text-gray-600">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites
        </p>
      </div>
      {/* end of the product heading section */}
      <div className="max-w-screen-xl mx-3 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 ">
        {
          products.map((item)=>(
            <ProductsCard key={item._id} product={item} />
          ))
        }
      </div>
      {/* end of the product card section */}
    </div>
  );
};

export default Product;
