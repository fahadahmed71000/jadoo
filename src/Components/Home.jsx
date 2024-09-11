import React from "react";
import Page from "./Page";
import Cart from "./Cart";
import Top from "./Top";
import Easy from "./Easy";
import Section from "./Section";
import Slider from "react-slick";
import Last from "./Last";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Page />
      <Cart />
      <Top />
      <Easy />
      <Section />
      <Slider />
      <Last />
      <Footer />
    </div>
  );
};

export default Home;
