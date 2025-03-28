import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import {
  Box,
  Typography,
  ImageListItem,
  ImageList,
  Container,
} from "@mui/material";
import { Link } from "react-router-dom";
import logo3 from "../asset/banner.png";
// import logo1 from "../asset/image6.png";
// import logo2 from "../asset/image3.png";
// import logo4 from "../asset/image2.png";
import { axiosApi } from "../services/api/api";
import { useParams } from "react-router-dom";
import { createImgSrc } from "../utils/createImgSrc";

// Sample photos
// const photos = [
//   {
//     id: 1,
//     img: logo1,
//     alt: "Photo 1",
//     category: "Birthday Photos",
//     cols: 1,
//     rows: 1,
//   },
//   {
//     id: 2,
//     img: logo2,
//     alt: "Photo 2",
//     category: "Wedding Photos",
//     cols: 2,
//     rows: 1,
//   },
//   {
//     id: 3,
//     img: logo4,
//     alt: "Photo 3",
//     category: "Couple Photos",
//     cols: 1,
//     rows: 2,
//   },
//   {
//     id: 4,
//     img: logo1,
//     alt: "Photo 4",
//     category: "Family Photos",
//     cols: 1,
//     rows: 1,
//   },
//   {
//     id: 5,
//     img: logo2,
//     alt: "Photo 5",
//     category: "Birthday Photos",
//     cols: 2,
//     rows: 1,
//   },
//   {
//     id: 6,
//     img: logo4,
//     alt: "Photo 6",
//     category: "Groom Photos",
//     cols: 1,
//     rows: 1,
//   },
//   {
//     id: 7,
//     img: logo2,
//     alt: "Photo 7",
//     category: "Couple Photos",
//     cols: 1,
//     rows: 1,
//   },
//   {
//     id: 8,
//     img: logo4,
//     alt: "Photo 8",
//     category: "Wedding Photos",
//     cols: 2,
//     rows: 1,
//   },
//   {
//     id: 9,
//     img: logo1,
//     alt: "Photo 9",
//     category: "Family Photos",
//     cols: 1,
//     rows: 1,
//   },
//   {
//     id: 10,
//     img: logo4,
//     alt: "Photo 8",
//     category: "Wedding Photos",
//     cols: 2,
//     rows: 1,
//   },
//   {
//     id: 11,
//     img: logo1,
//     alt: "Photo 9",
//     category: "Family Photos",
//     cols: 1,
//     rows: 1,
//   },
// ];

const AlbumDel = () => {
  const { albumId } = useParams();
  const [albumImages, setAlbumImages] = useState([]);

  useEffect(() => {
    const fetchAlbumPhotosById = async () => {
      try {
        const response = await axiosApi(`/album/albums/${albumId}`);
        setAlbumImages(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAlbumPhotosById();
  }, [albumId]);

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

      <Container sx={{ my: 5 }}>
        {/* Image List with Variable Rows and Columns */}
        {albumImages.length !== 0 ? (
          <ImageList
            variant="quilted"
            cols={4} // Total columns in the grid
            rowHeight={180} // Height of each row
            gap={10}
          >
            {albumImages.map((photo) => (
              <ImageListItem
                key={photo.id}
                cols={photo.cols || 1}
                rows={photo.rows || 1}
              >
                <img
                  src={createImgSrc(photo.img)}
                  alt={photo.alt}
                  loading="lazy"
                  style={{ objectFit: "contain" }}
                />
              </ImageListItem>
            ))}
          </ImageList>
        ) : (
          <Box
            sx={{ textAlign: "center", height: "100px", marginTop: "100px" }}
          >
            No Images for this Album
          </Box>
        )}
      </Container>

      <Footer />
    </Box>
  );
};

export default AlbumDel;
