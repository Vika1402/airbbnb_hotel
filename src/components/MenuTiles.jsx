import React from "react";
import { MdFilterListAlt } from "react-icons/md";
import { SiClickup } from "react-icons/si";
import iconWithService from "../utility/iconsPack";
function MenuTiles() {
  return (
    <div className="flex flex-col lg:flex-row mt-24 py-6 items-center mx-20 xl:mx-60 justify-evenly ">
      <div className="flex md:w-[60%] carousel-item relative w-full   overflow-x-scroll items-center">
        <div className="flex   py-3 px-6">
          {iconWithService.map((item, index) => {
            return (
              <>
                <div className=" flex items-center justify-center text-center">
                  <span className="px-10 text-2xl md:text-3xl  text-gray-700">
                    <item.icon key={index} />
                    <span className=" text-sm line-clamp-1 ">
                      {item.service}
                    </span>
                  </span>
                </div>
              </>
            );
          })}
        </div>
      </div>

      <div className="flex  items-center flex-wrap md:flex-nowrap justify-center mb-4 gap-3  mt-4">
        <div className="border-2 px-8 py-4 rounded-xl flex text-center items-center gap-3">
          <span className="flex text-2xl">
            <MdFilterListAlt />
          </span>
          <span>Filters</span>
        </div>
        <div className="border px-8 py-4 text-nowrap rounded-xl flex items-center gap-5">
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
