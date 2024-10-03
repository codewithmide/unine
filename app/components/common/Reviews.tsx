"use client";

import { reviews } from "@/app/utils/reviews";
import { useRef } from "react";


const ReviewSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth; // Scroll by container's width
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.offsetWidth;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="w-[95vw] center lg:gap-6 gap-4">
      <button
        className=" p-4 bg-white rounded-full shadow-md"
        onClick={scrollLeft}
      >
        <svg
          className="w-4 h-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </button>

      <div className="overflow-hidden w-full">
      <div
          ref={sliderRef}
          className="flex space-x-4 w-[100%] overflow-x-scroll scrollbar-hide snap-x snap-mandatory"
        >
          {reviews.map((review) => (
            <div
              key={review.id}
              className="snap-center flex-none w-[100%] md:w-[49%] bg-white p-6 rounded-xl shadow-md"
            >
              <h2 className="lg:text-[26px] inter font-bold text-gray-900">
                {review.title}
              </h2>
              <p className="md:marker:max-w-[322px] my-4 text-grey lg:text-normal md:text-[14px] text-[12px]">{review.content}</p>
              <div className="w-full h-[1px] bg-grey my-3"></div>
              <div className="flex justify-between items-center lg:flex-row flex-col">
                <div className="flex items-center mt-4">
                  <img
                    src={review.image}
                    alt={review.name}
                    className="w-10 h-10 rounded-full mr-3"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">{review.name}</p>
                    <p className="text-sm text-gray-500">{review.duration}</p>
                  </div>
                </div>
                {/* Stars */}
                <div className="flex mt-3">
                  {Array.from({ length: 5 }, (_, index) => (
                    <svg
                      key={index}
                      className={`w-5 h-5 ${
                        index < review.rating ? "text-[#F4D356]" : "text-grey"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.518 4.674a1 1 0 00.95.69h4.908c.969 0 1.372 1.24.588 1.81l-3.974 2.888a1 1 0 00-.364 1.118l1.518 4.674c.3.921-.755 1.688-1.54 1.118L10 15.427l-3.974 2.888c-.785.57-1.84-.197-1.54-1.118l1.518-4.674a1 1 0 00-.364-1.118L1.666 10.1c-.784-.57-.38-1.81.588-1.81h4.908a1 1 0 00.95-.69l1.518-4.674z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="p-4 bg-white rounded-full shadow-md"
        onClick={scrollRight}
      >
        <svg
          className="w-4 h-4 text-gray-600"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </button>
    </div>
  );
};

export default ReviewSlider;
