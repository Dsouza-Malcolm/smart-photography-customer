import { Box, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon
import { Link } from "react-router-dom";
import logo3 from "../asset/banner.png";
import youtube from "../asset/video/youtupe.png";
import Footer from "../components/Footer";
import "../css/video.css";
import { axiosApi } from "../services/api/api";
import { createImgSrc } from "../utils/createImgSrc";
import { extractYouTubeID } from "../utils/extractYoutubeId";

function Video() {
  const [videoId, setVideoId] = useState(null); // Store video ID of YouTube Shorts to display
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axiosApi.get("/video/getallvideos/video");
        console.log(response.data.data);
        setVideos(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, []);

  // Handlers for each YouTube icon click
  // const handleIconClick = (id) => {
  //   setVideoId(id); // Set the specific YouTube Shorts video ID
  // };

  return (
    <>
      {/* <Box>
        <Typography variant="h6" gutterBottom>Reel</Typography>
      </Box> */}
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
            Videos
          </Typography>
          <Typography variant="h6" gutterBottom>
            <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
              Home
            </Link>{" "}
            {">>"} Videos
          </Typography>
        </Box>

        <div className="container mt-5">
          <div className="row">
            {videos.map((video) => (
              <div className="col-lg-4 col-md-6 mb-4" key={video.id}>
                <div className="image">
                  <div id="Zoom-In">
                    <figure>
                      <img
                        src={createImgSrc(video.thumbnail_image)}
                        alt={`Video ${video.id}`}
                        className="main-image"
                      />
                      <img
                        src={youtube}
                        alt="Icon"
                        className="icon-overlay"
                        onClick={() => video.url && setVideoId(video.url)}
                      />
                    </figure>
                  </div>
                </div>
                {/* <div className="image-card">
                  <figure>
                    <img
                      src={video.img}
                      alt={`Video ${video.id}`}
                      className="main-image"
                    />
                  </figure>

                  <div className="color-overlay"></div>
                  <div
                    className="icon-overlay"
                    onClick={() => video.youtubeId && setVideoId(video.youtubeId)}
                  >
                    <img
                      src={youtube}
                      alt="Icon"
                      className="overlay-icon"
                    />
                  </div>
                </div> */}
              </div>
            ))}
          </div>

          {/* Embedded YouTube video (iframe) */}
          {videoId && (
            <div className="video-modal" onClick={() => setVideoId(null)}>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${extractYouTubeID(
                    videoId
                  )}`}
                  title="YouTube Videos"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="close-icon" onClick={() => setVideoId(null)}>
                  <FaTimes size={40} color="#fff" />
                </div>
              </div>
            </div>
          )}
        </div>
      </Box>
      <Footer />
    </>
  );
}

export default Video;
