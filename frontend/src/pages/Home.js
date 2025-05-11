import React from "react";
import Banner from "../components/Home/Banner";
import Featured from "../components/Home/Featured";
import Testimonial from "../components/Home/Testimonial";
import Faq from "../components/Home/Faq";



const Home = () => {
  return (
    <div className="min-h-[1800-px]">
      <Banner />
      {/* <HouseList /> */}
      <Featured />
      <Testimonial />
      <Faq />
    </div>
  );
};

export default Home;
