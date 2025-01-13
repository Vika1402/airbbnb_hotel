import React from "react";

function Footer1() {
  return (
    <div>
      <div className="mt-6 text-center mb-10">
        <div className="text-xl font-semibold">
          Continue Exploring amezing views
        </div>
        <br />
        <button className="px-6 py-3 bg-gray-800 hover:bg-gray-900 text-white rounded-lg">
          Show More
        </button>
      </div>
      <div className="font-semibold text-2xl">
        Inspiration for future getaways
      </div>

      <div className="flex mt-6">
        <ul className="flex space-x-8">
          <li>Populer</li>
          <li>Art&Love</li>
          <li>Outdoore</li>
          <li>Mountain</li>
          <li>Beach</li>
          <li>SunShine</li>
          <li>Categories</li>
          <li>Fun </li>
          <li>Limited Party</li>
          <li>New Year</li>
        </ul>
      </div>
      
    </div>
  );
}

export default Footer1;
