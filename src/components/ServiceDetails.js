import { ArrowForwardIos } from "@mui/icons-material";
import {
  Box,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosApi } from "../services/api/api";
import { createImgSrc } from "../utils/createImgSrc";
import EnquiryComponent from "./EnquiryComponent";
const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [activeIndex, setActiveIndex] = useState(null);
  const [service, setService] = useState({});

  const handleClick = (index) => {
    setActiveIndex(index); // Set active index when clicked
  };

  useEffect(() => {
    const fetchServiceById = async () => {
      try {
        const response = await axiosApi.get(
          `/services/getservice/${serviceId}`
        );
        console.log(response.data.data);
        setService(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchServiceById();
  }, [serviceId]);

  return (
    <>
      <Box sx={{ display: "flex" }}>
        {/* Sidebar */}
        <Box sx={{ width: "40%", backgroundColor: "#fff", padding: 2 }}>
          <List>
            {service.steps?.split("\n").map((text, index) => (
              <React.Fragment key={index}>
                <ListItem
                  button
                  onClick={() => handleClick(index)}
                  style={{
                    backgroundColor:
                      activeIndex === index ? "#DA1E39" : "#F7F7F7",
                    color: activeIndex === index ? "#FFE8EB" : "#4E4E4E",
                    marginBottom: "8px", // Apply margin bottom
                    borderRadius: "8px",
                  }}
                >
                  <ListItemText
                    primary={text}
                    sx={{ fontFamily: "'Poppins', sans-serif" }}
                  />
                  {activeIndex === index && (
                    <ArrowForwardIos style={{ marginLeft: "auto" }} /> // Arrow left icon at the end
                  )}
                </ListItem>
                <Divider />
              </React.Fragment>
            ))}
          </List>
        </Box>

        {/* Content Section */}
        <Box sx={{ flex: 1, padding: 4 }}>
          <Grid container spacing={4}>
            {/* Image and Text */}
            <Grid item xs={12} md={12}>
              <img
                src={createImgSrc(service.image)}
                alt="Wedding"
                style={{ width: "100%", height: "300px", borderRadius: "8px" }}
              />
              <Typography variant="h5" sx={{ marginTop: 3 }}>
                {service.title}
              </Typography>
              <Typography sx={{ marginTop: 2, color: "#555" }}>
                {service.summary}
                {/* We understand the enduring beauty of traditional weddings.
                Steeped in cultural significance and timeless elegance, your
                special day deserves to be documented with the same respect and
                artistry. */}
              </Typography>
              {/* <Typography sx={{ marginTop: 2, color: "#555" }}>
                Our traditional wedding photography packages are designed to
                capture the essence of your ceremony and reception, preserving
                precious moments for generations.
              </Typography> */}
            </Grid>

            {/* Contact Section */}
          </Grid>
        </Box>
      </Box>
      <EnquiryComponent />
    </>
  );
};

export default ServiceDetails;
