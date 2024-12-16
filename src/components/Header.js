import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Modal,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
} from "@mui/material";
import { FaUser, FaEnvelope, FaFileAlt, FaPaperPlane } from "react-icons/fa";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useMediaQuery } from "@mui/material";
import imagelogo from "../codeworks.png"
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";


const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false); // State for modal visibility
  const isMobile = useMediaQuery("(max-width:1024px)");

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev);
  };

  const toggleModal = () => {
    setModalOpen((prev) => !prev); // Toggle modal visibility
  };

  const animationStyles = (direction, delay) => ({
    animation: `slide-${direction} 0.5s ease-out forwards`,
    animationDelay: `${delay}s`,
    opacity: 0,
    "@keyframes slide-right": {
      "0%": { transform: "translateX(50px)", opacity: 0 },
      "100%": { transform: "translateX(0)", opacity: 1 },
    },
    "@keyframes slide-left": {
      "0%": { transform: "translateX(-50px)", opacity: 0 },
      "100%": { transform: "translateX(0)", opacity: 1 },
    },
  });

  return (
    <AppBar
      position="static"
      color="transparent"
      sx={{
        boxShadow: "none",
        backdropFilter: "blur(5px)",
        padding: "10px 20px",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Website Logo */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={imagelogo} // Replace with your image path
            alt="Code Works Logo"
            style={{
              // Adjust the height based on your design
              width: "150px", // Maintain aspect ratio
            }}
          />
        </Box>


        {/* For mobile: Toggle Button */}
        {isMobile ? (
          <>
            <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={toggleDrawer}
              sx={{
                "& .MuiDrawer-paper": {
                  backgroundColor: "rgba(255, 255, 255, 0.1)", // Partially transparent
                  color: "white",
                  width: "200px",
                },
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  padding: "10px",
                }}
              >
                <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <List
                sx={{
                  display: "flex",
                  flexDirection: "column", // Stack items vertically
                  alignItems: "flex-start", // Align items to the left
                  paddingLeft: "10px", // Add some padding on the left
                  fontFamily:'arial'
                }}
              >
                <ListItem
                  button
                  component={Link}
                  to="/"
                  onClick={toggleDrawer}
                  sx={{
                    margin: "8px",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  <ListItemText
                    primary="Home"
                    sx={{
                      textAlign: "left", // Align text to the left
                      fontWeight: "bold",
                      color: "white",
                    }}
                  />
                </ListItem>

                <ListItem
                  button
                  component={Link}
                  to="/services"
                  onClick={toggleDrawer}
                  sx={{
                    margin: "8px",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  <ListItemText
                    primary="Our Service"
                    sx={{
                      textAlign: "left", // Align text to the left
                      fontWeight: "bold",
                      color: "white",
                    }}
                  />
                </ListItem>

                <ListItem
                  button
                  component={Link}
                  to="/about"
                  onClick={toggleDrawer}
                  sx={{
                    margin: "8px",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  <ListItemText
                    primary="About"
                    sx={{
                      textAlign: "left", // Align text to the left
                      fontWeight: "bold",
                      color: "white",
                    }}
                  />
                </ListItem>

                <ListItem
                  button
                  component={Link}
                  to="/Blogs"
                  onClick={toggleDrawer}
                  sx={{
                    margin: "8px",
                    borderRadius: "8px",
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                    },
                  }}
                >
                  <ListItemText
                    primary="Blogs"
                    sx={{
                      textAlign: "left", // Align text to the left
                      fontWeight: "bold",
                      color: "white",
                    }}
                  />
                </ListItem>

                <ListItem button onClick={toggleDrawer}>
                  <RequestButton onClick={toggleModal} />
                </ListItem>
              </List>
            </Drawer>
          </>
        ) : (
          // For desktop: Centered Navigation Tabs
          <Box
            sx={{
              display: "flex",
              gap: 2,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0, 0, 0, 0.1)",
              padding: "8px 8px",
              borderRadius: "10px",
                  fontFamily:'arial'
            }}
          >
            <StyledLink to="/">Home</StyledLink>
            <StyledLink to="/Services">Our Service</StyledLink>
            <StyledLink to="/about">About</StyledLink>
            <StyledLink to="/blogs">Blogs</StyledLink>
          </Box>
        )}

        {/* Request Button (Always visible) */}
        {!isMobile && <RequestButton onClick={toggleModal} />}
      </Toolbar>

      {/* Modal for Join Now */}


      <Dialog
        open={modalOpen}
        onClose={toggleModal}
        sx={{
          ".MuiPaper-root": {
            backgroundColor: "rgba(255, 255, 255, 0.15)", // Frosted glass background
            backdropFilter: "blur(15px)", // Strong frosted effect
            borderRadius: "30px",
            padding: "10px",
            paddingBottom: '15px',
            overflowY: 'hidden',
            boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)", // Soft shadow
            animation: "fadeIn 0.5s ease-out",
            alignItems: "center",
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
                ml: 3,

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
                ml: 3,
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
            <a href="https://twitter.com/YourTwitterHandle" target="_blank" rel="noopener noreferrer">
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
            <a href="https://instagram.com/YourInstagramUsername" target="_blank" rel="noopener noreferrer">
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
            <a href="https://www.linkedin.com/company/YourCompanyLinkedIn" target="_blank" rel="noopener noreferrer">
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
            <a href="https://www.youtube.com/channel/YourYouTubeChannel" target="_blank" rel="noopener noreferrer">
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
            <a href="https://wa.me/YourWhatsAppNumber" target="_blank" rel="noopener noreferrer">
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

    </AppBar>
  );
};

/* Styled Navigation Links */
function StyledLink({ to, children }) {
  return (
    <Link
      to={to}
      style={{
        display: "inline-block",
        padding: "10px 16px",
        fontSize: "18px",
        fontWeight: "bold",
        width: "120px",
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        color: "white",
        textDecoration: "none",
        borderRadius: "8px",
        clipPath: `polygon(
            0% 0%,    
            90% 0%,    
            100% 40%,  
            100% 100%, 
            10% 100%,  
            0% 60%
          )`,
        transition: "background-color 0.3s, color 0.3s",
      }}
    >
      {children}
    </Link>
  );
}

/* Request Button */
/* Request Button */
function RequestButton({ onClick }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#63B3ED", // Matches the blue color
        color: "white",
        padding: "10px 20px",
        fontWeight: "bold",
        fontSize: "20px",
        borderRadius: "8px",
        textTransform: "none",
        cursor: "pointer",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)", // Add slight shadow
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: "#4299E1", // Slightly darker blue on hover
        },
        clipPath: `polygon(
          0% 0%,    
          90% 0%,    
          100% 40%,  
          100% 100%, 
          10% 100%,  
          0% 60%
        )`,
      }}
      onClick={onClick}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "8px", // Space between icon and text
              fontFamily:'arial'
        }}
      >
        <FaUser size={16} /> {/* Icon on the left */}
        Join Us
      </Box>
    </Box>
  );
}


export default Header;
