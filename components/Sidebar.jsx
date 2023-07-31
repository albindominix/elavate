import { GlobalContext } from "@/context/context";
import React, { useContext } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function Sidebar() {
  const { search, setCategory, navBar, setNavBar } = useContext(GlobalContext);

  return (
    <div
      className={`flex flex-col z-[99] w-[250px] fixed top-0 left-0 h-[150vh] bg-[#121212]  items-center ${
        !navBar ? "hidden" : ""
      } transition-all ease-in-out duration-300`}
    >
      <div className="flex w-full justify-end ">
        <button
          className="relative right-4 top-4 "
          onClick={() => setNavBar(!navBar)}
        >
          <AiOutlineClose className="text-white font-bold text-3xl cursor-pointer" />
        </button>
      </div>
      <div className="flex flex-col m-8 w-full items-center gap-3">
        <div className="cursor-pointer w-[70%] px-5 py-3 bg-white rounded-md text-center font-medium">
          <div
            onClick={() => {
              setCategory("all");
            }}
          >
            All
          </div>
        </div>
        <div className="cursor-pointer w-[70%] px-5 py-3 bg-white rounded-md text-center font-medium">
          <div
            onClick={() => {
              setCategory("electronics");
            }}
          >
            Electronics
          </div>
        </div>
        <div className="cursor-pointer w-[70%] px-5 py-3 bg-white rounded-md text-center font-medium">
          <div
            onClick={() => {
              setCategory("men's clothing");
            }}
          >
            Men's
          </div>
        </div>
        <div className="cursor-pointer w-[70%] px-5 py-3 bg-white rounded-md text-center font-medium">
          <div
            onClick={() => {
              setCategory("women's clothing");
            }}
          >
            Women's
          </div>
        </div>
        <div className="cursor-pointer w-[70%] px-5 py-3 bg-white rounded-md text-center font-medium">
          <div
            onClick={() => {
              setCategory("jewelery");
            }}
          >
            Jewellery
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
