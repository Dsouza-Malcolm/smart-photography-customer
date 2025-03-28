import React from "react";

import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import logo3 from "../asset/banner.png";
// import logo4 from '../asset/image.png';
// import logo5 from '../asset/image2.png';
// import { default as logo1, default as logo2 } from '../asset/image3.png';
import EnquiryComponent from "../components/EnquiryComponent";
import Footer from "../components/Footer";

// const services = [
//     {
//         title: "Wedding Photography",
//         image: logo4
//     },
//     {
//         title: "Pet Photography",
//         image: logo1
//     },
//     {
//         title: "Pre-Wedding Photography",
//         image: logo2
//     },
//     {
//         title: "Family Photography",
//         image: logo5
//     },
//     {
//         title: "Couples Photography",
//         image: logo4
//     },
//     {
//         title: "Birthday Photography",
//         image: logo2
//     },
//     {
//         title: "Birthday Photography",
//         image: logo2
//     },
//     {
//         title: "Birthday Photography",
//         image: logo2
//     },
//     {
//         title: "Birthday Photography",
//         image: logo2
//     },
// ];

function Enquiry() {
  return (
    <>
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
            fontFamily: "Sedan, sans-serif",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{ fontFamily: "Sedan, sans-serif" }}
          >
            Enquiry Now
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: "Sedan, sans-serif" }}
          >
            <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
              Home
            </Link>{" "}
            {">>"} Enquiry
          </Typography>
        </Box>

        <Container maxWidth={false}>
          <Container>
            <EnquiryComponent />
          </Container>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Enquiry;
