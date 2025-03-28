import { Box, Button, Container, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo3 from "../asset/banner.png";
import Footer from "../components/Footer";
import { axiosApi } from "../services/api/api";
import { createImgSrc } from "../utils/createImgSrc";

// Sample photos with category information
// const photos = [
//   {
//     id: 1,
//     img: gallery1,
//     alt: "Photo 1",
//     category: "Birthday Photos",
//     cols: 1,
//     rows: 3,
//   },
//   {
//     id: 2,
//     img: gallery2,
//     alt: "Photo 2",
//     category: "Wedding Photos",
//     cols: 1,
//     rows: 1,
//   },
//   {
//     id: 3,
//     img: gallery3,
//     alt: "Photo 3",
//     category: "Couple Photos",
//     cols: 1,
//     rows: 1,
//   },

//   {
//     id: 5,
//     img: gallery5,
//     alt: "Photo 5",
//     category: "Birthday Photos",
//     cols: 2,
//     rows: 4,
//   },
//   {
//     id: 4,
//     img: gallery4,
//     alt: "Photo 4",
//     category: "Family Photos",
//     cols: 1,
//     rows: 2,
//   },
//   {
//     id: 6,
//     img: gallery6,
//     alt: "Photo 6",
//     category: "Groom Photos",
//     cols: 1,
//     rows: 2,
//   },
//   {
//     id: 7,
//     img: gallery7,
//     alt: "Photo 7",
//     category: "Couple Photos",
//     cols: 1,
//     rows: 2,
//   },
//   {
//     id: 9,
//     img: gallery9,
//     alt: "Photo 8",
//     category: "Wedding Photos",
//     cols: 1,
//     rows: 4,
//   },
//   {
//     id: 8,
//     img: gallery8,
//     alt: "Photo 8",
//     category: "Wedding Photos",
//     cols: 2,
//     rows: 2,
//   },
// ];

// const photos = [];

function Gallery() {
  // State to track the selected category
  const [galleryPhotos, setGalleryPhotos] = useState([]);
  const [gallery, setGallery] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    name: "View All",
    id: null,
  });

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const response = await axiosApi.get("/gallery/category");
        setGallery(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchGalleryImages = async () => {
      try {
        const response = await axiosApi.get("/gallery/subcategory");
        console.log(response.data.data);
        setGalleryPhotos(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchGalleryImages();

    fetchGallery();
  }, []);

  // Filter photos based on the selected category
  const filteredPhotos =
    selectedCategory.name === "View All"
      ? galleryPhotos
      : galleryPhotos.filter(
          (photo) => photo.category_id === selectedCategory.id
        );

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
          Gallery
        </Typography>
        <Typography variant="h6" gutterBottom>
          <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
            Home
          </Link>{" "}
          {">>"} Gallery
        </Typography>
      </Box>

      <Container sx={{ mb: 5 }}>
        <Box sx={{ textAlign: "center", my: 4 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              sx={{
                m: 0.5,
                borderRadius: "20px",
                backgroundColor:
                  selectedCategory.name === "View All" ? "#DA1E39" : "#f0f0f0", // Set background color based on selected category
                boxShadow: "none",
                color:
                  selectedCategory.name === "View All" ? "#FFFFFF" : "#535353", // Change text color based on selected category
                "&:hover": {
                  backgroundColor:
                    selectedCategory.name === "View All"
                      ? "#DA1E39"
                      : "#DA1E39", // Keep hover effect active
                  color: "#FFFFFF",
                },
              }}
              onClick={() =>
                setSelectedCategory({ name: "View All", id: null })
              }
            >
              View All
            </Button>
            {gallery?.map((category, index) => (
              <Button
                key={index}
                variant="contained"
                color="secondary"
                sx={{
                  m: 0.5,
                  borderRadius: "20px",
                  backgroundColor:
                    selectedCategory.name === category.name
                      ? "#DA1E39"
                      : "#f0f0f0", // Set background color based on selected category
                  boxShadow: "none",
                  color:
                    selectedCategory.name === category.name
                      ? "#FFFFFF"
                      : "#535353", // Change text color based on selected category
                  "&:hover": {
                    backgroundColor:
                      selectedCategory.name === category.name
                        ? "#DA1E39"
                        : "#DA1E39", // Keep hover effect active
                    color: "#FFFFFF",
                  },
                }}
                onClick={() =>
                  setSelectedCategory({
                    name: category.name,
                    id: category.category_id,
                  })
                }
              >
                {category.name}
              </Button>
            ))}
          </Box>
        </Box>

        {/* Image List with Variable Rows and Columns */}
        {filteredPhotos.length !== 0 ? (
          <ImageList
            variant="quilted"
            cols={3} // Total columns in the grid
            // rowHeight={180} // Height of each row
            gap={10}
          >
            {filteredPhotos.map((photo) => (
              <ImageListItem
                key={photo.id}
                // cols={photo.cols || 1}
                // rows={photo.rows || 1}
              >
                <img
                  src={createImgSrc(photo.photo)}
                  alt={photo.alt}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <Box
            sx={{
              textAlign: "center",
              marginTop: "100px",
              height: "100px",
            }}
          >
            No Images Available for category {selectedCategory.name}
          </Box>
        )}
      </Container>

      <Footer />
    </Box>
  );
}

export default Gallery;
