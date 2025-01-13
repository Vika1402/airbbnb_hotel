import React from "react";
import Navbar from "./Navbar";
import SearchBBar from "./SearchBBar";
import MenuTiles from "./MenuTiles";
import HotelCard from "./HotelCard";
import HotelCardPage from "./HotelCardPage";

function Home() {
  return (
    <>
      <div className="mt-32">
        <SearchBBar />
        <MenuTiles />
        <HotelCardPage />
      </div>
    </>
  );
}

export default Home;
