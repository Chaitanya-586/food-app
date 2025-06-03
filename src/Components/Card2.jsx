import React from 'react';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { DecrementQty, IncrementQty, RemoveItem } from '../Components/redux/cartSlice';

function Card2({ name, id, price, image, qty }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-[120px] p-2 shadow-md rounded-md flex justify-between bg-white">
      <div className="flex gap-4 w-[65%]">
        <div className="w-[100px] h-full overflow-hidden rounded-md">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-between h-full">
          <h2 className="text-gray-700 font-semibold text-lg">{name}</h2>
          <div className="flex items-center rounded-lg overflow-hidden shadow border border-green-400 w-[105px]">
            <button
              onClick={() => dispatch(DecrementQty(id))}
              className="w-8 h-8 bg-white text-green-500 hover:bg-gray-200 flex items-center justify-center"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <div className="w-10 h-8 bg-slate-200 flex items-center justify-center text-green-500">
              {qty}
            </div>
            <button
              onClick={() => dispatch(IncrementQty(id))}
              className="w-8 h-8 bg-white text-green-500 hover:bg-gray-200 flex items-center justify-center"
              aria-label="Increase quantity"
              
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Price & Delete */}
      <div className="flex flex-col justify-between items-end">
        <span className="text-green-500 font-semibold text-lg">
          Rs {price}/-
        </span>
        <RiDeleteBin6Line
          className="text-red-500 hover:text-red-700 text-2xl cursor-pointer transition"
          onClick={() => dispatch(RemoveItem(id))}
          title="Remove item"
        />
      </div>
    </div>
  );
}

export default Card2;

