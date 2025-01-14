import React, { use, useState } from "react";
import { FaCross, FaUser } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { FaAirbnb } from "react-icons/fa";
import { IoMenuOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [nav, setNav] = useState(false);

  const navigate = useNavigate();
  return (
    <div className="relative">
      <div className="flex justify-between fixed xl:px-60 right-0  w-full top-0 left-0 z-20 shadow-xl bg-white  items-center py-3 ">
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
            <li className="flex px-6 py-3  bg-slate-200 hover:bg-slate-300 rounded-full gap-3 items-center ">
              <span className="md:hidden text-sm">
                {nav ? (
                  <RxCross2 onClick={() => setNav(false)} className="duration-500 transition-all" />
                ) : (
                  <IoMenuOutline
                    onClick={() => setNav(true)}
                    className="text-gray-600 hover:text-red-600 duration-500 transition-all"
                  />
                )}
              </span>
              <span>
                <img
                  className="w-7 object-cover object-center rounded-full"
                  src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                  alt=""
                />
              </span>
            </li>
          </ul>
        </div>

        {nav ? (
          <div className="w-full h-60 bg-blue-200/90 mt-2 md:hidden fixed right-0 top-16 flex justify-center duration-500 transition-all ">
            <ul className="mt-6 flex flex-col gap-4">
              <li className="px-4 py-1 rounded-full bg-blue-300">Home</li>
              <li className="px-4 py-1 rounded-full bg-blue-300">Profile</li>
              <li className="px-4 py-1 rounded-full bg-blue-300">Contact</li>
              <li className="px-4 py-1 rounded-full bg-blue-300">More</li>
            </ul>
          </div>
        ) : (
          <span></span>
        )}
      </div>
    </div>
  );
}

export default Navbar;
