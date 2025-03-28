import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
// import service1 from "../asset/service/image-5.png";
// import service2 from "../asset/service/image-4.png";
// import service3 from "../asset/service/image-3.png";
// import service4 from "../asset/service/image-2.png";
// import service5 from "../asset/service/image-1.png";
// import service6 from "../asset/service/image.png";
import { Link } from "react-router-dom";
import { axiosApi } from "../services/api/api";
import { createImgSrc } from "../utils/createImgSrc";

// const services = [
//   { title: "Wedding Photography", image: service1 },
//   { title: "Pet Photography", image: service2 },
//   { title: "Pre-Wedding Photography", image: service3 },
//   { title: "Family Photography", image: service4 },
//   { title: "Couples Photography", image: service5 },
//   { title: "Birthday Photography", image: service6 },
// ];

// Variants for scroll animations (up and down)
const cardVariants = {
  initial: { opacity: 0, y: 30 }, // Start with invisible and slightly below
  animate: { opacity: 1, y: 0 }, // Move to original position when in view
  exit: { opacity: 0, y: -30 }, // Exit with opacity and move upwards when out of view
  whileInView: { opacity: 1, y: 0 }, // When in view, visible and aligned
  whileExit: { opacity: 0, y: -30 }, // When exiting the viewport, fade out and move upwards
  transition: { duration: 0.6, ease: "easeOut" },
};

const PhotographyServices = () => {
  // const theme = useTheme();
  // const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axiosApi.get("/services/getallservices");
        setServices(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axiosApi.get("/services/getallservices");
        setServices(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchServices();
  }, []);

  return (
    <Container maxWidth={false} sx={{ backgroundColor: "#F4F4F4", py: 5 }}>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
          }}
        >
          <Box>
            <Typography variant="h6" color="error" gutterBottom>
              Our Services
            </Typography>
          </Box>

          <Link
            to="/service"
            style={{ textDecoration: "none" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Scroll to top on click
          >
            <Button
              variant="contained"
              color="error"
              sx={{
                fontSize: { xs: "0.6rem", sm: "0.7rem" },
                padding: { xs: "6px 12px", sm: "8px 16px" },
                display: { xs: "none", md: "flex" },
                borderRadius: "10px",
              }}
            >
              View All
            </Button>
          </Link>
        </Box>

        <Box>
          <Typography variant={"h5"} gutterBottom>
            We're deeply passionate, catching your lovely memories.
          </Typography>
        </Box>

        <Grid container spacing={4} sx={{ marginTop: "20px" }}>
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
                  } // Scroll to top on click
                >
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: "none",
                      borderRadius: "10px",
                      transition: "background-color 0.3s ease, color 0.3s ease",
                      "&:hover": {
                        backgroundColor: "error.main",
                        color: "#fff",
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
                        fontSize={{ xs: "1rem", sm: "1.05rem", md: "1.1rem" }}
                        sx={{
                          "&:hover": {
                            color: "#fff",
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

        <Grid container sx={{ marginTop: 4 }}>
          <Grid item xs={12}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Button
                variant="contained"
                fullWidth
                color="error"
                sx={{
                  fontSize: { xs: "0.6rem", sm: "0.7rem" },
                  padding: { xs: "6px 12px", sm: "8px 16px" },
                  display: { xs: "flex", md: "none" },
                  borderRadius: "10px",
                }}
              >
                View All
              </Button>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default PhotographyServices;
