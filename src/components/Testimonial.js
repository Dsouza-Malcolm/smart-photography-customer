import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { Box, Container, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import logo3 from "../asset/image34.png";
import test1 from "../asset/test1.jpg";
import test2 from "../asset/test2.jpg";
import test3 from "../asset/test3.jpg";
import { axiosApi } from "../services/api/api";
import { createImgSrc } from "../utils/createImgSrc";

// Fallback testimonials if API fails or before data loads
const fallbackTestimonials = [
  {
    name: "Adhithri",
    rating: 4.5,
    review:
      "Smart Photography, one of the best wedding candid photographers and wedding cinematographers based in Tamil Nadu, with over 15 years of expertise, is your trusted partner for capturing the essence...",
    image: test1,
  },
  {
    name: "Rahul",
    rating: 4.7,
    review:
      "Excellent service, and they made our wedding moments unforgettable! Highly recommended for anyone seeking candid photography.",
    image: test2,
  },
  {
    name: "Sneha",
    rating: 4.8,
    review:
      "Professional and patient team. They captured every detail beautifully. We couldn't be happier with the results!",
    image: test3,
  },
];

function Testimonial() {
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await axiosApi.get("/testimonial/testimonial");
        setTestimonials(response.data);
      } catch (error) {
        console.log(error);
        setTestimonials(fallbackTestimonials);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handlePrevious = () => {
    if (testimonials.length === 0) return;

    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    if (testimonials.length === 0) return;

    setCurrentTestimonialIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <StarIcon key={index} sx={{ color: "#FFD700" }} />
        ))}
        {halfStar && <StarHalfIcon sx={{ color: "#FFD700" }} />}
      </>
    );
  };

  // Show loading or empty state
  if (loading || testimonials.length === 0) {
    return (
      <Container
        maxWidth={false}
        sx={{
          height: "80vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url(${logo3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Paper
          elevation={5}
          sx={{
            padding: { xs: 2, md: 4 },
            maxWidth: { xs: "90%", md: "500px" },
            borderRadius: "10px",
          }}
        >
          <Typography variant="h6" align="center">
            {loading ? "Loading testimonials..." : "No testimonials available"}
          </Typography>
        </Paper>
      </Container>
    );
  }

  // Get current testimonial safely
  const currentTestimonial = testimonials[currentTestimonialIndex];
  const { customerName, review, rating, avatar } = currentTestimonial;

  return (
    <Container
      maxWidth={false}
      sx={{
        height: "80vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundImage: `url(${logo3})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Box>
        <Paper
          elevation={5}
          sx={{
            padding: { xs: 2, md: 4 },
            maxWidth: { xs: "90%", md: "500px" },
            borderRadius: "10px",
          }}
        >
          <Box display="flex" justifyContent="space-between" flexWrap="wrap">
            {/* Left Section: Avatar and Name */}
            <Box
              display="flex"
              flexDirection="row"
              alignItems="center"
              mr={2}
              mb={2}
            >
              {/* <Avatar
                alt={name}
                src={c}
                sx={{
                  width: { xs: 60, sm: 80 },
                  height: { xs: 60, sm: 80 },
                  mb: 1,
                }}
              /> */}
              <Box
                sx={{
                  width: { xs: 60, sm: 80 },
                  height: { xs: 60, sm: 80 },
                  mb: 1,
                }}
              >
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover", // Ensures the image scales correctly
                    borderRadius: "50%", // Example: makes it circular
                  }}
                  src={createImgSrc(avatar)}
                  alt={customerName}
                />
              </Box>

              <Box sx={{ marginLeft: 2 }}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  sx={{
                    fontSize: { xs: "1rem", sm: "1.2rem" },
                    fontFamily: "'Poppins', sans-serif",
                  }}
                >
                  {customerName}
                </Typography>
                <Box display="flex" alignItems="center">
                  {renderStars(rating)}
                  <Typography
                    fontWeight="bold"
                    sx={{
                      fontSize: { xs: "0.8rem", sm: "1rem" },
                      marginLeft: 1,
                    }}
                  >
                    {rating}
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* Right Section: Navigation Arrows */}
            <Box display="flex" flexDirection="row" alignItems="center">
              <IconButton
                onClick={handlePrevious}
                aria-label="previous testimonial"
                sx={{
                  border: "1px solid #DA1E39",
                  color: "#DA1E39",
                  "&:hover": {
                    backgroundColor: "#DA1E39",
                    color: "#ffffff",
                  },
                  marginRight: 2,
                }}
              >
                <ArrowBackIosIcon
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  }}
                />
              </IconButton>
              <IconButton
                onClick={handleNext}
                aria-label="next testimonial"
                sx={{
                  border: "1px solid #DA1E39",
                  color: "#DA1E39",
                  "&:hover": {
                    backgroundColor: "#DA1E39",
                    color: "#ffffff",
                  },
                }}
              >
                <ArrowForwardIosIcon
                  sx={{
                    fontSize: { xs: "1.2rem", sm: "1.5rem" },
                  }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box>
            <Typography
              variant="body1"
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem" },
                fontWeight: 500,
                fontFamily: "'Poppins', sans-serif",
                marginTop: 2,
              }}
            >
              {review}
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
}

export default Testimonial;
