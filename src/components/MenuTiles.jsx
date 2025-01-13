import React from "react";
import { MdFilterListAlt } from "react-icons/md";
import { SiClickup } from "react-icons/si";
import iconWithService from "../utility/iconsPack";
function MenuTiles() {
  return (
    <div className="flex flex-col lg:flex-row mt-24 py-6 items-center justify-evenly ">
      <div className="flex md:w-[60%] carousel-item relative w-full   overflow-x-scroll items-center">
        <div className="flex border-b border-t py-3 px-6">
          {iconWithService.map((item, index) => {
            return (
              <>
                <div className=" flex items-center justify-center text-center">
                  <span className="px-6 xl:px-8 text-2xl md:text-xl  text-gray-700">
                    <item.icon key={index} />
                    <span className="text-nowrap text-sm line-clamp-2 ">
                      {item.service}
                    </span>
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="flex  items-center flex-wrap md:flex-nowrap  mb-4 gap-3 ml-4">
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
