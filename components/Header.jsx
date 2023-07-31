import React, { useContext, useEffect, useState } from "react";
import Wrapper from "./Wrapper";
import {
  AiOutlineCaretUp,
  AiOutlineCaretDown,
  AiOutlineMenu,
  AiOutlineShoppingCart,
} from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import SearchField from "./SearchField";
import { GlobalContext } from "@/context/context";

const Header = () => {
  // State to manage the open/closed state of the dropdown menu
  const [isOpen, setIsOpen] = useState(false);

  const {  setCategory, setNavBar } = useContext(GlobalContext);

  // State to keep track of the selected value in the dropdown menu
  const [value, setValue] = useState("Categories");

  // List of categories to be displayed in the dropdown menu
  const categories = [
    { id: 1, value: "All", category: "all" },
    { id: 2, value: "Electronics", category: "electronics" },
    { id: 3, value: "Men's", category: "men's clothing" },
    { id: 4, value: "Women's", category: "women's clothing" },
    { id: 5, value: "Jewellery", category: "jewelery" },
  ];

  // Close the dropdown menu when the selected value changes
  useEffect(() => {
    setIsOpen(false);
  }, [value]);

  return (
    // Header container with flex layout and background image
    <div className={`w-full h-[50px] md:h-[80px] flex items-center justify-between bg-cover`}>
      {/* Wrapper component to manage layout within the header */}
      <Wrapper className="h-60px flex gap-10 justify-between-center max-[630px]:flex-wrap mt-8">
        {/* Left section of the header */}
        <div className="flex lg:gap-10 items-center gap-6 flex-1">
          {/* Hamburger menu icon with a click handler to toggle sidebar */}
          <AiOutlineMenu className="font-bold text-5xl cursor-pointer" onClick={() => setNavBar((prev) => !prev)} />

          {/* Dropdown menu for categories */}
          <div className="relative min-w-[160px] flex-col items-center hidden min-[900px]:block px-3 rounded-md bg-slate-900 text-white">
            {/* Dropdown button with a click handler to open/close the dropdown */}
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="flex gap-2 px-2 py-1 w-full items-center rounded-lg justify-between font-medium text-lg tracking-wider border-4 border-transparent active:border-white duration-300 active-white"
            >
              {value}
              {/* Caret icon to indicate the dropdown direction */}
              {!isOpen ? <AiOutlineCaretDown className="h-4" /> : <AiOutlineCaretUp className="h-4" />}
            </button>

            {/* Dropdown menu options */}
            {isOpen && (
              <div className="bg-slate-900 absolute top-14 flex flex-col items-start rounded-lg px-4 py-3 w-full z-10">
                {categories.map((item, index) => (
                  <div key={index} className="cursor-pointer w-full">
                    {/* Clickable category options */}
                    <div
                      onClick={() => {
                        // Set the selected category and update the dropdown button text
                        setCategory(item.category);
                        setValue(item.value);
                      }}
                    >
                      {item.value}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* SearchField component for searching products */}
          <SearchField />
        </div>

        {/* Right section of the header */}
        <div className="flex gap-10 max-[400px]:gap-6 items-center  max-[630px]:w-full max-[630px]:justify-between">
          {/* Language selector */}
          <div className="py-2 px-3 bg-white rounded-md flex items-center max-[320px]:hidden">
            <div className="font-semibold">English</div>
            <AiOutlineCaretDown className="mx-1" />
          </div>

          {/* User cart and profile icons */}
          <div className="flex gap-6 max-[400px]:gap-3">
            {/* Cart icon */}
            <div className="flex items-center gap-2">
              <AiOutlineShoppingCart className="text-white text-2xl font-semibold" />
              <div className="text-white font-semibold">CART</div>
            </div>
            {/* Profile icon */}
            <div className="flex items-center gap-2">
              <BsFillPersonFill className="text-white text-2xl font-semibold" />
              <div className="text-white font-semibold">PROFILE</div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Header;
