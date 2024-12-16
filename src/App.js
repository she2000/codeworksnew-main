import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "./components/Header";
import Home from "./components/Home"; // Desktop Home Page
import MobileHome from "./components/Home copy"; // Mobile Home Page
import About from "./components/About";
import Blogs from "./components/Blogs";
import OurServices from "./components/OurServices";
import video from "./video/video.mp4";

const App = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Check for mobile screen size

  return (
    <Box sx={{ height: "100%", overflow: "hidden" }}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: -1,
          
        }}
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Header (Hidden on mobile) */}
      {!isMobile && <Header />}

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Routes>
          {/* Conditionally render Home Page based on screen size */}
          <Route path="/" element={isMobile ? <MobileHome /> : <Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Blogs" element={<Blogs />} />
          <Route path="/Services" element={<OurServices />} />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
