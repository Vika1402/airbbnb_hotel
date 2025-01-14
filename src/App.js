import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Footer1 from "./components/Footer1";
import Footer from "./components/Footer";
import HotelDetailsPage from "./pages/HotelDetailsPage";

function App() {
  return (
    <div className=" md:mx-4">
      <Navbar />
      <Routes>
        <Route path="/" element=<Home /> />
        <Route path="/hoteldetails" element=<HotelDetailsPage /> />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
