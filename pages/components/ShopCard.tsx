import React from "react";

type ProductCard = {
  image: string;
  title: string;
  onAddToCart: () => void;
};

const Card = ({ image, title, onAddToCart }: ProductCard) => (
  <div className=" p-4 w-130 hover:shadow-xl duration-500 cursor-pointer">
    <img src={image} alt={title} className="w-full h-full object-cover" />
    <h2 className="text-xl text-center">{title}</h2>
    <button onClick={onAddToCart} className="bg-[#586053] text-white w-full py-3 mt-10 cursor-pointer  hover:opacity-90">Add to Card</button>
  </div>
);

export default Card;
 
