import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import More from "./pages/More";
import Career from "./pages/Career";
import Story from "./pages/Story";
import Store from "./pages/Store";
// import Solutions from "./pages/Solutions";
import Sidebar from "./components/Sidebar";
import Studio from "./pages/Studio";
import Blogs from "./pages/Blogs";
// import Sidebar from "./components/Sidebar";

const App: React.FC = () => {
  return (
    
    <Router>
      <div className="min-h-screen relative">
        <Navbar />
        <div className="absolute top-12 left-0   z-10 shadow-md">
          <Sidebar /> {/* Floating Sidebar */}
        </div>
        <div className=" ">
          {" "}
          {/* Content area with margin-left to avoid overlap */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Studio" element={<Studio />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/store" element={<Store />} />
            <Route path="/story" element={<Story />} />
            <Route path="/career" element={<Career />} />
            <Route path="/more" element={<More />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
