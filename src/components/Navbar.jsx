import React from "react";
import { FaUser } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaAirbnb } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="flex justify-between fixed w-full  top-0  bg-white z-30 items-center py-3 ">
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
        <span className="md:block">Firbnb</span>
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
              <IoMenuOutline className="text-gray-600 hover:text-red-600" />
            </span>
            <span>
              <img
                className="w-6 rounded-full h-6"
                src="data:image/jpeg;base64,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"
                alt=""
              />
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
