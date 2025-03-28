import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { motion } from "framer-motion"; // Import framer-motion
import React, { useEffect, useState } from "react";
import logo3 from "../asset/about/male-photographer-looking-camera-screen 1.png";
import logo4 from "../asset/about/material-symbols-light_camera.png";
import logo5 from "../asset/why choose us/image.png";
import { axiosApi } from "../services/api/api";

const cardVariants = {
  initial: { opacity: 0, y: 30 }, // Start with invisible and slightly below
  animate: { opacity: 1, y: 0 }, // Move to original position when in view
  exit: { opacity: 0, y: -30 }, // Exit with opacity and move upwards when out of view
  transition: { duration: 0.6, ease: "easeOut" },
};

function PhotographyAboutUs() {
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
    <>
      <Container maxWidth={false} sx={{ backgroundColor: "#F4F4F4" }}>
        <Container>
          {/* About Us Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            whileExit="exit"
            variants={cardVariants}
            viewport={{ once: false }}
          >
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6} sx={{ ml: 5 }}>
                <Box sx={{ position: "relative", width: "100%" }}>
                  {/* Background Logo */}
                  <Box
                    component="img"
                    src={logo4}
                    alt="Background Logo"
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: -90,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      zIndex: 1, // Background
                      transition: "transform 0.5s ease", // Smooth transition
                      "&:hover": {
                        transform: "rotate(360deg)", // Spins on hover
                      },
                    }}
                  />
                  {/* Front Logo */}
                  <Box
                    component="img"
                    src={logo3}
                    alt="Photographer"
                    sx={{
                      position: "relative",
                      zIndex: 2, // Front
                      width: "80%",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
              </Grid>

              <Grid item xs={12} md={5} sx={{ marginBottom: { xs: 5, md: 0 } }}>
                <Typography
                  variant="h6"
                  color="error"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ marginBottom: 2 }}
                >
                  About Us
                </Typography>
                <Typography
                  variant="h5"
                  fontWeight="bold"
                  gutterBottom
                  sx={{ marginBottom: 2 }}
                >
                  {aboutUs?.title}
                  {/* "Smart Photography captures All of Your beautiful memories." */}
                </Typography>
                <Typography
                  variant="body1"
                  color="text.secondary"
                  paragraph
                  sx={{ marginBottom: 2 }}
                >
                  {/* Smart Photography, one of the best wedding candid
                  photographers and wedding cinematographers based in Tamil
                  Nadu, with over 15 years of expertise, is your trusted partner
                  for capturing the essence of your special moments through
                  professional wedding photography, candid wedding photography,
                  and wedding videography. */}
                  {aboutUs?.content}
                </Typography>
                <Button
                  variant="contained"
                  color="error"
                  sx={{ borderRadius: "10px" }}
                >
                  Book Now
                </Button>
              </Grid>
            </Grid>
          </motion.div>
        </Container>
      </Container>

      <Container maxWidth={false} sx={{ py: 5, mt: { xs: 1, md: 3 } }}>
        <Container>
          {/* Why Choose Us Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            whileExit="exit"
            variants={cardVariants}
            viewport={{ once: false }}
          >
            <Grid container spacing={4}>
              {/* Left Column */}
              <Grid item xs={12} md={6}>
                <Box sx={{ p: { xs: 1, md: 4 } }}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    color="error"
                    gutterBottom
                  >
                    Our Features
                  </Typography>
                  <Typography variant="h5" fontWeight="bold" mb={2}>
                    Why Choose Us
                  </Typography>
                  <Typography variant="body1" color="text.secondary" paragraph>
                    {/* Smart Photography, one of the best wedding candid
                    photographers and wedding cinematographers based in Tamil
                    Nadu, with over 15 years of expertise. */}
                    {aboutUs?.content_1}
                  </Typography>
                  <Box
                    display="flex"
                    flexDirection="column"
                    gap={3}
                    sx={{ mt: 3 }}
                  >
                    <Box display="flex" alignItems="center">
                      <CheckCircleOutlineIcon color="secondary" />
                      <Typography
                        variant="body1"
                        ml={1}
                        sx={{ fontSize: "1.2rem" }}
                      >
                        {/* 10+ Years Experience */}
                        {aboutUs?.point_1}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <CheckCircleOutlineIcon color="secondary" />
                      <Typography
                        variant="body1"
                        ml={1}
                        sx={{ fontSize: "1.2rem" }}
                      >
                        {/* Creative Shoot Ideas */}
                        {aboutUs?.point_2}
                      </Typography>
                    </Box>
                    <Box display="flex" alignItems="center">
                      <CheckCircleOutlineIcon color="secondary" />
                      <Typography
                        variant="body1"
                        ml={1}
                        sx={{ fontSize: "1.2rem" }}
                      >
                        {/* Best Quality Photos */}
                        {aboutUs?.point_3}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>

              {/* Right Column with Image */}
              <Grid
                item
                xs={12}
                md={6}
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <Box
                  component="img"
                  src={logo5}
                  sx={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    borderRadius: 2,
                    maxWidth: "90%",
                    mt: 5,
                    height: "auto",
                    boxShadow: {
                      xs: "20px -20px 0px rgba(218, 30, 57, 1)",
                      md: "50px -50px 0px rgba(218, 30, 57, 1)",
                    }, // Large red box shadow
                    transition: "box-shadow 0.3s ease", // Smooth transition for the box-shadow
                    ":hover": {
                      boxShadow: {
                        xs: "10px -10px 0px rgba(218, 30, 57, 1)",
                        md: "20px -20px 0px rgba(218, 30, 57, 1)",
                      }, // Hover effect
                    },
                  }}
                />
              </Grid>
            </Grid>
          </motion.div>

          {/* Photoshoot Info - Bottom center */}
          <Box mt={4} textAlign="center" position="relative">
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "error.main",
                borderRadius: "50%",
                width: 130, // Increased width
                height: 130, // Increased height
                position: "absolute",
                bottom: -10, // Adjust as needed to position the circle at the bottom center
                left: "53%",
                transform: "translateX(-50%)", // Center horizontally
              }}
            >
              <Typography
                fontWeight="500"
                color="white"
                sx={{
                  fontSize: {
                    xs: "0.75rem", // Small screen (mobile)
                    sm: "0.85rem", // Medium screen (tablet)
                    md: "0.95rem", // Large screen (desktop)
                    lg: "1rem", // Extra large screen (large desktop)
                  },
                }}
              >
                <span sx={{ fontWeight: "600" }}>100+</span> <br></br>
                Photoshoots
              </Typography>
            </Box>
          </Box>
        </Container>
      </Container>
    </>
  );
}

export default PhotographyAboutUs;
