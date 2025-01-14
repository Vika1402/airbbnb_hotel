import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";

function AvailablityBar() {
  return (
    <div className="hidden lg:block">
      {" "}
      <div className="flex gap-2 lg:top-[700px] bg-white flex-col fixed right-20 text-sm xl:right-96 xl:mr-10 h-96 w-96 shadow-xl border rounded-xl">
        <div>
          <div>
            <div className="flex-col justify-between mt-10 mx-10">
              <div className="flex justify-between rounded-t-xl border-2 border-black  text-lg bg-red-100">
                <div className="py-4 overflow-hidden mx-2 ">
                  <p className="text-pink-900">check in</p>
                  <input
                    type="text"
                    value="11/12/2025"
                    className="bg-transparent outline-none py-2 text-lg"
                  />
                </div>
                <div className="w-0.5 bg-red-950"></div>
                <div className="py-4 px-2 overflow-hidden ">
                  <p className="text-pink-900">check out</p>
                  <input
                    type="text"
                    value="11/12/2025"
                    className="bg-transparent outline-none py-2 text-lg"
                  />
                </div>
              </div>
              <div className="overflow-hidden flex border-2 border-t-0 items-center border-black py-2 px-1 rounded-b-xl">
                <div className="flex-col">
                  <p>Guest</p>
                  <input
                    type="text"
                    value="11/12/2025"
                    className="bg-transparent outline-none py-2 text-lg"
                  />
                </div>
                <div>
                  <FaAngleDown />
                </div>
              </div>
              <p className="gap-2 text-red-500 mt-2 flex py-1 items-center justify-center">
                <span>
                  <RiErrorWarningFill />
                </span>
                <span>those date are not available</span>
              </p>
              <div className="py-6 overflow-hidden items-center flex justify-center w-full">
                <button className="py-3 bg-red-500 hover:bg-red-600 w-full rounded-lg text-white text-xl">
                  Changes Dates
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailablityBar;
