import { FaUpload } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

function HotelDetailsComponents() {
  return (
    <div>
      <div className="">
        <div className="flex flex-col justify-between mt-24 mx-4 xl:mx-64 xl:pr-10  items-start  md:flex-row">
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
      </div>
    </div>
  );
}

export default HotelDetailsComponents;
