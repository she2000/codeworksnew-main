import React, { useState } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { Home, Info, Build, Article } from "@mui/icons-material";
import { RiSendPlaneFill } from "react-icons/ri";
import { MdPersonAdd } from "react-icons/md";
// Importing components for dynamic rendering
import HomePage from "../pages/mobile/Home";
import AboutPage from "../pages/mobile/About";
import ServicesPage from "../pages/mobile/Service";
import BlogsPage from "../pages/mobile/Blogs";
import logo from '../codeworks.png';
const App = () => {
  const [activeComponent, setActiveComponent] = useState("home"); // Track which component to show
  const [openPopup, setOpenPopup] = useState(false);

  const handlePopupOpen = () => {
    setOpenPopup(true);
  };

  const handlePopupClose = () => {
    setOpenPopup(false);
  };

  // Render the active component dynamically
  const renderContent = () => {
    switch (activeComponent) {
      case "home":
        return <HomePage />;
      case "about":
        return <AboutPage />;
      case "services":
        return <ServicesPage />;
      case "blogs":
        return <BlogsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <Box sx={{ height: "100vh", overflow: "hidden" }}>
      {/* Header */}
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.3)", // Semi-transparent white
          backdropFilter: "blur(1px)", // Frosted glass effect
          boxShadow: "none",
          zIndex: 2,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
         <img src={logo} style={{width:'60px'}}/>
         <Typography sx={{fontSize:"13px",fontWeight:'bold'}}> Connex Code-Works</Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "rgba(0, 123, 255, 0.5)", // Semi-transparent blue
              color: "#fff",
              borderRadius: "8px",
              padding: "8px 16px", // Adjusted for better spacing
              display: "flex",
              alignItems: "center",
              gap: "8px", // Spacing between icon and text
              boxShadow: "none",
              fontSize: "16px", // Text size
              fontWeight: "bold", // Bold text for prominence
              textTransform: "none", // Remove uppercase transformation
              transition: "transform 0.3s ease, background-color 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(0, 123, 255, 0.9)", // Brighter on hover
                transform: "scale(1.05)", // Slight scaling effect
              },
              "&:active": {
                backgroundColor: "rgba(0, 123, 255, 1)", // Fully opaque on active
              },
            }}
            onClick={handlePopupOpen}
          >
            <MdPersonAdd size={20} style={{ color: "#fff" }} />
            Join Us
          </Button>

        </Toolbar>
      </AppBar>

      {/* Main Content */}
      <Box
        sx={{
          marginTop: "64px", // Height of the header
          marginBottom: "80px", // Height of the footer
          overflowY: "auto",
          height: "calc(100vh - 144px)",

          borderRadius: "10px",
        }}
      >
        {renderContent()}
      </Box>

      {/* Footer */}
      <AppBar
        position="fixed"
        sx={{
          top: "auto",
          bottom: 0,
          backgroundColor: "rgba(255, 255, 255, 0.3)", // Lighter transparent background
          boxShadow: "none",
          backdropFilter: "blur(10px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.2)", // Subtle border
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "center", // Center icons horizontally
            alignItems: "center",
            gap: "20px", // Small gap between icons
            height: "64px", // Fixed height for consistency
          }}
        >
          {[
            { label: "Home", icon: <Home sx={{ fontSize: 28 }} />, component: "home" },
            { label: "About Us", icon: <Info sx={{ fontSize: 28 }} />, component: "about" },
            { label: "Services", icon: <Build sx={{ fontSize: 28 }} />, component: "services" },
            { label: "Blogs", icon: <Article sx={{ fontSize: 28 }} />, component: "blogs" },
          ].map(({ label, icon, component }) => (
            <IconButton
              key={label}
              onClick={() => setActiveComponent(component)} // Update active component
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "#007BFF",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                borderRadius: "16px",
                padding: "8px",
                transition: "transform 0.3s ease, background-color 0.3s ease",
                "&:hover": {
                  color: "#0056b3",
                  transform: "scale(1.2)", // MacOS-like hover effect
                  backgroundColor: "rgba(255, 255, 255, 0.8)",
                },
              }}
            >
              {icon}
            </IconButton>
          ))}
        </Toolbar>
      </AppBar>


      {/* Popup Dialog */}


      <Dialog
        open={openPopup}
        onClose={handlePopupClose}
        sx={{
          ".MuiPaper-root": {
            backgroundColor: "rgba(255, 255, 255, 0.15)", // Frosted glass background
            backdropFilter: "blur(15px)", // Strong frosted effect
            
            borderRadius: "30px",
            padding: "10px",
            paddingBottom: '15px',
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", // Soft shadow
            animation: "fadeIn 0.5s ease-out",
            "@keyframes fadeIn": {
              "0%": { opacity: 0, transform: "scale(0.8)" },
              "100%": { opacity: 1, transform: "scale(1)" },
            },
          },
        }}
      >
        <DialogTitle
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "24px",
            color: "white", // Primary theme color
            marginBottom: "10px",
          }}
        >
          Join With Us!
        </DialogTitle>
        <DialogContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* WhatsApp Channel Button */}
          <Box
            sx={{
              textAlign: "center",
              animation: "slideUp 0.8s ease forwards",
              "@keyframes slideUp": {
                "0%": { opacity: 0, transform: "translateY(20px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            <Button
              variant="contained"
              onClick={() => window.open("https://wa.me/1234567890", "_blank")}
              sx={{
                width: "100%",
                maxWidth: "300px",
                backgroundColor: "#25D366", // WhatsApp green
                color: "white",
                textTransform: "none",
                fontSize: "16px",
                fontWeight: "bold",
                boxShadow: 'none',
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",

                gap: 1,
                "&:hover": {
                  backgroundColor: "#1EBE5B",
                },
              }}
            >
              <img
                src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                alt="WhatsApp Icon"
                style={{ width: "24px", height: "24px" }}
              />
              WhatsApp Channel
            </Button>
            <Typography
              sx={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.7)",
                mt: 1,
              }}
            >
              Stay updated with our latest news and announcements.
            </Typography>
          </Box>

          {/* WhatsApp Group Button */}
          <Box
            sx={{
              textAlign: "center",
              animation: "slideUp 1s ease forwards",
            }}
          >
            <Button
              variant="contained"
              onClick={() => window.open("https://group.example.com", "_blank")}
              sx={{
                width: "100%",
                maxWidth: "300px",
                backgroundColor: "#007BFF", // iOS-style blue
                color: "white",
                textTransform: "none",
                boxShadow: 'none',
                fontSize: "16px",
                fontWeight: "bold",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 1,
                "&:hover": {
                  backgroundColor: "#0056b3",
                },
              }}
            >
              <img
                src="https://img.icons8.com/color/48/000000/whatsapp--v1.png"
                alt="WhatsApp Icon"
                style={{ width: "24px", height: "24px" }}
              />
              Join Our Group
            </Button>
            <Typography
              sx={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.7)",
                mt: 1,
              }}
            >
              Connect with like-minded professionals and collaborate.
            </Typography>
          </Box>
        </DialogContent>
        <DialogActions
          sx={{
            flexDirection: "column",
            gap: 2,
            padding: 2,
            textAlign: "center",
          }}
        >
          {/* Contact Information */}
          <Box
            sx={{
              animation: "fadeIn 0.8s ease forwards",
              "@keyframes fadeIn": {
                "0%": { opacity: 0 },
                "100%": { opacity: 1 },
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.9)",
                mb: 1,
              }}
            >
              <b>Website:</b>{" "}
              <a
                href="https://codeworks.com"
                style={{ color: "#007BFF", textDecoration: "none" }}
              >
                www.codeworks.com
              </a>
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.9)",
                mb: 1,
              }}
            >
              <b>Email:</b>{" "}
              <a
                href="mailto:contact@codeworks.com"
                style={{ color: "#007BFF", textDecoration: "none" }}
              >
                contact@codeworks.com
              </a>
            </Typography>
            <Typography
              sx={{
                fontSize: "14px",
                color: "rgba(255, 255, 255, 0.9)",
              }}
            >
              <b>Address:</b> 123 Code Street, Tech City, World
            </Typography>
          </Box>

          {/* Social Media Links */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
              mb: -3,
              p: 0.75,
              backgroundColor: "rgba(255, 255, 255, 0.1)", // Frosted glass background
              backdropFilter: "blur(10px)", // Frosted effect
              WebkitBackdropFilter: "blur(10000px)",

              borderRadius: "30px", // Rounded container
              animation: "fadeIn 1s ease-in-out forwards",
              "@keyframes fadeIn": {
                "0%": { opacity: 0, transform: "translateY(20px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            <a href="https://www.facebook.com/share/1EKdqvRXFh/?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "#4267B2", transform: "scale(1.1)" },
                }}
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
                  alt="Facebook"
                  style={{ width: "20px", height: "20px" }}
                />
              </Box>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "#1DA1F2", transform: "scale(1.1)" },
                }}
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/twitter.png"
                  alt="Twitter"
                  style={{ width: "20px", height: "20px" }}
                />
              </Box>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "#E1306C", transform: "scale(1.1)" },
                }}
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png"
                  alt="Instagram"
                  style={{ width: "20px", height: "20px" }}
                />
              </Box>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "#0077B5", transform: "scale(1.1)" },
                }}
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
                  alt="LinkedIn"
                  style={{ width: "20px", height: "20px" }}
                />
              </Box>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "#FF0000", transform: "scale(1.1)" },
                }}
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/youtube-play.png"
                  alt="YouTube"
                  style={{ width: "20px", height: "20px" }}
                />
              </Box>
            </a>
            <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
              <Box
                sx={{
                  width: "40px",
                  height: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "50%",
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "#25D366", transform: "scale(1.1)" },
                }}
              >
                <img
                  src="https://img.icons8.com/ios-filled/50/ffffff/whatsapp.png"
                  alt="WhatsApp"
                  style={{ width: "20px", height: "20px" }}
                />
              </Box>
            </a>
          </Box>

        </DialogActions>
      </Dialog>

    </Box>
  );
};

export default App;
