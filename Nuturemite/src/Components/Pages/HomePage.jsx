import React from "react";
import Slider from "../Slider/Slider.Component";
import Card1 from "../Card/Card1.Component";
import Card2 from "../Card/Card2.Component";
import Card3 from "../Card/Card3.Component";
import Navbar from "../Navbar/Navbar.Component";
import Footer from "../Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Slider />
      <Card1 />
      <Card2 />
      <Card3 />
      <Footer />
    </>
  );
};

export default HomePage;
