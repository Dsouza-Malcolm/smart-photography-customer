import React, { useState, useEffect } from "react";
import { Container, Button, Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { motion } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logo1 from "../asset/image6.png";
import logo2 from "../asset/image3.png";
import logo3 from "../asset/image2.png";
import logo4 from "../asset/image.png";
import { Link } from "react-router-dom";
import { axiosApi } from "../services/api/api";
import { createImgSrc } from "../utils/createImgSrc";

const images = [logo1, logo2, logo3, logo4];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [bannerImgs, setBannerImgs] = useState([]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const fetchBannerImgs = async () => {
      try {
        const response = await axiosApi.get("/banner/banner-images");
        setBannerImgs(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchBannerImgs();
  }, []);

  return (
    <>
      <Container
        maxWidth={false}
        sx={{ background: "linear-gradient(to bottom, #fff, #eee)", mt: 5 }}
      >
        <Container
          maxWidth={false}
          sx={{ py: 10, display: "flex", justifyContent: "space-between" }}
        >
          {/* Carousel Dots */}
          <Box
            item
            sm={2}
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                }}
              >
                {bannerImgs.map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8 }}
                    animate={{
                      scale: currentImageIndex === index ? 1.2 : 1,
                      backgroundColor:
                        currentImageIndex === index ? "red" : "gray",
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      width: "10px",
                      height: "10px",
                      borderRadius: "50%",
                    }}
                  />
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Image Slider */}
          <Grid
            item
            xs={12}
            sm={10}
            container
            justifyContent="center"
            alignItems="center"
            sx={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              background: "linear-gradient(to bottom, #fff, #eee)",
              height: { xs: "50vh", md: "70vh" },
            }}
          >
            {/* Animated Image Background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              key={currentImageIndex}
              transition={{ duration: 1 }}
              style={{
                width: "100%",
                height: "100%",
                backgroundImage: `url(${createImgSrc(
                  bannerImgs[currentImageIndex]?.img
                )})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
              }}
            />

            {/* Overlay */}
            <Grid
              item
              xs={12}
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.6)",
                borderRadius: "10px",
              }}
            />

            {/* Main Text Content */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              style={{
                position: "absolute",
                bottom: "30px",
                textAlign: "center",
                color: "white",
                zIndex: 2,
                padding: "0 16px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontFamily: "'Sedan SC', sans-serif !important",
                  fontWeight: "100",
                  mb: 4,
                  fontSize: {
                    xs: "6vw",
                    sm: "3vw",
                    md: "1.3rem",
                    lg: "2.5rem",
                  },
                }}
              >
                One of the best wedding candid<br></br> photographers
              </Typography>
              <Grid container justifyContent="center" spacing={2}>
                <Grid item>
                  <Link
                    to="/enquiry"
                    style={{ textDecoration: "none", color: "#fff !important" }}
                  >
                    <Button
                      variant="contained"
                      color="error"
                      sx={{
                        borderRadius: "10px",
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: {
                          xs: "3.5vw",
                          sm: "2vw",
                          md: "0.6rem",
                          lg: "0.9rem",
                        },
                        px: { xs: 3, md: 4 },
                        py: { xs: 0.5, md: 1 },
                      }}
                    >
                      Enquiry
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Button
                    variant="outlined"
                    color="inherit"
                    sx={{
                      px: { xs: 3, md: 4 },
                      py: { xs: 0.5, md: 1 },
                      fontSize: {
                        xs: "3.5vw",
                        sm: "2vw",
                        md: "0.6rem",
                        lg: "0.9rem",
                      },
                      borderRadius: "10px",
                    }}
                  >
                    Book Now
                  </Button>
                </Grid>
              </Grid>
            </motion.div>
          </Grid>

          {/* Social Media Icons */}
          <Grid
            item
            sm={2}
            sx={{
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container direction="column" spacing={2}>
              {[YouTubeIcon, InstagramIcon, LinkedInIcon, FacebookIcon].map(
                (Icon, i) => (
                  <Grid item key={i}>
                    <Button
                      sx={{ color: "black", minWidth: 0, padding: 1 }}
                      target="_blank"
                    >
                      <Icon />
                    </Button>
                  </Grid>
                )
              )}
            </Grid>
          </Grid>
        </Container>
      </Container>
      <Container maxWidth={false} sx={{ py: 5 }}>
        <Container>
          <Grid container justifyContent="center" textAlign="center">
            <Grid item xs={12} md={8}>
              <Typography
                gutterBottom
                sx={{
                  mb: 4,
                  fontFamily: "'Sedan SC', sans-serif !important",
                  fontSize: { xs: "6vw", sm: "5vw", md: "2.5rem" }, // Responsive font size
                  lineHeight: { xs: "1.2", md: "1.3" },
                }}
              >
                Destination Photographer Based in Smart Photograph
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  wordSpacing: "0.1em",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: { xs: "3.5vw", sm: "2vw", md: "1.25rem" }, // Responsive font size
                  lineHeight: { xs: "1.3", md: "1.5" },
                }}
              >
                One of the best wedding candid photographers and wedding
                cinematographers based in Tamil Nadu, with over 15 years of
                expertise, is your trusted partner for capturing the essence of
                your special moments.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </>
  );
};

export default Hero;
