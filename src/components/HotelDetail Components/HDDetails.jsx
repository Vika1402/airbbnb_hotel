import React from "react";
import { FaStar } from "react-icons/fa";
import { PiFan } from "react-icons/pi";
import { FaFire } from "react-icons/fa";
import { IoMdPhotos } from "react-icons/io";
import { FaAngleRight } from "react-icons/fa6";

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
                <p className=" font-light">2 year hosting</p>
              </span>
            </div>
            <hr />
          </div>
          <div>
            <div className="flex gap-4 py-8 text-xl">
              <span className="text-3xl">
                <PiFan />
              </span>
              <span>
                <p>Designed for staying cool</p>
                <p className=" font-light">
                  Beat the heat with the A/C and ceiling fan.
                </p>
              </span>
            </div>
            <div className="flex gap-4 py-8 text-xl">
              <span className="text-3xl">
                <FaFire />
              </span>
              <span>
                <p>Outdoor entertainment</p>
                <p className=" font-light">
                  The pool and outdoor seating are great for summer trips.
                </p>
              </span>
            </div>
            <div className="flex gap-4 py-8 text-xl">
              <span className="text-3xl">
                <IoMdPhotos />
              </span>
              <span>
                <p> Mountain view</p>
                <p className=" font-light">
                  Soak up the view during your stay.
                </p>
              </span>
            </div>
            <hr />
          </div>

          <div>
            <hr />
            <div className="flex gap-4 py-8">
              <span>
                <p className="font-normal">
                  Nestled in the lush uplands of Nashik, Cascading Valleys is a
                  tranquil villa that gifts splendid views just like its name.
                  As one heads to the villa with its stone-laden steps, you get
                  a glimpse at the villa and the majestic mountains in its
                  backdrop. Enter the villa and you sight the shimmering
                  swimming pool that also has a seating area. The bedrooms are
                  coated in soothing tones, with two of them having{" "}
                </p>
                <p className=" font-light underline flex items-center ">
                  <span> Show more </span>
                  <FaAngleRight className="text-xl" />{" "}
                </p>
              </span>
            </div>
            <hr />
          </div>

          <div>
            <hr />
            <div className="carousel rounded-box w-full h-full mt-6 mb-6">
              <div className="carousel-item w-1/2 flex flex-col">
                <div>
                  <img
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-1004233391696977387/original/ee638b09-039a-4b9d-beab-32ade83ae997.jpeg?im_w=1200&im_format=avif"
                    alt="Drink"
                  />
                </div>

                <span>Bedroom 2 </span>
                <span>1 king bed</span>
              </div>

              <div className="carousel-item w-1/2 flex flex-col">
                <div>
                  <img
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-1004233391696977387/original/ee638b09-039a-4b9d-beab-32ade83ae997.jpeg?im_w=1200&im_format=avif"
                    alt="Drink"
                  />
                </div>

                <span>Swiminng pool </span>
                <span>for couples</span>
              </div>
              <div className="carousel-item w-1/2 flex flex-col">
                <div>
                  <img
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-1004233391696977387/original/ee638b09-039a-4b9d-beab-32ade83ae997.jpeg?im_w=1200&im_format=avif"
                    alt="Drink"
                  />
                </div>

                <span>Bedroom 2 </span>
                <span>1 king bed</span>
              </div>
            </div>
          </div>

          <div>
            <hr />
            <div className="flex gap-4 py-8 flex-col font-normal">
              <span className="text-3xl">What this place offers</span>
              <span>
                <ul className="flex flex-col gap-6">
                  <li>Mountain view</li>
                  <li>Wifi</li>
                  <li>Dedicated workspace</li>
                  <li>Free parking on premises – 5 spaces</li>
                  <li>
                    Private outdoor pool – available all year, open specific
                    hours
                  </li>
                  <del>Carbon monoxide alarm</del>
                  <del>Smoke alarm</del>
                </ul>
              </span>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default HDDetails;
