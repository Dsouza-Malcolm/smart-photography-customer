import { Box, Typography } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa"; // Import the close icon
import { Link } from "react-router-dom";
import logo3 from "../asset/banner.png";
import Footer from "../components/Footer";
import "../css/reel.css";
import { createImgSrc } from "../utils/createImgSrc";
import { extractYouTubeID } from "../utils/extractYoutubeId";
// import image from '../asset/reel/image.png'
// import image1 from '../asset/reel/image (1).png'
// import image2 from '../asset/reel/image (2).png'
// import image3 from '../asset/reel/image (3).png'
// import image4 from '../asset/reel/image (4).png'
// import image5 from '../asset/reel/image (5).png'
// import image6 from '../asset/reel/image (6).png'
// import image7 from '../asset/reel/image (7).png'
import youtube from "../asset/reel/youtube.png";
import { axiosApi } from "../services/api/api";
function Reel() {
  const [videoId, setVideoId] = useState(null); // Store video ID of YouTube Shorts to display
  const [reels, setReels] = useState([]);

  useEffect(() => {
    const fetchReels = async () => {
      try {
        const response = await axiosApi.get("/video/getallvideos/short");
        console.log(response.data.data);
        setReels(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchReels();
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
            Reels
          </Typography>
          <Typography variant="h6" gutterBottom>
            <Link to="/" style={{ color: "#000", textDecoration: "none" }}>
              Home
            </Link>{" "}
            {">>"} Reels
          </Typography>
        </Box>

        <div className="container mt-5">
          <div className="row">
            {reels.map((reel) => (
              <div className="col-lg-4 col-md-6 mb-4" key={reel.video_id}>
                <div className="image">
                  <div id="Zoom-In">
                    <figure>
                      <img
                        src={createImgSrc(reel.thumbnail_image)}
                        alt={`Video ${reel.video_id}`}
                        className="main-image"
                      />
                      <img
                        src={youtube}
                        alt="Icon"
                        className="icon-overlay"
                        onClick={() => reel.url && setVideoId(reel.url)}
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
              <div className="video-containers">
                <iframe
                  width="100%"
                  height="100%"
                  className="border"
                  src={`https://www.youtube.com/embed/${extractYouTubeID(
                    videoId
                  )}`}
                  title="YouTube Shorts"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <div className="close-icon" onClick={() => setVideoId(null)}>
                  <FaTimes size={40} color="#fff" />{" "}
                  {/* Adjust size and color */}
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

export default Reel;
