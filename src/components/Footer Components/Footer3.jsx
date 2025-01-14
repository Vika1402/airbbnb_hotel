import React from "react";

function Footer3() {
  return (
    <div className="flex flex-col lg:flex-row justify-between text-gray-600 flex-wrap ">
      <hr className="md:hidden" />
      <ul className="flex flex-col gap-2 py-6">
        <li className="font-bold">Support</li>
        <li>Help Centre</li>
        <li>AirCover</li>
        <li>Anti-discrimination</li>
        <li>Disability support</li>
        <li>Cancellation options</li>
        <li>Report neighbourhood concern</li>
      </ul>
      <hr className="md:hidden" />

      <ul className="flex flex-col gap-2 py-6">
        <li className="font-bold">Hosting</li>
        <li>Airbnb your home</li>
        <li>AirCover for Hosts</li>
        <li>Hosting resources</li>
        <li>Community forum</li>
        <li>Hosting responsibly</li>
        <li>Join a free Hosting class</li>
        <li>Find a co‑host</li>
      </ul>
      <hr className="md:hidden" />
      <ul className="flex flex-col gap-2 py-6">
        <li className="font-bold">Airbnb</li>
        <li>Newsroom</li>
        <li>New features</li>
        <li>Careers</li>
        <li>Investors</li>
        <li>Airbnb.org emergency stays</li>
      </ul>
      <hr className="md:hidden" />
    </div>
  );
}

export default Footer3;
