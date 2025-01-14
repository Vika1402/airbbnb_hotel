import React from "react";

function HDimages() {
  return (
    <div>
      <div className="w-full flex gap-2 flex-col px-3 lg:flex-row xl:px-60  mt-6 justify-start ">
        <div className="lg:w-[50%]  flex lg:h-[500px] overflow-y-hidden">
          <img
            className="w-full h-full rounded-xl lg:rounded-none lg:rounded-l-xl "
            src="https://a0.muscache.com/im/pictures/miso/Hosting-1004233391696977387/original/b9e79464-7f9a-47b9-bfe3-d12f466a91b3.jpeg?im_w=960&im_format=avif"
            alt=""
          />
        </div>
        <div className="flex lg:h-[500px] gap-1">
          <div className="h-full w-[100%] lg:w-[50%] flex-col space-y-1">
            <div className="h-[50%] w-full ">
              {" "}
              <img
                className="w-full h-full object-cover rounded-xl lg:rounded-none"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-1004233391696977387/original/4fe20c57-3e2f-493d-a2c9-ee646cefe724.jpeg?im_w=480&im_format=avif"
                alt=""
              />
            </div>
            <div className="h-[50%] w-full ">
              {" "}
              <img
                className="w-full h-full object-cover rounded-xl lg:rounded-none"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-1004233391696977387/original/3637febb-9b9c-4b05-91c4-0139a5815732.jpeg?im_w=480&im_format=avif"
                alt=""
              />
            </div>
          </div>
          <div className="h-full w-[50%]  flex-col hidden lg:block space-y-1">
            <div className="h-[50%] w-full">
              {" "}
              <img
                className="w-full h-full rounded-tr-xl"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-1004233391696977387/original/46741902-bcc8-4363-b23d-f6e297c81469.jpeg?im_w=480&im_format=avif"
                alt=""
              />
            </div>
            <div className="h-[50%] w-full ">
              {" "}
              <img
                className="w-full h-full rounded-br-xl"
                src="https://a0.muscache.com/im/pictures/miso/Hosting-1004233391696977387/original/1a43d80e-5082-4bd4-b9e0-dc7f5cefefc9.jpeg?im_w=240&im_format=avif"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HDimages;
