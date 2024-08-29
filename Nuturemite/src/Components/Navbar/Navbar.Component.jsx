import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prevState) => !prevState);

  return (
    <nav class="sticky top-0 z-10 block w-full max-w-full px-4 py-2 text-black bg-white border-none focus:outline-none rounded-none h-max lg:px-8 lg:py-4">
      <div class="flex items-center justify-between text-blue-gray-900">
        <div className="justify-start flex items-start gap-1">
          <img src="/logo.png" alt="" className="w-30 h-20" />
        </div>
        <div className="justify-start flex items-end ">
          <a
            href="/"
            class="my-4 ml-64 block cursor-pointer p-1 font-sans text-base font-medium leading-relaxed text-inherit antialiased hover:bg-blue-600 hover:text-white hover:rounded-md"
          >
            Home
          </a>
          <a
            href="/"
            class="my-4 ml-6 block cursor-pointer p-1 font-sans text-base font-medium leading-relaxed text-inherit antialiased hover:bg-blue-600 hover:text-white hover:rounded-md"
          >
            Blog
          </a>
          <a
            href="/"
            class="my-4 ml-6 block cursor-pointer p-1 font-sans text-base font-medium leading-relaxed text-inherit antialiased hover:bg-blue-600 hover:text-white hover:rounded-md"
          >
            Shop
          </a>
          <a
            href="/"
            class="my-4 ml-6 block cursor-pointer p-1 font-sans text-base font-medium leading-relaxed text-inherit antialiased hover:bg-blue-600 hover:text-white hover:rounded-md"
          >
            Cart
          </a>
          <a
            href="/"
            class="my-4 ml-6 block cursor-pointer p-1 font-sans text-base font-medium leading-relaxed text-inherit antialiased hover:bg-blue-600 hover:text-white hover:rounded-md"
          >
            AboutUs
          </a>
          <button
            class="my-4 ml-6 block cursor-pointer p-1 font-sans text-base font-medium leading-relaxed text-inherit antialiased hover:bg-blue-600 hover:text-white hover:rounded-md disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button"
          >
            <a href="/login">Log In</a>
          </button>
          <button
            class="my-4 ml-6 block cursor-pointer p-1 font-sans text-base font-medium leading-relaxed text-inherit antialiased hover:bg-blue-600 hover:text-white hover:rounded-md hover:shadow-gray-900/20 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:inline-block"
            type="button"
          >
            <a href="/signup">Sign Up</a>
          </button>
        </div>
        <div>
          <ul className="flex gap-2 ml-10 mt-28">
            <li>
              <a href="#">
                <FaFacebook />
              </a>
            </li>
            <li class="ftco-animate">
              <a href="#">
                <FaTwitter />
              </a>
            </li>
            <li class="ftco-animate">
              <a href="#">
                <FaYoutube />
              </a>
            </li>
            <li class="ftco-animate">
              <a href="#">
                <FaInstagram />
              </a>
            </li>
            <li class="ftco-animate">
              <a href="#">
                <FaLinkedin />
              </a>
            </li>
          </ul>
          </div>

        <div class="flex items-center gap-2 ">
          {isMenuOpen ? (
            <div className="hidden" />
          ) : (
            <div class="mr-4  w-full flex items-center gap-3 bg-white px-3 py-1 rounded-md ">
              <BiSearch />
              <input
                type="text"
                id="text"
                placeholder="Search recipe"
                className="w-full bg-transparent border-none focus:outline-none"
              />
            </div>
          )}

          {/* Hamburger Button */}
          <button
            className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
            type="button"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <AiOutlineClose className="w-6 h-6" />
            ) : (
              <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </span>
            )}
          </button>
        </div>

        {/* Display login and signup buttons on small screens */}
        <div
          className={`lg:flex items-center gap-2 ${
            isMenuOpen ? "flex" : "hidden"
          } lg:hidden`}
        >
          <a
            href="/login"
            className="px-4 py-2 text-sm font-semibold text-gray-900 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all"
          >
            Log In
          </a>
          <a
            href="/signup"
            className="px-4 py-2 text-sm font-semibold text-white bg-gradient-to-tr from-gray-900 to-gray-800 rounded-lg hover:opacity-80 transition-all"
          >
            Sign Up
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
