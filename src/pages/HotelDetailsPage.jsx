import React from "react";
import HotelDetailsComponents from "../components/HotelDetail Components/HotelDetailsComponents";
import HDDetails from "../components/HotelDetail Components/HDDetails";
import AvailablityBar from "../components/HotelDetail Components/AvailablityBar";
import HDimages from "../components/HotelDetail Components/HDimages";

function HotelDetailsPage() {
  return (
    <div>
      <HotelDetailsComponents />
      <HDimages />
      <HDDetails />
      <AvailablityBar />
    </div>
  );
}

export default HotelDetailsPage;
