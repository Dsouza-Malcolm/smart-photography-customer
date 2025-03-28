import { Box, Button, Container, Typography } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import port1 from "../asset/port/image (13).png";
// import port2 from "../asset/port/image (14).png";
// import port4 from "../asset/port/image (15).png";
// import port3 from "../asset/port/image (16).png";
// import port5 from "../asset/port/image (18).png";
// import port6 from "../asset/port/image (19).png";
import { axiosApi } from "../services/api/api";
import { createImgSrc } from "../utils/createImgSrc";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Portfolio() {
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axiosApi.get("/portfolio/portfolio");
        setPortfolio(
          response.data.data.flatMap((item) => JSON.parse(item.images))
        );
      } catch (error) {
        console.log(error);
      }
    };

    fetchPortfolio();
  }, []);

  return (
    <Container maxWidth={false} sx={{ p: 5 }}>
      <Box sx={{ textAlign: "center", position: "relative" }}>
        <Typography
          variant="h6"
          fontWeight="bold"
          component="div"
          color="error"
          gutterBottom
        >
          Our Portfolio
        </Typography>
        <Typography
          variant="h5"
          component="div"
          fontWeight="bold"
          gutterBottom
          sx={{ mb: 3 }}
        >
          Smart Photography captures All of Your Good memories.
        </Typography>
      </Box>
      <Box
        sx={{
          textAlign: "center",
          position: "relative",
          m: { xs: "5", md: "5" },
        }}
      >
        <Box item xs={12}>
          <ImageList
            variant="quilted"
            cols={4}
            gap={20} // Adjust the gap value as needed (e.g., 8px, 16px, etc.)
          >
            {portfolio.map((image, index) => (
              <ImageListItem key={image} cols={1} rows={1}>
                <img
                  {...srcset(createImgSrc(image), 121, image.rows, image.cols)}
                  alt={`portfolio-img-${index}`}
                  loading="lazy"
                  style={{
                    borderRadius: 0,
                    transition: "transform 0.3s ease", // Smooth transition
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </ImageListItem>
            ))}
          </ImageList>
          <Link
            to="/gallery"
            style={{ textDecoration: "none" }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} // Scroll to top on click
          >
            <Button
              variant="contained"
              fullWidth
              color="error"
              sx={{
                fontSize: { xs: "0.6rem", sm: "0.7rem" },
                padding: { xs: "6px 12px", sm: "8px 16px" },
              }}
            >
              Load More
            </Button>
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

// const itemData = [
//   {
//     img: port1,
//     rows: 4,
//     cols: 2,
//   },
//   {
//     img: port2,

//     cols: 2,
//   },
//   {
//     img: port3,

//     rows: 4,
//     cols: 2,
//   },
//   {
//     img: port4,

//     rows: 4,
//     cols: 2,
//   },
//   {
//     img: port5,

//     rows: 4,
//     cols: 2,
//   },
//   {
//     img: port6,

//     cols: 2,
//   },
// ];
