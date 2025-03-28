import React, { useState } from 'react';
import { Box, Container } from "@mui/material";
import video from '../asset/video.mp4';

const AboutVideo = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true);
        const video = document.getElementById("aboutVideo");
        if (video) video.play();
    };

    return (
        <Container maxWidth={false} sx={{my:5}}>
            <Container>
                <Box textAlign="center" position="relative">
                    <video
                        id="aboutVideo"
                        width="100%"
                        height="auto"
                        style={{ maxWidth: '100%', borderRadius: '8px' }}
                        loop
                        muted
                        controls={isPlaying}
                        onPlay={() => setIsPlaying(true)}
                    >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {!isPlaying && (
                        <Box
                        onClick={handlePlay}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            cursor: 'pointer',
                            backgroundColor: '#D32F2F', // Change background color to red
                            borderRadius: '50%',
                            width: '60px',
                            height: '60px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span style={{ fontSize: '30px', color: '#fff', borderRadius: '50%', padding: '5px' }}>▶</span> {/* Icon color is white */}
                    </Box>
                    
                    )}
                </Box>
            </Container>
        </Container>
    );
};

export default AboutVideo;
