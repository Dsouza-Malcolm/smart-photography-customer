import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import PhotographyAboutUs from "../components/PhotographyAboutUs";
import OurTeamSlider from "../components/PhotographerTeam";
import Footer from "../components/Footer";
import AboutPhoto from "../components/About_photo";
import AboutVideo from "../components/About_video";
import { Box, Typography } from "@mui/material";
import logo3 from "../asset/banner.png";
import { axiosApi } from "../services/api/api";

function About() {
  const [aboutUs, setAboutUs] = useState(null);

  useEffect(() => {
    const fetchAboutUs = async () => {
      try {
        const response = await axiosApi.get("/aboutus/about-us");
        const latestAboutUs = response.data.data[0];
        setAboutUs(latestAboutUs);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAboutUs();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${logo3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px", // Adjust height as needed
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          fontFamily: "Sedan, sans-serif !important",
        }}
      >
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography variant="h6" gutterBottom>
          <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
            Home
          </Link>{" "}
          {">>"} About
        </Typography>
      </Box>

      <PhotographyAboutUs />

      <AboutPhoto
        aboutPhoto={
          aboutUs
            ? {
                sectionTitle: aboutUs.title_1,
                description: aboutUs.content_2,
                imageUrl: aboutUs.image,
              }
            : {}
        }
      />
      <OurTeamSlider />
      <AboutVideo />
      <Footer />
    </Box>
  );
}

export default About;
