import React, { useState, useEffect } from "react";
import { BiSearch, BiPlus } from "react-icons/bi";

const DashNav = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`flex items-center justify-between p-4 bg-slate-100 text-black shadow-md h-max bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 ${
        isMobile ? "flex-col" : "flex-row"
      }`}
    >
      <div className="justify-start flex items-start gap-1">
          <img src="/logo.png" alt="" className="w-10 h-10" />
          <div
            class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
        
            Food Recipe
          </div>
        </div>

      {!isMobile && (
        <div className="flex items-center space-x-4 flex-1 mx-4 gap-3">
          <div className="relative flex-1 mx-52">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-100"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <span className="text-xl">
                <BiSearch />
              </span>
            </button>
          </div>
          <div className="mr-5">
          <a href="/" className="hover:text-gray-300 hover:underline font-sans text-base font-medium text-inherit">
            Home
          </a>
          </div>
          <div className="hover:text-gray-900 bg-gray-300 py-2 px-2 rounded-lg hover:underline font-sans text-base font-medium text-inherit ml-5">
          <button type="submit" id="btn" className="flex">
            Add Recipe<BiPlus className="mt-1"/>
          </button>
          </div>
        </div>
      )}

      {!isMobile && (
        <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded-2xl ml-5">
          Logout
        </button>
      )}

      {isMobile && (
        <div className="items-center w-full mt-4">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 pr-10 border border-gray-300 rounded-lg bg-gray-100 text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <span className="text-xl"><BiSearch /></span>
            </button>
            </div>
            <div className="flex my-5 mx-6 items-center gap-3">
            <div className="mx-3 my-3">
          <a href="/" className="hover:text-gray-300 hover:underline font-sans text-base font-sm text-inherit">
            Home
          </a>
          </div>
          <div className="hover:text-gray-900 bg-gray-300 py-2 px-2 rounded-lg hover:underline font-sans text-base font-sm text-inherit ml-2">
          <button type="submit" id="btn" className="flex">
            Add Recipe<BiPlus className="mt-1"/>
          </button>
          </div>
            <button className="bg-red-600 hover:bg-red-700 text-white py-1 px-2 rounded-2xl ml-3">
          Logout
        </button>
        </div>
        </div>
      )}
    </nav>
  );
};

export default DashNav;
