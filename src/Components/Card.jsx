import React from "react";
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { AddItem } from "../Components/redux/cartSlice"; 

function Card({ name, image, id, price, type }) {
  const dispatch = useDispatch();  // <-- inside component

  return (
    <div
      className="w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 
    shadow-lg hover:border-2 border-green-300"
    >
      <div className="w-full h-[60%] overflow-hidden rounded-lg">
        <img src={image} alt={name} className="object-cover w-full h-full" />
      </div>
      <div className="text-2xl font-semibold">{name}</div>
      <div className="w-full flex justify-between items-center">
        <div className="text-lg font-bold text-green-500">Rs {price}/-</div>
        <div
          className="flex justify-center items-center gap-2 text-lg font-semibold 
        text-green-500"
        >
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span className={type === "veg" ? "text-green-600" : "text-red-600"}>
            {type === "veg" ? "Veg" : "Non-Veg"}
          </span>
        </div>
      </div>

      <button
        className="w-full p-3 bg-green-700 rounded-lg font-bold text-white hover:bg-green-400 hover:text-red-500 
        transition-all "
        onClick={() => dispatch(AddItem({ id, name, price, image, type, qty: 1 }))}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default Card;

