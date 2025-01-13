import React from "react";
import HotelCard from "./HotelCard";
import { useNavigate } from "react-router-dom";

function HotelCardPage() {
  const navigate = useNavigate();
  const hotelCards = Array(30).fill(null);
  return (
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {hotelCards.map((_, index) => {
          return (
            <div
              onClick={() => {
                navigate("/hoteldetails"); // Navigate to the root or your desired route
                window.scrollTo(0, 0); // Scroll to the top of the page
              }}
            >
              <HotelCard key={index} />
            </div>
          );
        })}
      </div>
       <div className="mt-6 text-center mb-10">
        <div className="text-xl font-semibold">
          Continue Exploring amezing views
        </div>
        <br />
        <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg">
          Show More
        </button>
      </div>
    </div>
  );
}

export default HotelCardPage;
