import React from "react";
import { MdFilterListAlt } from "react-icons/md";
import { SiClickup } from "react-icons/si";
import iconWithService from "../utility/iconsPack";
function MenuTiles() {
  return (
    <div className="flex flex-col lg:flex-row mt-10 py-6 items-center w-full justify-between ">
      <div className="flex md:w-[60%] carousel-item relative w-full   overflow-x-scroll items-center">
        <div className="flex border-b border-t py-3 px-6">
          {iconWithService.map((item, index) => {
            return (
              <>
                <div className=" flex items-center justify-center text-center">
                  <span className="px-6 xl:px-8  text-gray-700">
                    <item.icon key={index} size={24} />
                    <span className="text-nowrap text-sm ">{item.service}</span>
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="flex items-center flex-wrap  mb-4 gap-3 ml-4">
        <div className="w-full border px-8 py-4 rounded-xl flex items-center gap-3">
          <span className="flex text-2xl">
            <MdFilterListAlt />
          </span>
          <span>Filters</span>
        </div>
        <div className="border px-12 py-4 text-nowrap rounded-xl flex items-center gap-5">
          <span>Display total before taxes</span>
          <span>
            <SiClickup />
          </span>
        </div>
      </div>
    </div>
  );
}

export default MenuTiles;
