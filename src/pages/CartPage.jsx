import React from "react";
import { useCart } from "../context/CartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-5 sm:p-10 w-full max-w-4xl mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6">Your Cart</h2>

      {cart.length === 0 ? (
        <p className="text-gray-500 text-lg">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 border rounded-lg shadow-sm bg-white"
            >
              {/* Product Name */}
              <h3 className="font-semibold text-lg">{item.name}</h3>

              {/* Price Breakdown */}
              <p className="text-gray-600 text-sm sm:text-base mt-2 sm:mt-0">
                ${item.price} × {item.quantity}  
                <span className="font-bold text-black"> = ${item.total}</span>
              </p>

              {/* Remove Button */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="mt-3 sm:mt-0 text-red-500 hover:text-red-700 text-sm font-semibold"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
