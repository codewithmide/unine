"use client";

import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section
      className="text-white flex items-center gap-24 flex-col w-full lg:min-h-[900px] bg-cover bg-center bg-black lg:pb-0 pb-20"
      style={{ backgroundImage: `url('/images/bg-image.png')` }}
    >
      <Navbar />
      <div className="between md:flex-row sm:flex-col w-[90%] h-full">
        <div className="flex flex-col md:gap-10 gap-6">
          <h1 className="inter md:text-left sm:text-center lg:text-xxl md:text-xl text-[30px] leading-tight lg:leading-[70px] max-w-[750px] font-bold">
            More Payment Options Better than Cash
          </h1>
          <p className="max-w-[560px] lg:leading-[40px] lg:text-[24px] text-[14px] font-medium text-lightGrey md:text-left sm:text-center">
            With a UNINE you can access the more than 240 million customers out
            there as well as offering management tools, options, and payment
            methods.
          </p>
          <div className="flex items-center gap-5 w-full md:justify-start sm:justify-center">
            <div><img src="/images/appstore.png" alt="appstore" /></div>
            <div><img src="/images/googleplay.png" alt="googleplay" /></div>
          </div>
          <div className="flex items-center md:justify-start sm:justify-center">
            <img src="/icons/rate.png" alt="rate" />
          </div>
        </div>
        <div className="md:pt-0 pt-10">
          <img src="/svgs/phone.svg" alt="phone" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
