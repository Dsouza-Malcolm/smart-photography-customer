import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";

import { Email, LocationOn, Phone } from "@mui/icons-material";
import enquiryphoto from "../asset/Group 132.png";

const EnquiryComponent = () => {
  //   const [activeIndex, setActiveIndex] = useState(null);

  //   const handleClick = (index) => {
  //     setActiveIndex(index); // Set active index when clicked
  //   };

  return (
    <Box
      sx={{
        display: "flex",
        minHeight: "100vh",
        fontFamily: "Poppins, sans-serif",
      }}
    >
      {/* Content Section */}
      <Box sx={{ flex: 1, padding: 4 }}>
        <Grid container spacing={4}>
          {/* Image and Text */}
          <Grid item xs={12} md={6}>
            <Box sx={{ position: "relative" }}>
              <img
                src={enquiryphoto}
                alt="Wedding"
                style={{ width: "100%", borderRadius: "8px", zIndex: -1 }}
              />
            </Box>

            <Box
              sx={{
                marginTop: -4,
                position: "relative",
                backgroundColor: "#ffffff",
                zIndex: 1,
              }}
            >
              <Grid
                container
                spacing={2}
                sx={{ border: "2px solid #FF97A6", borderRadius: "8px", py: 3 }}
              >
                {/* Email */}
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: 1,
                      borderRadius: 1,
                    }}
                  >
                    <Email
                      sx={{
                        marginRight: 1,
                        backgroundColor: "#FFC1CA",
                        color: "#DA1E39",
                        borderRadius: "50%",
                      }}
                    />
                    <Typography variant="body1">email@gmail.com</Typography>
                  </Box>
                </Grid>
                {/* Phone */}
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: 1,
                      borderRadius: 1,
                    }}
                  >
                    <Phone
                      sx={{
                        marginRight: 1,
                        backgroundColor: "#FFC1CA",
                        color: "#DA1E39",
                        borderRadius: "50%",
                      }}
                    />
                    <Typography variant="body1">+1 (555) 123-4567</Typography>
                  </Box>
                </Grid>
                {/* Location */}
                <Grid item xs={12}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      padding: 1,
                      borderRadius: 1,
                    }}
                  >
                    <LocationOn
                      sx={{
                        marginRight: 1,
                        backgroundColor: "#FFC1CA",
                        color: "#DA1E39",
                        borderRadius: "50%",
                      }}
                    />
                    <Typography variant="body1">
                      123 Wedding Street, City, Country
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Grid>

          {/* Contact Section */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: 3,
                borderRadius: "8px",
                boxShadow: 2,
              }}
            >
              <form>
                <Grid container spacing={2} sx={{ p: { sx: 1, lg: 3 } }}>
                  <Grid item xs={12} md={6}>
                    <Typography variant="body1" gutterBottom>
                      First Name
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="First Name"
                      variant="outlined"
                      sx={{
                        marginBottom: 2,
                        color: "#535353",
                        backgroundColor: "#F5F5F5",
                        borderRadius: "8px",
                        border: "none",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "#535353",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="body1" gutterBottom>
                      Last Name
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Last Name"
                      variant="outlined"
                      sx={{
                        marginBottom: 2,
                        color: "#535353",
                        backgroundColor: "#F5F5F5",
                        borderRadius: "8px",
                        border: "none",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "#535353",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                      E-mail
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="E-mail"
                      variant="outlined"
                      sx={{
                        marginBottom: 2,
                        color: "#535353",
                        backgroundColor: "#F5F5F5",
                        borderRadius: "8px",
                        border: "none",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "#535353",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                      Mobile Number
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Mobile Number"
                      variant="outlined"
                      sx={{
                        marginBottom: 2,
                        color: "#535353",
                        backgroundColor: "#F5F5F5",
                        borderRadius: "8px",
                        border: "none",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "#535353",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body1" gutterBottom>
                      Message
                    </Typography>
                    <TextField
                      fullWidth
                      placeholder="Message"
                      multiline
                      rows={4}
                      variant="outlined"
                      sx={{
                        marginBottom: 2,
                        color: "#535353",
                        backgroundColor: "#F5F5F5",
                        borderRadius: "8px",
                        border: "none",
                        "& .MuiOutlinedInput-root": {
                          "& fieldset": {
                            border: "none",
                          },
                        },
                        "& .MuiInputBase-input": {
                          color: "#535353",
                        },
                      }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      color="error"
                      sx={{ px: 4, py: 1, borderRadius: "10px" }}
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default EnquiryComponent;
