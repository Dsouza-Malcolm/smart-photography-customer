import React, { useEffect, useState } from "react";
import { Box, Typography, IconButton, Container } from "@mui/material";
import Slider from "react-slick";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { axiosApi } from "../services/api/api";
import { createImgSrc } from "../utils/createImgSrc";

// Sample team member data
// const teamMembers = [
//   { name: "Bob Smith", title: "Photographer", image: team2 },
//   { name: "Alice Johnson", title: "CEO, Smart Photography", image: team1 },
//   { name: "Carol White", title: "Photographer", image: team3 },
// ];

// Custom Arrow Buttons
const CustomArrow = ({ className, style, onClick, direction }) => (
  <IconButton
    onClick={onClick}
    sx={{
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
      background: "transparent",
      border: "1px solid",
      borderColor: "black",
      color: "black",
      "&:hover": {
        backgroundColor: "black",
        color: "white",
      },
      ...(direction === "left" ? { left: "10px" } : { right: "10px" }),
    }}
  >
    {direction === "left" ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon />}
  </IconButton>
);

const OurTeamSlider = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axiosApi.get("/our_team/our_team");
        setTeamMembers(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTeams();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomArrow direction="right" />,
    prevArrow: <CustomArrow direction="left" />,
    centerMode: true, // Enable center mode for a focal effect
    centerPadding: "0", // Remove side padding for better visual effect
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 960,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Container maxWidth={false} sx={{ backgroundColor: "#F4F4F4", py: 5 }}>
      <Container>
        <Box sx={{ textAlign: "center", position: "relative" }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            component="div"
            color="error"
            gutterBottom
          >
            Our Team
          </Typography>
          <Typography
            variant="h5"
            component="div"
            fontWeight="bold"
            sx={{ mb: 3 }}
            gutterBottom
          >
            Our Core Team of Photographers
          </Typography>
          <Slider {...settings}>
            {teamMembers.map((member, index) => (
              <Box
                key={index}
                sx={{
                  px: 1,
                  textAlign: "center",
                  transition: "transform 0.3s ease", // smooth transition for scaling
                  "&.slick-center": {
                    transform: "scale(1.2)", // Zoom in the center card
                    zIndex: 2, // Ensure center card is on top
                  },
                  "&.slick-slide": {
                    transition: "transform 0.3s ease", // Ensure all slides have smooth transition
                  },
                }}
              >
                <Box
                  component="img"
                  src={createImgSrc(member.image)}
                  alt={member.name}
                  sx={{
                    width: "100%",
                    height: "430px",
                    objectFit: "cover",
                    borderRadius: 2,
                    mb: 2,
                  }}
                />
                <Typography variant="h6" component="div">
                  {member.name}
                </Typography>
                <Typography variant="subtitle1" color="textSecondary">
                  {member.title}
                </Typography>
              </Box>
            ))}
          </Slider>
        </Box>
      </Container>
    </Container>
  );
};

export default OurTeamSlider;
