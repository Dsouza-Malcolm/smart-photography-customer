import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Container,
  Drawer,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { Link, NavLink, useLocation } from "react-router-dom"; // Import useLocation
import logo from "../asset/logo.png";
import "./NavBar.css";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false); // Track the scroll state
  const location = useLocation(); // Get the current location

  // Determine background color based on the scroll position
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true); // When scrolled down, set background to white
    } else {
      setScrolling(false); // When at the top, set background to transparent
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll); // Listen to scroll events

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine background color based on the current route and scroll state
  const getBackgroundColor = () => {
    if (scrolling) {
      return "#ffffff"; // White background when scrolled down
    }
    switch (location.pathname) {
      default:
        return "transparent"; // Default background color
    }
  };

  const handleMenuOpen = () => {
    setDrawerOpen(true);
  };

  const handleMenuClose = () => {
    setDrawerOpen(false);
  };

  const getNavLinkClass = (path) => {
    if (location.pathname === "/" && !scrolling) {
      return "navbar_Link"; // Always apply navbar_Link for '/' when not scrolling
    } else if (scrolling) {
      return location.pathname === path ? "navbar_Link active" : "navbar_Link";
    } else {
      return location.pathname === path
        ? "navbar_Link_to active"
        : "navbar_Link_to";
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 20px",
        boxShadow: "none",
        width: "100%",
        position: "fixed", // Make the navbar sticky
        top: 0,
        zIndex: 1000,

        backgroundColor: getBackgroundColor(), // Dynamic background color
        transition: "background-color 0.3s ease", // Smooth transition for background change
      }}
    >
      {/* Logo - Always Visible */}
      <Container maxWidth={false} sx={{ mx: { xs: 0, md: 5 } }}>
        <Grid container alignItems="center">
          {/* Logo Section */}
          <Grid
            item
            md={2}
            sx={{ display: { xs: "flex" }, justifyContent: "flex-start" }}
          >
            <img src={logo} width={100} alt="Logo" />
          </Grid>

          {/* Centered Navigation Links for Medium to Large Screens */}
          <Grid
            item
            md={8}
            sx={{
              display: { xs: "none", lg: "flex" },
              justifyContent: "center",
            }}
          >
            <List sx={{ display: "flex", gap: 3 }}>
              <ListItem
                button
                component={NavLink}
                to="/"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={getNavLinkClass("/")}
                activeClassName="active"
              >
                Home
              </ListItem>
              <ListItem
                button
                component={NavLink}
                to="/about"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={getNavLinkClass("/about")}
                activeClassName="active"
              >
                AboutUs
              </ListItem>
              <ListItem
                button
                component={NavLink}
                to="/service"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={getNavLinkClass("/service")}
                activeClassName="active"
              >
                Service
              </ListItem>
              <ListItem
                button
                component={NavLink}
                to="/gallery"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={getNavLinkClass("/gallery")}
                activeClassName="active"
              >
                Gallery
              </ListItem>
              <ListItem
                button
                component={NavLink}
                to="/reel"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={getNavLinkClass("/reel")}
                activeClassName="active"
              >
                Reels
              </ListItem>
              <ListItem
                button
                component={NavLink}
                to="/album"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={getNavLinkClass("/album")}
                activeClassName="active"
              >
                Album
              </ListItem>
              <ListItem
                button
                component={NavLink}
                to="/video"
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={getNavLinkClass("/video")}
                activeClassName="active"
              >
                Video
              </ListItem>
            </List>
          </Grid>

          {/* Enquiry Button for Medium to Large Screens */}
          <Grid
            item
            xs={12}
            md={2}
            sx={{
              display: { xs: "none", lg: "flex" },
              justifyContent: "flex-end",
            }}
          >
            <Link
              to="/enquiry"
              style={{ textDecoration: "none", color: "#fff !important" }}
            >
              <Button
                variant="contained"
                color="error"
                sx={{ px: 4, py: 1, borderRadius: "10px" }}
              >
                Enquiry
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Container>

      {/* Hamburger Menu Icon for Small Screens */}
      <Box sx={{ display: { xs: "flex", lg: "none" } }}>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleMenuOpen}
        >
          <RiMenu4Line />
        </IconButton>
      </Box>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={handleMenuClose}
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "rgba(0, 0, 0, 0.9)", // black background with 70% opacity
            zIndex: 2000,
          },
        }}
      >
        <Box sx={{ width: 250 }}>
          <Box display="flex" justifyContent="flex-end" p={2}>
            <IconButton onClick={handleMenuClose}>
              <CloseIcon sx={{ color: "white" }} />
            </IconButton>
          </Box>
          <List>
            <ListItem
              button
              component={NavLink}
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                handleMenuClose();
              }}
              activeClassName="active"
            >
              <ListItemText primary="Home" sx={{ color: "white" }} />{" "}
              {/* White text */}
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/about"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                handleMenuClose();
              }}
              activeClassName="active"
            >
              <ListItemText primary="About Us" sx={{ color: "white" }} />{" "}
              {/* White text */}
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/service"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                handleMenuClose();
              }}
              activeClassName="active"
            >
              <ListItemText primary="Service" sx={{ color: "white" }} />{" "}
              {/* White text */}
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/gallery"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                handleMenuClose();
              }}
              activeClassName="active"
            >
              <ListItemText primary="Gallery" sx={{ color: "white" }} />{" "}
              {/* White text */}
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/reel"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                handleMenuClose();
              }}
              activeClassName="active"
            >
              <ListItemText primary="Reels" sx={{ color: "white" }} />{" "}
              {/* White text */}
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/album"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                handleMenuClose();
              }}
              activeClassName="active"
            >
              <ListItemText primary="Album" sx={{ color: "white" }} />{" "}
              {/* White text */}
            </ListItem>
            <ListItem
              button
              component={NavLink}
              to="/video"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                handleMenuClose();
              }}
              activeClassName="active"
            >
              <ListItemText primary="Video" sx={{ color: "white" }} />{" "}
              {/* White text */}
            </ListItem>
          </List>
          <Box sx={{ padding: 2 }}>
            <Link
              to="/enquiry"
              style={{ textDecoration: "none", color: "#fff !important" }}
            >
              <Button
                variant="contained"
                color="error"
                fullWidth
                onClick={handleMenuClose}
              >
                Enquiry
              </Button>
            </Link>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default NavBar;
