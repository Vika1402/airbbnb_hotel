import React from "react";
import { FaStar } from "react-icons/fa";

function HDDetails() {
  return (
    <div>
      <div className="w-full px-10 xl:px-60 text-2xl font-semibold mt-6 flex-col justify-between relative">
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

        <div className="flex flex-col text-lg font-medium max-w-xl">
          <div>
            <hr />
            <div className="flex gap-4 py-8">
              <span>
                <img
                  className="w-12"
                  src="https://cdn-icons-png.flaticon.com/512/219/219969.png"
                  alt=""
                />
              </span>
              <span>
                <p>Hosted by Vikas</p>
                <p>2 year hosting</p>
              </span>
            </div>
            <hr />
          </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default HDDetails;
