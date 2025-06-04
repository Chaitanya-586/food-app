import React, { useContext, useEffect } from "react";
import { MdFastfood } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { LuShoppingBag } from "react-icons/lu";
import { dataContext } from "../context/UserContext";
import { food_items } from "../food";

function Nav() {
  let { input, setInput, cate, setCate, showCart, setShowCart } =
    useContext(dataContext);
  useEffect(() => {
    let newlist = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(input.toLowerCase())
    );
    setCate(newlist);
  }, [input]);
  return (
    <div className="w-full h-[100px] flex justify-between items-center px-5 md:px-8">
      <div className="w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl">
        <MdFastfood
          className="w-[30px] h-[30px] text-green-500"
          aria-label="Food Logo"
        />
      </div>
      <form
        className="w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 shadow-md md:w-[70%]"
        onSubmit={(e) => e.preventDefault()}
      >
        <IoSearch
          className="text-green-500 w-[20px] h-[20px]"
          aria-label="Search Icon"
        />
        <input
          type="text"
          placeholder="Search Items....."
          className="w-full outline-none text-[16px] md:text-[20px] p-2  rounded-md"
          onChange={(e) => setInput(e.target.value)}
          value={input}
          aria-label="Search Input"
        />
      </form> 
      <div
        onClick={() => setShowCart(true)}
        className="w-[60px] h-[60px] bg-white flex justify-center items-center 
  rounded-md shadow-xl relative cursor-pointer"
      >
        <LuShoppingBag
          className="w-[30px] h-[30px] text-green-500"
          aria-label="Shopping Bag"
        />
      </div>
    </div>
  );
}

export default Nav;
