"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"


import Link from "next/link";



const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="">
      <div>
        <div
          className={
            scrolled
              ? "scrolled  bg-white items-center  mx-auto md:left-[10rem]  rounded-md w-full md:w-3/4 z-50 top-5 md:top-10  fixed drop-shadow-lg pt-[1.3rem] pb-[1.3rem] bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"
              : "   z-50   top-5 md:top-10  md:left-[10rem] rounded-md w-full  md:w-3/4  fixed drop-shadow-lg  py-[1rem]   "
          }
        >
          <div className="px-2 flex justify-between items-center w-full h-full">
            <div className="flex items-center md:pl-6 realtive ">
             
              <Image src="/logo/main-logo.png" alt="logo" className="py-[1rem] absolute w-[5rem] md:w-[9rem] h-[7rem] md:h-[10rem]" width={200} height={50} />
             
            </div>
            <div className="hidden md:flex pr-4">
              <ul className="hidden md:flex ">
                <li className="md:ml-3 py-3  text-[19px] font-Poppins  px-6  border-5 border-sky-900 cursor-pointer text-gray-800  font-bold">
                  <Link href="/">Home</Link>
                </li>
               
                <li className="md:ml-3 py-3 px-6 border-5 border-sky-900  text-[19px] font-Poppins cursor-pointer text-gray-800 font-bold">
                  <Link href="/about-us">About Us</Link>
                </li>
                <li className="md:ml-3 py-3 px-6 border-5 border-sky-900  text-[19px] font-Poppins cursor-pointer text-gray-800 font-bold">
                  <Link href="/gallary">Contact Us</Link>
                </li>
                <li className="md:ml-3 py-2 px-6  border-5 border-sky-900 cursor-pointer text-[19px] font-Poppins text-slate-200 font-bold">
                  <a href="tel:+27 74 684 5729" className="lg:flex">
                  <Button variant="destructive"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 px-2">
  <path d="m4.922 6.752-1.067.534a7.52 7.52 0 0 0 4.859 4.86l.534-1.068a1 1 0 0 1 1.046-.542l2.858.44a1 1 0 0 1 .848.988V13a1 1 0 0 1-1 1h-2c-.709 0-1.4-.082-2.062-.238a9.012 9.012 0 0 1-6.7-6.7A9.024 9.024 0 0 1 2 5V3a1 1 0 0 1 1-1h1.036a1 1 0 0 1 .988.848l.44 2.858a1 1 0 0 1-.542 1.046Z" />
  <path d="M9.22 5.72a.75.75 0 0 0 1.06 1.06l2.22-2.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L9.22 5.72Z" />
</svg>
 Call Now +27 74 684 5729</Button>
            
          </a>
                </li>
              </ul>
              
            </div>
            <div className="md:hidden mr-4" onClick={handleClick}>
              {!nav ? (
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
             </svg>
             
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

              )}
            </div>
          </div>

          <ul
            className={
              !nav
                ? "hidden"
                : "scrolled absolute w-[250px] bg-white px-8 top-[5rem] right-[1rem] border-none rounded-md"
            }
          >
            <li className=" md:ml-3 py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-gray-800 font-bold">
            <Link href="/">Home</Link>
            </li>
            
            <li className="md:ml-3 py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-gray-800 font-bold">
            <Link href="/about-us">About Us</Link>
            </li>
            <li className="md:ml-3 py-3 px-6 font-Poppins border-5 border-sky-900 cursor-pointer text-gray-800 font-bold">
              <Link href="/meeting">Contact</Link>
            </li>

            <div className="flex flex-col my-4">
            <button
                type="button"
                className={`py-2 px-6  mr-[2rem]  hover:from-pink-500  font-bold bg-blue-400 font-poppins font-medium   text-[16px]  md:text-[20px] border-none rounded-md  text-gray-800   hover:scale-[1.1] transition-all duration-75  font-Poppins`}
              >
                <Link href="/contact"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4 px-2">
  <path d="m4.922 6.752-1.067.534a7.52 7.52 0 0 0 4.859 4.86l.534-1.068a1 1 0 0 1 1.046-.542l2.858.44a1 1 0 0 1 .848.988V13a1 1 0 0 1-1 1h-2c-.709 0-1.4-.082-2.062-.238a9.012 9.012 0 0 1-6.7-6.7A9.024 9.024 0 0 1 2 5V3a1 1 0 0 1 1-1h1.036a1 1 0 0 1 .988.848l.44 2.858a1 1 0 0 1-.542 1.046Z" />
  <path d="M9.22 5.72a.75.75 0 0 0 1.06 1.06l2.22-2.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L9.22 5.72Z" />
</svg>
 +27 74 684 5729</Link>
              </button>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;