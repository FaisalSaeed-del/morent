import React from "react";
import DropDown from "./DropDown";
import Swap from "../../assets/images/swap.svg";

const ResponsivePickandDrop = () => {
  return (
    <div className="bg-[#F6F7F9]">
      <div className="container">
        <div className="flex flex-col items-center gap-10">
          <div className="bg-[#FFF] rounded-[10px] p-6 w-full">
            <div>
              <input
                className="border-[1px] rounde-full"
                type="radio"
                name=""
                id=""
              />
              <label htmlFor="">Pick-up</label>
              <div className="flex gap-4">
                <div>
                  <h3 className="text-[#1A202C] px-4 text-base font-bold tracking-[-0.32px]">
                    Location
                  </h3>
                  <DropDown />
                </div>
                <div>
                  <h3 className="text-[#1A202C] px-4 text-base font-bold tracking-[-0.32px]">
                    Date
                  </h3>
                  <DropDown />
                </div>
                <div>
                  <h3 className="text-[#1A202C] px-4 text-base font-bold tracking-[-0.32px]">
                    Time
                  </h3>
                  <DropDown />
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary px-5 rounded-[6px]">
            <img
              className="h-[60px] w-[60px] "
              src={Swap}
              alt=""
            />
          </div>
          <div className="bg-[#FFF] rounded-[10px] p-6 w-full">
            <div>
              <input
                className="border-[1px] rounde-full"
                type="radio"
                name=""
                id=""
              />
              <label htmlFor="">Drop</label>
              <div className="flex gap-4">
                <div>
                  <h3 className="text-[#1A202C] px-4 text-base font-bold tracking-[-0.32px]">
                    Location
                  </h3>
                  <DropDown />
                </div>
                <div>
                  <h3 className="text-[#1A202C] px-4 text-base font-bold tracking-[-0.32px]">
                    Date
                  </h3>
                  <DropDown />
                </div>
                <div>
                  <h3 className="text-[#1A202C] px-4 text-base font-bold tracking-[-0.32px]">
                    Time
                  </h3>
                  <DropDown />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsivePickandDrop;
