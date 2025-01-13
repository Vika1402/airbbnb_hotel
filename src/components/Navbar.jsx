import React from "react";
import { FaUser } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaAirbnb } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between fixed w-full top-0  bg-white z-20 items-center  py-4 ">
      <div
        onClick={() => {
          {
            navigate("/");
            window.scrollTo(0, 0);
          }
        }}
        className="flex text-red-500 font-semibold items-center space-x-2 text-2xl md:text-xl mx-8"
      >
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
      <div className="mr-12">
        <ul className="flex space-x-3 items-center">
          <li className="border border-gray-100 rounded-full px-4 py-1 hover:border-gray-300 hidden md:block">
            Airbnb your home
          </li>
          <li>
            <CiGlobe className="text-gray-600 hover:text-red-600" />
          </li>
          <li className="flex px-4 py-3  bg-slate-200 hover:bg-slate-300 rounded-full gap-3 items-center ">
            <span>
              <IoMenuOutline  className="text-gray-600 hover:text-red-600"/>
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
