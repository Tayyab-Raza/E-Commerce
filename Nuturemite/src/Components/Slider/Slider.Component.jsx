import React from "react";
import HeroSlider from "react-slick";
import "./Slider.css";
import { FaShippingFast, FaDollarSign, FaHeadset, FaLock } from "react-icons/fa";

const Slider = () => {
  const features = [
    {
      icon: <FaShippingFast size={40} className="text-green-500" />,
      title: "FREE SHIPPING",
      description: "Free shipping on all orders over ₹2000.",
    },
    {
      icon: <FaDollarSign size={40} className="text-green-500" />,
      title: "MONEY BACK GUARANTEE",
      description: "100% money back guarantee",
    },
    {
      icon: <FaHeadset size={40} className="text-green-500" />,
      title: "ONLINE SUPPORT 24/7",
      description: "Whatsapp 8919993233 For online support",
    },
    {
      icon: <FaLock size={40} className="text-green-500" />,
      title: "SECURE PAYMENT",
      description: "100% Secure payments in our portal",
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    speed: 3000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <>
    <div className="slider-container mx-auto py-10 relative">
      <HeroSlider {...settings}>
        <div className="slide flex pl-60 items-center justify-center pb-48 bg-gray-300">
          <h4 className="slide-text delay-1 flex pt-40 text-xl text-gray-600 items-start justify-start">
            Exclusive Product New Arrival
          </h4>
          <h1 className="slide-text delay-2 flex pt-4 text-5xl font-bold items-start justify-start">
            Organic Coffee
          </h1>
          <h2 className="slide-text delay-3 flex pt-4 text-4xl items-start justify-start">
            SPECIAL BLEND
          </h2>
          <p className="slide-text delay-4 flex pt-4 text-sm font-bold items-start justify-start">
            Fresh!{" "}
            <span className="text-lg pl-1 font-semibold text-gray-600">
              BREAKFAST PRODUCT ON SALE
            </span>
          </p>
          <h2 className="slide-text delay-5 flex pt-4 pl-4 text-6xl font-bold items-start justify-start">
            UP TO{" "}
            <span className="slide-text delay-6 flex pt-5 pl-2 text-8xl text-white font-bold items-start justify-start">
              50%
            </span>
          </h2>
        </div>
        <div className="slide flex place-content-end pr-60 items-end justify-end pb-48 bg-gray-200">
          <h4 className="slide-text delay-6 flex pt-40 text-xl text-gray-400 place-content-end items-start justify-end">
            Exclusive Product New Arrival
          </h4>
          <h1 className="slide-text delay-7 flex pt-4 text-5xl font-bold place-content-end items-start justify-end">
            Fit Low Carb
          </h1>
          <h2 className="slide-text delay-8 flex pt-4 text-4xl place-content-end items-start justify-end">
            CANDY BAR
          </h2>
          <p className="slide-text delay-9 flex pt-4 text-sm font-bold place-content-end items-start justify-end">
            Sugar-Free{" "}
            <span className="text-lg pl-1 font-semibold text-gray-400">
              BREAKFAST PRODUCT ON SALE
            </span>
          </p>
          <h2 className="slide-tex1 delay-10 flex pt-4 pl-4 text-6xl place-content-end font-bold items-start justify-end">
            UP TO{" "}
            <span className="slide-text delay-6 flex pt-5 pl-2 text-8xl text-white font-bold items-start justify-end">
              50%
            </span>
          </h2>
        </div>
      </HeroSlider>
    </div>


    <div className="flex justify-between py-8 px-16 bg-white gap-5">
    {features.map((feature, index) => (
      <div key={index} className="flex items-center space-x-4">
        <div className="icon">{feature.icon}</div>
        <div>
          <h4 className="font-medium text-sm">{feature.title}</h4>
          <p className="text-sm text-gray-600">{feature.description}</p>
        </div>
      </div>
    ))}
  </div>
  </>
  );
};

export default Slider;
