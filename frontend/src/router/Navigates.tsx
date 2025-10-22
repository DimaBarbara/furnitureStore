import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const HomePage = lazy(() => import("../pages/HomePage"));

const Navigates: React.FC = () => {
  return (
    <Router>
      <Header />
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
};

export default Navigates;
