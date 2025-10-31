import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/footer/Footer";

const Layout: React.FC = () => {
  return (
    <div className="container flex flex-col min-h-screen">
      <Header />
      <Navbar />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
