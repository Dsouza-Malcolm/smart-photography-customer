import React from 'react';
import Slider from 'react-slick';
import { Box, CardMedia, Container, Typography } from '@mui/material';
import Album1 from '../asset/albums/image.png';
import Album2 from '../asset/albums/image-1.png';
import Album3 from '../asset/albums/image-2.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PhotoAlbums = () => {
  const photos = [Album1,Album2,Album3];

  const settings = {
    infinite: true, // Infinite looping
    speed: 1000, // Smooth transition speed
    slidesToShow: 1, // Display one main image
    centerMode: true, // Enable center mode
    centerPadding: '20%', // Default padding for desktop
    autoplay: true, // Automatic scrolling
    autoplaySpeed: 3000, // Interval between slides
    pauseOnHover: false, // Do not pause autoplay on hover
    cssEase: 'ease-in-out', // Smooth scrolling effect
    arrows: false, // Remove navigation arrows
    dots: false, // Remove navigation dots
    responsive: [
      {
        breakpoint: 1024, // Tablets and small desktops
        settings: {
          centerPadding: '15%', // Adjust padding for smaller screens
        },
      },
      {
        breakpoint: 600, // Mobile devices
        settings: {
          centerPadding: '10%', // Less padding for narrow screens
        },
      },
      {
        breakpoint: 480, // Small mobile devices
        settings: {
          centerPadding: '5%', // Minimal padding for very small screens
        },
      },
    ],
  };

  return (
    <Container maxWidth={false} sx={{ py: 5,mb:5 }} >
      <Box sx={{ textAlign: 'center' }}>
        <Typography
          variant="h6"
          component="div"
          fontWeight="bold"
          color="error"
          gutterBottom
          sx={{
            fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
          }}
        >
          Photo Albums
        </Typography>
        <Typography
          component="div"
          fontWeight="bold"
          gutterBottom
          sx={{
            fontSize: { xs: '1.1rem', sm: '1.5rem', md: '2rem' },
          }}
        >
          Collection of Photos All of Your Best Works
        </Typography>

        <Slider {...settings}>
          {photos.map((photo, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <CardMedia
                component="img"
                image={photo}
                alt={`photo-${index}`}
                sx={{
                  height: {
                    xs: 200, // Small screens
                    sm: 250, // Medium screens
                    md: 300, // Large screens
                    lg: 400, // Extra-large screens
                  },
                  borderRadius: 2, // Rounded corners
                  boxShadow: 3, // Optional shadow
                }}
              />
            </Box>
          ))}
        </Slider>

      </Box>
    </Container>
  );
};

export default PhotoAlbums;
