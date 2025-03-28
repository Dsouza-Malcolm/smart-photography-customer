import React from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import News from "../components/News";
import PhotoAlbums from "../components/PhotoAlbums";
import OurTeamSlider from "../components/PhotographerTeam";
import PhotographyAboutUs from "../components/PhotographyAboutUs";
import PhotographyServices from "../components/PhotographyServices";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <div>
      <Hero />
      <PhotographyServices />
      <PhotoAlbums />
      <PhotographyAboutUs />
      <OurTeamSlider />
      <Portfolio />
      <Testimonial />
      <News />
      <Footer />
    </div>
  );
}

export default Home;
