import React from "react";
import Nav from "../components/nav/Navbar";
import Hero from "../components/hero/Hero";
import Card from "../components/card/Card";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="hero-section">
        <Hero />
      </div>
      <Card />
    </div>
  );
};

export default Home;
