import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import logo from "../asset/logo.png";
import { axiosApi } from "../services/api/api";
const Footer = () => {
  const [socialMediaUrls, setSocialMediaUrls] = useState([]);

  useEffect(() => {
    const fetchSocialMedialurls = async () => {
      try {
        const response = await axiosApi.get("/socialmedia/getSocialMediaUrl");
        setSocialMediaUrls(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchSocialMedialurls();
  }, []);
  return (
    <>
      <Box sx={{ backgroundColor: "#151515", color: "#ffffff", py: 3, px: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-around",

            textAlign: { xs: "center", md: "left" },
          }}
        >
          {/* Information Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Information
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", padding: 0, mt: 2 }}>
              {[
                { label: "Home", href: "/home" },
                { label: "About Us", href: "/about" },
                { label: "Service", href: "/service" },
                { label: "Gallery", href: "/gallery" },
                { label: "Reels", href: "/reel" },
                { label: "Photos", href: "/album" },
                { label: "Video", href: "/video" },
              ].map((item) => (
                <Box component="li" key={item.label} sx={{ mb: 1 }}>
                  <Link href={item.href} color="inherit" underline="hover">
                    {item.label}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Content Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Content
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", padding: 0, mt: 2 }}>
              {["Search Trends", "Blog"].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Link href="#" color="inherit" underline="hover">
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Logo and Subscription Section */}
          <Box sx={{ textAlign: "center", mb: 3 }}>
            <img src={logo} width={100} alt="Logo" />

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                mt: 3,
              }}
            >
              <TextField
                variant="outlined"
                placeholder="Email"
                size="small"
                sx={{ bgcolor: "#fff", borderRadius: 1 }}
              />
              <Button variant="contained" color="error" sx={{ height: "100%" }}>
                Send
              </Button>
            </Box>
          </Box>

          {/* Legal Section */}
          <Box sx={{ mb: 3 }}>
            <Typography variant="h6" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", padding: 0, mt: 2 }}>
              {[
                "Terms of use",
                "Privacy Policy",
                "Copyright",
                "Cookies policy",
              ].map((item) => (
                <Box component="li" key={item} sx={{ mb: 1 }}>
                  <Link href="#" color="inherit" underline="hover">
                    {item}
                  </Link>
                </Box>
              ))}
            </Box>
          </Box>

          {/* Social Media Section */}
          <Box sx={{ mb: 3, textAlign: "center" }}>
            <Typography variant="h6" gutterBottom>
              Social Media
            </Typography>
            <Box
              sx={{ display: "flex", justifyContent: "center", gap: 1, mt: 2 }}
            >
              <IconButton
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                href={socialMediaUrls?.facebook}
              >
                <Facebook />
              </IconButton>

              <IconButton
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                href={socialMediaUrls?.instagram}
              >
                <Instagram />
              </IconButton>

              <IconButton
                color="inherit"
                target="_blank"
                rel="noopener noreferrer"
                href={socialMediaUrls?.youtube}
              >
                <YouTube />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Typography
          align="center"
          sx={{
            backgroundColor: "#000",
            color: "#fff",
            py: 1,
            letterSpacing: "1px",
            fontSize: { xs: "0.4rem", md: "0.7rem" },
          }}
        >
          Copyright © {new Date().getFullYear()} , Smart Photography, All Rights
          Reserved Developed By{" "}
          <a
            href="https://barbikan.in"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#fff", textDecoration: "none" }}
          >
            Barbikan Technologies
          </a>
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
