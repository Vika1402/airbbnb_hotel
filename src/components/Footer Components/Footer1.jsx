import React, { useState } from "react";

function Footer1() {
  const [service, setService] = useState([
    "polpuer",

    "  Art&Love",
    "   Outdoore",
    "    Mountain",
    " Beach",
    " SunShine",
    "Categories",
    "Fun ",
    "   Limited Party",
    "   New Year",
  ]);
  return (
    <div>
      <div className="flex mt-6 justify-center flex-col bottom-0">
        <div className="font-semibold text-2xl">
          Inspiration for future getaways
        </div>
        <ul className="flex md:space-x-6 flex-wrap gap-2">
          {service.map((item) => (
            <li className="px-4 py-2 bg-gray-600 text-white rounded-full mt-2">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Footer1;
