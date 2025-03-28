import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { Box, Typography, Grid, Container } from "@mui/material";
import logo3 from "../asset/banner.png";

// import logo1 from "../asset/gallery/image (21).png";
// import logo2 from "../asset/gallery/image (24).png";
// import logo4 from "../asset/gallery/image (25).png";
// import logo5 from "../asset/gallery/image (27).png";
// import logo6 from "../asset/gallery/image (28).png";
import { axiosApi } from "../services/api/api";
import { createImgSrc } from "../utils/createImgSrc";

// Sample album data
// const albumData = [
//   {
//     title: "Senthilkumar Niveha Wedding Candid",
//     image: logo1,
//   },
//   {
//     title: "Sivasankar Vijayalakshmi Best Wedding",
//     image: logo2,
//   },
//   {
//     title: "John Britto Maria Delsy Best Wedding",
//     image: logo4,
//   },
//   {
//     title: "John Britto Maria Delsy Best Wedding",
//     image: logo5,
//   },
//   {
//     title: "Sivasankar Vijayalakshmi Best Wedding",
//     image: logo6,
//   },
//   {
//     title: "Senthilkumar Niveha Wedding Candid",
//     image: logo1,
//   },
//   // Add more album entries here
// ];

const Album = () => {
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        const response = await axiosApi.get("/album/albums");
        setAlbums(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAlbums();
  }, []);

  return (
    <Box>
      <Box
        sx={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${logo3})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          textAlign: "center",
          fontFamily: "Sedan, sans-serif",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Albums
        </Typography>
        <Typography variant="h6" gutterBottom>
          <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
            Home
          </Link>{" "}
          {">>"} Albums
        </Typography>
      </Box>

      <Container sx={{ my: 8 }}>
        <Grid container spacing={4} justifyContent="center">
          {albums.map((album, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              key={index}
              display="flex"
              flexDirection="column"
              alignItems="center"
              sx={{ mb: 4 }} // Increased margin-bottom
            >
              <Link
                to={`/album/${album.album_id}`}
                style={{ textDecoration: "none", color: "#fff" }}
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "250px",
                    height: "200px",
                  }}
                >
                  {[0, 1, 2].map((layer) => (
                    <img
                      key={layer}
                      src={createImgSrc(album.thumbnail)}
                      alt={album.name}
                      style={{
                        position: "absolute",
                        top: `${layer * 6}px`,
                        left: `${layer * 6}px`,
                        width: "100%",
                        height: "100%",
                        borderRadius: "8px",
                        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
                        transform: `rotate(${layer === 1 ? -2 : layer * 2}deg)`,
                        filter: layer === 0 ? "brightness(0.9)" : "none",
                      }}
                    />
                  ))}
                </Box>
              </Link>
              {/* Add album title */}
              <Typography
                variant="subtitle1"
                sx={{ mt: 4, mb: 2, p: 4, textAlign: "center", color: "#000" }} // Margin adjustments
              >
                {album.name}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Footer />
    </Box>
  );
};

export default Album;
