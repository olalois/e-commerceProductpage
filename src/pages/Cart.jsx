import React from "react";
import { useCart } from "../context/CartContext.jsx";

const Cart = () => {
  const { cart, removeFromCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="p-5 sm:p-10 text-center">
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-600">
          Your cart is empty 😔
        </h2>
      </div>
    );
  }

  return (
    <div className="p-5 sm:p-10 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Your Cart</h2>

      <div className="flex flex-col gap-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white border rounded-lg p-4 shadow-sm"
          >
            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md"
            />

            {/* Product Details */}
            <div className="flex-1">
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-gray-600">
                ${item.price} × {item.quantity}
              </p>
              <p className="font-bold mt-1 text-black">
                Total: ${item.total}
              </p>
            </div>

            {/* Remove Button */}
            <button
              onClick={() => removeFromCart(item.id)}
              className="text-red-600 font-semibold hover:text-red-800 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
