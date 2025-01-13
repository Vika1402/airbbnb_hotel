import React from "react";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
function HotelCard() {
  return (
    <div>
      <div className="max-w-sm rounded-lg">
        <div className="rounded-lg bg-gray-700">
          <div className="absolute z-10  flex  items-center mt-4 mx-5">
            <div className="flex justify-between space-x-40">
              <span className="px-6 py-1 bg-white rounded-full shadow-sm text-sm text-nowrap">
                Guest Favourite
              </span>
              <span className="text-red-500 text-2xl">
                <FaHeart />
              </span>
            </div>
          </div>
          <img
            className="w-full h-full rounded-lg relative"
            src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIzNjE1MDExMTUxNzU5ODEyNw%3D%3D/original/19b0b33e-6a94-43c3-9ec7-48bfb79be8c8.jpeg?im_w=720&im_format=avif"
            alt=""
          />
        </div>
        <div className="flex justify-between mt-3 mx-1 pb-8 text-gray-800">
          <div>
            <p className="font-semibold text-lg">Dhaweli resort </p>
            <p className="font-thin ">77 kilometer away</p>
            <p>31 Jan -5 Feb</p>
            <p className="font-semibold">
              Rs.5454 <span className="font-normal">night</span>
            </p>
          </div>
          <div className="flex">
            <span>
              <FaStar />
            </span>
            <span>4.88</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotelCard;
