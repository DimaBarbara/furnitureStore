import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar';
import Header from '../components/Header/Header';

const Home = lazy(() => import('./../pages/Home'));

const Navigates: React.FC = () => {
  return (
    <Router>
      <Header />
      <Navbar /> {/* Navbar всегда отображается */}
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default Navigates;
