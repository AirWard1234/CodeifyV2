import React from "react";
import Navbar from "../conponents/Home/Navbar";
import Hero from "../conponents/Home/Hero";
import "./home.css";
import Desc from "../conponents/Home/Desc";

export function Home() {
  return (
    <>
      <div className="container-home">
        <Navbar />
        <Hero />
        <Desc />
      </div>
    </>
  );
}

export default Home;
