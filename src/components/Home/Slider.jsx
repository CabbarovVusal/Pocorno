import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "../../../src/index.css";
import { FaAngleRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const SliderHome = () => {
  const [sliderRef] = useKeenSlider({
    mode: "free",
    slides: { perView: 2, spacing: 0 },
    breakpoints: {
      "(max-width: 768px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(max-width: 550px)": {
        slides: { perView: 1.5, spacing: 10 },
      },
      "(max-width: 350px)": {
        slides: { perView: 1.1, spacing: 10 },
      },
    },
  });

  return (
    <div className="">
      <div ref={sliderRef} className="keen-slider ">
        <div className={`card1 flex flex-col  relative  keen-slider__slide`}>
          <NavLink to="/shop">
            <div
              className={` bg-[#fff] max-h-[200px] max-w-[256px] border-[12px] border-transparent hover:border-[#F1AB6E] hover:bg-[#E7730D] rounded-tr-[90px] max-[500px]:rounded-tr-[60px] rounded-bl-[90px] max-[500px]:rounded-bl-[60px] duration-300`}
            >
              <img
                className=" relative  mx-auto  scale-90 bottom-8 max-[550px]:bottom-10  max-md:w-[250px]"
                src="https://www.popcornopolis.com/wp-content/uploads/2021/09/30520_ConesMiniC40_ClassicStripe_Zebra_PLP_Item_Silo_01-295x295.png"
                alt=""
              />
            </div>
            <div className="text-[#613223]  max-lg:w-full my-[50px] h-[57.6px] cursor-pointer ">
              <span className="my-4 text-2xl max-[1200px]:text-[18px] ">
                <span className="inline-block w-[90%] group text-[#613223] leading-[1.2] text-[24px]   max-lg:text-[18px] max-md:text-[14px] pb-5 capitalize">
                  <span className=" max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2">
                    Zebra® Mini Cone
                  </span>
                  <span className="capitalize inline-flex items-center ">
                    <span className="group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline">
                      {" "}
                      Popcorn
                    </span>{" "}
                    <FaAngleRight className="  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] " />
                  </span>
                </span>
              </span>
              <div className="flex flex-col relative bottom-0 ">
                <span className="font-sofia font-bold">Pack of 40</span>
                <span className="text-[19px]">$89.99</span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className={`card1 flex flex-col  relative  keen-slider__slide`}>
          <NavLink to="/shop">
            <div
              className={` bg-[#fff]  max-h-[200px] max-w-[256px] border-[12px] border-transparent hover:border-[#EE7D85] hover:bg-[#E22733] rounded-tr-[90px] max-[500px]:rounded-tr-[60px] rounded-bl-[90px] max-[500px]:rounded-bl-[60px] duration-300`}
            >
              <img
                className=" relative   mx-auto  scale-90 bottom-8 max-[550px]:bottom-10  max-md:w-[250px]"
                src="https://www.popcornopolis.com/wp-content/uploads/MicrosoftTeams-image-27-295x295.png"
                alt=""
              />
            </div>
            <div className="text-[#613223]  max-lg:w-full my-[50px] h-[57.6px] cursor-pointer ">
              <span className="inline-block w-[90%] group text-[#613223] leading-[1.2] text-[24px]   max-lg:text-[18px] max-md:text-[14px] pb-5 capitalize">
                <span className=" max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2">
                  Double Drizzle Popcorn
                </span>
                <span className="capitalize inline-flex items-center ">
                  <span className="group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline">
                    {" "}
                    Bag
                  </span>{" "}
                  <FaAngleRight className="  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] " />
                </span>
              </span>
              <div className="flex flex-col relative bottom-0 ">
                <span className="font-sofia font-bold">Pack of 6</span>
                <span className="text-[19px]">$23.99</span>
              </div>
            </div>
          </NavLink>
        </div>
        <div className={`card1 flex flex-col  relative  keen-slider__slide`}>
          <NavLink to="/shop">
            <div
              className={` bg-[#fff] max-h-[200px] max-w-[256px] border-[12px] border-transparent hover:border-[#EE7D85] hover:bg-[#E22733] rounded-tr-[90px] max-[500px]:rounded-tr-[60px] rounded-bl-[90px] max-[500px]:rounded-bl-[60px] duration-300`}
            >
              <img
                className=" relative  mx-auto  scale-90 bottom-8 max-[550px]:bottom-10  max-md:w-[250px]"
                src="https://www.popcornopolis.com/wp-content/uploads/31592_ConesRegC06_ClassicStripe_CaramelCorn_PLP_Item_Silo_01-295x295.png"
                alt=""
              />
            </div>
            <div className="text-[#613223]  max-lg:w-full my-[50px] h-[57.6px] cursor-pointer ">
              <span className="inline-block w-[80%] group text-[#613223] leading-[1.2] text-[24px]   max-lg:text-[18px] max-md:text-[14px] pb-5 capitalize">
                <span className=" max-[1200px]:text-[18px] max-lg:text-[16px] duration-300  pr-2">
                  Caramel Corn Tall
                </span>
                <span className="capitalize inline-flex items-center ">
                  <span className="group-hover:mr-2 max-[1200px]:text-[18px] max-lg:text-[16px] duration-300 inline">
                    {" "}
                    Cone
                  </span>{" "}
                  <FaAngleRight className="  p-1 inline  text-white rounded-full bg-red-600  ml-[4px]  text-[20px] max-[1200px]:text-[18px] max-lg:text-[16px] " />
                </span>
              </span>
              <div className="flex flex-col relative bottom-0">
                <span className="font-sofia font-bold">Pack of 12</span>
                <span className="text-[19px]">$71.99</span>
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};
export default SliderHome;
