import React, { useState } from "react";

const ProductGallery = () => {
  const images = [
    "public/images/image-product-1.jpg",
    "public/images/image-product-2.jpg",
    "public/images/image-product-3.jpg",
    "public/images/image-product-4.jpg",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="w-full max-w-md mx-auto relative">
      {/* MAIN IMAGE */}
      <div className="relative">
        <img
          src={images[currentIndex]}
          alt="Product"
          className="w-full rounded-xl cursor-pointer hover:opacity-90"
          onClick={() => setLightboxOpen(true)}
        />

        {/* MOBILE LEFT/RIGHT BUTTONS */}
        <button
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white w-10 h-10 rounded-full grid place-items-center shadow md:hidden"
          onClick={prevImage}
        >
          ‹
        </button>

        <button
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white w-10 h-10 rounded-full grid place-items-center shadow md:hidden"
          onClick={nextImage}
        >
          ›
        </button>
      </div>

      {/* THUMBNAILS (hidden on mobile) */}
      <div className="hidden md:flex gap-4 mt-4 justify-center">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            onClick={() => setCurrentIndex(index)}
            className={`w-20 h-20 rounded-xl cursor-pointer border-2 ${
              currentIndex === index
                ? "border-orange-500 opacity-100"
                : "border-transparent opacity-60"
            } hover:opacity-100`}
          />
        ))}
      </div>

      {/* LIGHTBOX OVERLAY */}
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="relative">
            {/* Close Button */}
            <button
              className="absolute -top-10 right-0 text-white text-3xl"
              onClick={() => setLightboxOpen(false)}
            >
              ×
            </button>

            {/* Lightbox Image */}
            <img
              src={images[currentIndex]}
              className="w-[450px] rounded-xl shadow-lg"
            />

            {/* Prev Button */}
            <button
              className="absolute top-1/2 -left-10 bg-white w-10 h-10 rounded-full grid place-items-center shadow"
              onClick={prevImage}
            >
              ‹
            </button>

            {/* Next Button */}
            <button
              className="absolute top-1/2 -right-10 bg-white w-10 h-10 rounded-full grid place-items-center shadow"
              onClick={nextImage}
            >
              ›
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductGallery;
