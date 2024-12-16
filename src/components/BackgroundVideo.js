import React from "react";
import { Box } from "@mui/material";
import video from '../video/video.mp4';
function BackgroundVideo() {
    return (
        <Box
            sx={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 0,
                overflow: "hidden",
            }}
        >
            <video
                autoPlay
                loop
                muted
                style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                   
                }}
            >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </Box>
    );
}

export default BackgroundVideo;
