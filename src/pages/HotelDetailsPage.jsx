import React from "react";
import { FaUpload } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { RiErrorWarningFill } from "react-icons/ri";
function HotelDetailsPage() {
  return (
    <div className="mt-24">
      <div className="flex flex-col justify-between mx-6 items-start  md:flex-row">
        <p className="text-2xl font-semibold text-wrap">
          Sky Villa-Luxury lakeview Bungalow in City Center
        </p>
        <div className="flex gap-5 items-center">
          <span className="flex gap-2 underline">
            <FaUpload /> Share
          </span>
          <span className="flex gap-2 underline items-center">
            <FaRegHeart /> Save
          </span>
        </div>
      </div>

      <div className="w-full flex gap-2 flex-col lg:flex-row px-10 mt-6">
        <div className=" w-full lg:w-[50%]  flex h-[500px] overflow-y-hidden">
          <img
            className="w-full h-full rounded-xl lg:rounded-none lg:rounded-l-xl "
            src="https://a0.muscache.com/im/pictures/miso/Hosting-1004233391696977387/original/b9e79464-7f9a-47b9-bfe3-d12f466a91b3.jpeg?im_w=960&im_format=avif"
            alt=""
          />
        </div>
        <div className="flex h-[500px] gap-1">
          <div className="h-full w-[100%] lg:w-[50%] flex-col space-y-1">
            <div className="h-[50%] w-full ">
              {" "}
              <img
                className="w-full h-full"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-1004233391696977387/original/4fe20c57-3e2f-493d-a2c9-ee646cefe724.jpeg?im_w=480&im_format=avif"
                alt=""
              />
            </div>
            <div className="h-[50%] w-full ">
              {" "}
              <img
                className="w-full h-full"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-1004233391696977387/original/3637febb-9b9c-4b05-91c4-0139a5815732.jpeg?im_w=480&im_format=avif"
                alt=""
              />
            </div>
          </div>
          <div className="h-full w-[50%]  flex-col hidden lg:block space-y-1">
            <div className="h-[50%] w-full">
              {" "}
              <img
                className="w-full h-full rounded-tr-xl"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-1004233391696977387/original/46741902-bcc8-4363-b23d-f6e297c81469.jpeg?im_w=480&im_format=avif"
                alt=""
              />
            </div>
            <div className="h-[50%] w-full ">
              {" "}
              <img
                className="w-full h-full rounded-br-xl"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-1004233391696977387/original/1a43d80e-5082-4bd4-b9e0-dc7f5cefefc9.jpeg?im_w=240&im_format=avif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full px-12 text-2xl font-semibold mt-6 flex justify-between relative">
        <div className="flex gap-2 flex-col">
          <div>
            <p>Entire villa in Girnare, India</p>
            <p className="text-xl">
              12 guests .4 bedrooms .4 beds .5 bathrooms
            </p>
          </div>

          <p className="flex items-center gap-3">
            <span>
              <FaStar />
            </span>
            <span className="underline">2 reviews</span>
          </p>
        </div>
        <div className="flex gap-2 bg-white flex-col fixed text-sm right-10 h-96 w-96 shadow-xl border rounded-xl">
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
      <div>
        
      </div>

      {/* <div className="flex flex-col justify-center lg:flex-row gap-4">
        <img
          className=" w-full lg:w-[50%] 2xl:w-[40%] h-full"
          src="https://a0.muscache.com/im/pictures/miso/Hosting-983628068535189241/original/6fb13419-22cb-4378-bacc-22fa484869e2.jpeg?im_w=960&im_format=avif"
          alt=""
        />

        <div className="lg:flex  flex-col justify-center items-center mt-3 lg:mt-0">
          <div className="flex gap-3 overflow-hidden">
            <img
              className="w-96 2xl:w-[40%]"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-983628068535189241/original/6fb13419-22cb-4378-bacc-22fa484869e2.jpeg?im_w=960&im_format=avif"
              alt=""
            />
            <img
              className="w-96 2xl:w-[40%] hidden xl:block"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-983628068535189241/original/6fb13419-22cb-4378-bacc-22fa484869e2.jpeg?im_w=960&im_format=avif"
              alt=""
            />
          </div>
          <div className=" gap-3 mt-3 hidden lg:flex">
            <img
              className="w-96 2xl:w-[40%]"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-983628068535189241/original/6fb13419-22cb-4378-bacc-22fa484869e2.jpeg?im_w=960&im_format=avif"
              alt=""
            />
            <img
              className="w-96 2xl:w-[40%] hidden xl:block relative"
              src="https://a0.muscache.com/im/pictures/miso/Hosting-983628068535189241/original/6fb13419-22cb-4378-bacc-22fa484869e2.jpeg?im_w=960&im_format=avif"
              alt=""
            />
          </div>
        </div>
      </div> */}
      {/* <div className="w-full flex   lg:justify-end items-end  mt-6 overflow-hidden">
        <div className="px-8 mb-10 rounded-full text-nowrap absolute text-white bg-black/60 py-2 shadow-xl w-52rounded-xl mt-4 hover:scale-105">
          Explore More Images
        </div>
      </div> */}
    </div>
  );
}

export default HotelDetailsPage;
