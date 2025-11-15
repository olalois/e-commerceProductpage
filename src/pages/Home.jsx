import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useCart } from "../context/CartContext.jsx";
import ProductGallery from "../components/ProductGallery.jsx";

const Home = () => {
  const [quantity, setQuantity] = React.useState(0);
  const { addToCart } = useCart();

  const handleAdd = () => setQuantity(quantity + 1);
  const handleSubtract = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    const product = {
      id: 1,
      name: "Fall Limited Edition Sneakers",
      price: 125,
      quantity,
      total: quantity * 125
    };
    addToCart(product);
    alert("Added to cart!");
  };

  return (
    <div className="flex flex-col md:flex-row p-5 md:p-30 pt-25 w-full md:w-5/6 mx-auto gap-8 ">
      
      {/* Product Gallery */}
      <div className="container1 w-full md:w-1/2 rounded-lg">
        <ProductGallery />
      </div>
      
      {/* Product Details */}
      <div className="container2 w-full md:w-1/2 flex flex-col gap-4 md:gap-6 px-0 md:px-10">
        <span className="text-xs font-bold text-gray-500">SNEAKER COMPANY</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-2 md:pb-4">
          Fall Limited Edition Sneakers
        </h2>
        <p className="text-gray-600 text-justify text-sm sm:text-base">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they will withstand everything
          the weather can offer.
        </p>

        <div className="mt-2 flex md:flex-col gap-4 md:gap-1">
          <span className="flex items-center gap-3">
            <h3 className="text-xl sm:text-2xl font-bold">$125.00</h3>
            <h4 className="bg-black text-white px-2 py-1 rounded-md text-xs font-bold">
              50%
            </h4>
          </span>
          <h4 className="text-gray-400 line-through mt-1 sm:mt-2">$250.00</h4>
        </div>

        {/* Quantity and Add to Cart */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mt-4">
          <div className="flex items-center gap-0">
            <button
              onClick={handleSubtract}
              className="md:px-3 px-10 py-1 bg-gray-300 text-orange-500 rounded text-lg font-bold"
            >
              −
            </button>

            <span className="text-lg font-medium bg-gray-300 text-black rounded md:px-3 px-11 py-1">
              {quantity}
            </span>

            <button
              onClick={handleAdd}
              className="md:px-3 px-10 py-1 bg-gray-300 text-orange-500 rounded text-lg font-bold"
            >
              +
            </button>
          </div>

          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-orange-600 text-white md:px-6 py-2 px-20 rounded-md hover:bg-orange-700"
          >
            <i className="fa-solid fa-cart-shopping"></i>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
