import React from "react";
import { CiSearch } from "react-icons/ci";
function SearchBBar() {
  return (
    <div className="w-full hidden md:block">
      <div>
        <form
          className="transition-all duration-500 hover:bg-gray-200  justify-center flex py-1.5 text-sm rounded-full shadow-md hover:shadow-none border-t-2 lg:text-xl p-2  xl:mx-40"
          action=""
        >
          <div className=" flex justify-between items-center gap-2 w-full">
            <div className=" flex flex-col items-start  rounded-full hover:bg-white px-8 xl:px-32 py-5 hover:shadow-md">
              <p>Where</p>
              <input
                type="text"
                placeholder="select destination"
                className="bg-transparent w-full outline-none text-sm mr-2"
              />
            </div>

            <hr className="bg-gray-400 h-12 w-0.5" />

            <div className=" flex flex-col items-start  rounded-full hover:bg-white px-6 lg:px-8 py-5 hover:shadow-md">
              <p>Check in</p>
              <input
                type="text"
                placeholder="Add details"
                className="bg-transparent w-full outline-none text-sm mr-2"
              />
            </div>
            <hr className="bg-gray-400 h-12 w-0.5" />

            <div className=" flex flex-col items-start  rounded-full hover:bg-white px-6 lg:px-8  py-5 hover:shadow-md">
              <p>Ckeck Out</p>
              <input
                type="text"
                placeholder="Add date"
                className="bg-transparent w-full outline-none text-sm mr-2"
              />
            </div>
            <hr className="bg-gray-400 h-12 w-0.5" />
            <div className=" flex  items-center rounded-full hover:bg-white px-6 lg:px-8 py-5 hover:shadow-md">
              <div>
                <p>Who</p>
                <input
                  type="text"
                  placeholder="Add guest"
                  className="bg-transparent w-full outline-none text-sm mr-2"
                />
              </div>
              <div className="flex hover:bg-red-600 bg-red-500 px-3 py-3 rounded-full text-white items-center gap-3 hover:shadow-md">
                <span className="font-bold text-xl">
                  <CiSearch />
                </span>
              
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBBar;
