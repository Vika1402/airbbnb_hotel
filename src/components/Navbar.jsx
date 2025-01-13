import React from "react";
import { FaUser } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaAirbnb } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";

function Navbar() {
  return (
    <div>
      <div className="w-full flex justify-between mt-6 text-lg items-center ">
        <div className="flex text-red-500 font-semibold items-center space-x-2 text-xl">
          <span className=" sm:block">
            <FaAirbnb />
          </span>{" "}
          <span className="hidden md:block">airbnb</span>
        </div>
        <div>
          <ul className="space-x-6 hidden lg:flex">
            <li>Stays</li>
            <li className="text-gray-600">Experience</li>
          </ul>
        </div>
        <div className="">
          <ul className="flex space-x-6 items-center">
            <li className="border border-gray-100 rounded-full px-4 py-1 hover:border-gray-300 hidden md:block">
              Airbnb your home
            </li>
            <li>
              <CiGlobe />{" "}
            </li>
            <li className="flex px-4 py-3  bg-slate-300 rounded-full gap-3 items-center right-0 ">
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
    </div>
  );
}

export default Navbar;
