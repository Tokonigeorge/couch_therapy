import React from "react";

const CarouselItem = ({ heading, text, image }) => {
  return (
    <>
      <p className="text-right text-sm font-bold">SKIP</p>
      <div className="flex flex-col items-center">
        <h2 className="font-bold text-lg my-4">{heading}</h2>
        <p className="text-center text-gray-400 leading-relaxed mb-4">{text}</p>
        <img
          src={image}
          alt="black and white"
          className="h-56 object-scale-down"
        />
      </div>
    </>
  );
};

export default CarouselItem;
