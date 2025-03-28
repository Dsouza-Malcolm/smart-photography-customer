import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { createImgSrc } from "../utils/createImgSrc";

const AboutPhoto = ({ aboutPhoto }) => {
  return (
    <Container maxWidth={false} sx={{ my: 5 }}>
      <Container>
        <Box textAlign="center" mb={{ xs: 3, md: 5 }}>
          <img
            src={createImgSrc(aboutPhoto?.imageUrl)}
            alt="About"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </Box>
        <Grid
          container
          justifyContent="center"
          textAlign="center"
          sx={{ my: 5 }}
        >
          <Grid item xs={12} md={8}>
            <Typography
              gutterBottom
              sx={{
                mb: 4,
                fontFamily: "'Sedan SC', sans-serif !important",
                fontSize: { xs: "7vw", sm: "5vw", md: "3rem", lg: "2.5rem" },
                lineHeight: { xs: "1.2", md: "1.3" },
              }}
            >
              {/* Destination Photographer Based in Smart Photograph */}
              {aboutPhoto?.sectionTitle}
            </Typography>
            <Typography
              gutterBottom
              sx={{
                wordSpacing: "0.1em",
                fontFamily: "'Poppins', sans-serif",
                fontSize: {
                  xs: "4vw",
                  sm: "2.5vw",
                  md: "1.25rem",
                  lg: "1.25rem",
                },
                lineHeight: { xs: "1.3", md: "1.5" },
                paddingX: { xs: 2, sm: 4, md: 0 }, // Add padding for smaller screens
              }}
            >
              {/* One of the best wedding candid photographers and wedding
              cinematographers based in Tamil Nadu, with over 15 years of
              expertise, is your trusted partner for capturing the essence of
              your special moments. */}
              {aboutPhoto?.description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
};

export default AboutPhoto;
