import React from "react";

import SearchBBar from "./SearchBBar";
import MenuTiles from "./MenuTiles";

import HotelCardPage from "./HotelCardPage";

function Home() {
  return (
    <>
      <div className="md:mt-32">
        <SearchBBar />
        <MenuTiles />
        <HotelCardPage />
      </div>
    </>
  );
}

export default Home;
