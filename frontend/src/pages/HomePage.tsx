import React from "react";
import Hero from "../components/hero/Hero";
import CategoryGrid from "../components/categoryGrid/CategoryGrid";

const HomePage: React.FC = () => {
  return (
    <div className="">
      <Hero />
      <CategoryGrid />
    </div>
  );
};

export default HomePage;
