import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./App.css";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Album from "./pages/Album";
import AlbumDel from "./pages/AlbumDel";
import Enquiry from "./pages/Enquiry";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Reel from "./pages/Reel";
import ServiceDet from "./pages/ServiceDet";
import Services from "./pages/Services";
import Video from "./pages/Video";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/servicedetails/:serviceId" element={<ServiceDet />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/album" element={<Album />} />
        <Route path="/album/:albumId" element={<AlbumDel />} />
        <Route path="/reel" element={<Reel />} />
        <Route path="/video" element={<Video />} />
        <Route path="/enquiry" element={<Enquiry />} />
      </Routes>
    </Router>
  );
}

export default App;
