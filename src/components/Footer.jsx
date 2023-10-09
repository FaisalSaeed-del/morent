import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#FFF]">
      <div className="container">
        <div className="flex flex-wrap  justify-between py-2 px-10">
          <div className="flex flex-col gap-y-4">
            <h1 className="text-primary text-[32px] font-bold -tracking-[0.96px]">
              MORENT
            </h1>
            <p className="text-footer text-base font-medium max-w-[292px]">
              Our vision is to provide convenience and help increase your sales
              business.
            </p>
          </div>
          <div className="flex md:mt-0 mt-6 flex-wrap gap-14">
            <div className="flex flex-col gap-6">
              <p className="text-[#1A202C] text-xl font-semibold">About</p>
              <ul className="flex flex-col gap-4">
                <li>How it Works</li>
                <li>Featured</li>
                <li>Partnership</li>
                <li>Business Rekations</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-[#1A202C] text-xl font-semibold">Community</p>
              <ul className="flex flex-col gap-4">
                <li>Events</li>
                <li>Podcast</li>
                <li>Blog</li>
                <li>Inivite a friend</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6">
              <p className="text-[#1A202C] text-xl font-semibold">Social</p>
              <ul className="flex flex-col gap-4">
                <li>Discord</li>
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Facebook</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="px-8 mb-12">
          <span className=" text-center border-t border-borderColor hidden md:block mt-6"></span>
        </div>
        <div className="flex justify-between items-center px-6">
            <p className="text-[1A202C] text-base font-semibold">©2022 MORENT. All rights reserved</p>
           <div className="flex gap-10">
           <a href="">Privacy & Policy</a>
            <a href="">Terms & Condition</a>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
