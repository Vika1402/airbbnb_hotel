import React from "react";
import { FaUser } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaAirbnb } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div className="flex justify-between fixed w-full top-0  bg-white z-20 items-center  py-4 ">
      <div className="flex text-red-500 font-semibold items-center space-x-2 text-xl mx-8">
        <span className="sm:block">
          <FaAirbnb />
        </span>
        <span className="md:block">airbnb</span>
      </div>
      <div>
        <ul className="space-x-6 hidden lg:flex">
          <li>Stays</li>
          <li className="text-gray-600">Experience</li>
        </ul>
      </div>
      <div className="mx-12">
        <ul className="flex space-x-3 items-center">
          <li className="border border-gray-100 rounded-full px-4 py-1 hover:border-gray-300 hidden md:block">
            Airbnb your home
          </li>
          <li>
            <CiGlobe />{" "}
          </li>
          <li className="flex px-4 py-3  bg-slate-300 rounded-full gap-3 items-center ">
            <span>
              <IoMenuOutline />
            </span>
            <span>
              <FaUser className="bg-gray-400 p-1 text-2xl rounded-full" />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
