import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo3 from "../asset/banner.png";
import Footer from "../components/Footer";
import { axiosApi } from "../services/api/api";
import { createImgSrc } from "../utils/createImgSrc";

const cardVariants = {
  initial: { opacity: 0, y: 30 }, // Start with invisible and slightly below
  animate: { opacity: 1, y: 0 }, // Move to original position when in view
  exit: { opacity: 0, y: -30 }, // Exit with opacity and move upwards when out of view
  whileInView: { opacity: 1, y: 0 }, // When in view, visible and aligned
  whileExit: { opacity: 0, y: -30 }, // When exiting the viewport, fade out and move upwards
  transition: { duration: 0.6, ease: "easeOut" },
};

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axiosApi.get("/services/getallservices");
        console.log(response);
        setServices(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchServices();
  }, []);

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
            Services
          </Typography>
          <Typography
            variant="h6"
            gutterBottom
            sx={{ fontFamily: "Sedan, sans-serif" }}
          >
            <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
              Home
            </Link>{" "}
            {">>"} Services
          </Typography>
        </Box>

        <Container maxWidth={false} sx={{ backgroundColor: "#F4F4F4", pb: 5 }}>
          <Container>
            <Grid container spacing={4}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial="initial"
                    whileInView="animate"
                    whileExit="exit" // Trigger exit animation on scroll up
                    viewport={{ once: false }} // Continue triggering while scrolling in and out
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    variants={cardVariants}
                  >
                    <Link
                      to={`/servicedetails/${service.service_id}`}
                      style={{ textDecoration: "none" }}
                      onClick={() =>
                        window.scrollTo({ top: 0, behavior: "smooth" })
                      }
                    >
                      <Card
                        sx={{
                          height: "100%",
                          display: "flex",
                          flexDirection: "column",
                          boxShadow: "none",
                          borderRadius: "10px",
                          transition:
                            "background-color 0.3s ease, color 0.3s ease", // Smooth transition
                          "&:hover": {
                            backgroundColor: "error.main", // Use the MUI error color
                            color: "#fff", // Change text color to white
                          },
                        }}
                      >
                        <CardMedia
                          component="img"
                          height="200"
                          image={createImgSrc(service.image)}
                          alt={service.title}
                        />
                        <CardContent sx={{ flexGrow: 1 }}>
                          <Typography
                            variant="h6"
                            align="center"
                            fontSize={{
                              xs: "1rem",
                              sm: "1.05rem",
                              md: "1.1rem",
                            }}
                            sx={{
                              // Smooth transition for text color
                              "&:hover": {
                                color: "#fff", // Change text color on hover
                              },
                            }}
                          >
                            {service.title}
                          </Typography>
                        </CardContent>
                      </Card>
                    </Link>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Container>
      </Box>
      <Footer />
    </>
  );
}

export default Services;
