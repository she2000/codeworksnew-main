import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

// Replace { icon: "📘", label: "Facebook" } with { icon: <FacebookIcon />, label: "Facebook" }

function Home() {
  const [percentage, setPercentage] = useState(1); // Track percentage
  const [visible, setVisible] = useState(true); // Track visibility of the middle box
  const [fadeOut, setFadeOut] = useState(false); // Trigger fade-up animation
  const [count, setCount] = useState(1); // Count for animation

  useEffect(() => {
    let start = 1; // Starting percentage
    const end = 99; // Final percentage
    const duration = 2000; // Duration of percentage animation in milliseconds
    const step = (end - start) / (duration / 30); // Increment step for percentage

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        clearInterval(timer);
        start = end;

        // Trigger fade-up animation after percentage completes
        setTimeout(() => {
          setFadeOut(true); // Start fade-up animation
        }, 1000); // 1-second delay after percentage animation ends
      }
      setPercentage(Math.round(start)); // Update percentage state
    }, 30);

    // Hide the box completely after fade-up animation ends
    setTimeout(() => {
      setVisible(false); // Remove from DOM
    }, 4000); // Total of 3 seconds: 1-second delay + 2 seconds fade-up animation

    // Count animation for 1–50+
    const countInterval = setInterval(() => {
      setCount((prev) => {
        if (prev >= 50) {
          clearInterval(countInterval);
          return 50; // Stop at 50+
        }
        return prev + 1;
      });
    }, 60); // Update every 60ms for smooth animation

    return () => {
      clearInterval(timer); // Cleanup percentage timer
      clearInterval(countInterval); // Cleanup count timer
    };
  }, []);

  return (
    <div>   {visible && (
      <Box
        sx={{
          flex: 1,
          mt: 10,
          textAlign: "center",
          position: "relative",
          width: "450px",
          height: "350px",
          backgroundColor: "rgba(255, 255, 255, 0.1)", // Semi-transparent white
          backdropFilter: "blur(15px)", // Frosted glass effect
          borderRadius: "20px",
          padding: "20px",
          border: "2px solid rgba(255, 255, 255, 0.3)", // Subtle border
          animation: fadeOut
            ? "fadeUp 1.8s cubic-bezier(0.42, 0, 0.58, 1) forwards" // Smooth fade-up
            : "none",
          "@keyframes fadeUp": {
            "0%": { opacity: 1, transform: "translateY(0)" },
            "100%": { opacity: 0, transform: "translateY(-30px)" }, // Smooth upward fade
          },
        }}
      >
        {/* Circular Progress */}
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          {/* Outer Rotating Circle */}
          <Box
            sx={{
              width: "100px",
              height: "100px",
              border: "10px solid rgba(255, 255, 255, 0.2)", // Background ring
              borderTop: "10px solid white", // Active progress in white
              borderRadius: "50%",
              animation: "spin 2s linear infinite", // Rotating animation
              "@keyframes spin": {
                "0%": { transform: "rotate(0deg)" },
                "100%": { transform: "rotate(360deg)" },
              },
            }}
          ></Box>

          {/* Inner Static Circle */}
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              backgroundColor: "rgba(255, 255, 255, 0.2)", // Inner transparent circle
            }}
          >
            {/* Percentage in the Center */}
            <Typography
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)", // Center text in circle
                fontSize: "25px",
                fontWeight: "bold",
                color: "white", // White percentage text
              }}
            >
              {percentage}%
            </Typography>
          </Box>
        </Box>

        {/* Bottom Text */}
        <Box
          sx={{
            position: "absolute",
            bottom: "30px", // Adjusted to create better spacing
            left: "50%",
            transform: "translateX(-50%)", // Center horizontally
            textAlign: "center",
            padding: "0px",
          }}
        >
          <Typography
            sx={{
              fontSize: "25px",
              fontWeight: "bold",
              mt: 5,
              lineHeight: 1.5,
              color: "white", // White text for readability
              animation: "fadeInUp 2.5s ease-in-out", // Text fade-in and slide-up
              "@keyframes fadeInUp": {
                "0%": { opacity: 0, transform: "translateY(20px)" },
                "100%": { opacity: 1, transform: "translateY(0)" },
              },
            }}
          >
            Welcome to Code Works! <br />
            <Typography
              component="span"
              sx={{
                display: "block", // Make text stack vertically
                marginTop: "150px", // Add spacing between lines
                fontSize: "15px",
                fontWeight: "400",
                color: "rgba(255, 255, 255, 0.8)", // Slightly muted white
              }}
            >
              We’re here to empower world businesses
              with cutting-edge software solutions,
              crafted to drive success and innovation.
            </Typography>
          </Typography>
        </Box>
      </Box>
    )}
      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          right: 10,
          width: "200px",
          height: "20px",
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(10px)",
          borderRadius: "15px",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          textAlign: "center",
          padding: "10px 10px",
        }}
      >
        {[
          { icon: FacebookIcon, label: "Facebook", url: "https://www.facebook.com/share/1EKdqvRXFh/?mibextid=LQQJ4d" },
          { icon: TwitterIcon, label: "Twitter" },
          { icon: InstagramIcon, label: "Instagram" },
          { icon: LinkedInIcon, label: "LinkedIn" , url:"https://linkedin.com"},
          { icon: YouTubeIcon, label: "YouTube" },
          { icon: WhatsAppIcon, label: "WhatsApp" },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              width: "50px",
              height: "30px",
              mr: '5px',
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "10px",
              transition: "all 0.3s ease-in-out",
              cursor: "pointer",
              color: 'white',
              "&:hover": {
                backgroundColor: "white",
                transform: "scale(1.1)",
                color: '#4eb5e2'
              },
            }}
            title={item.label}
          >
            {/* Wrap icon with a link if url is provided */}
            {item.url ? (
              <a href={item.url} target="_blank" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', width: '100%', color: 'inherit', textDecoration: 'none' }}>
                <item.icon sx={{ fontSize: "20px" }} />
              </a>
            ) : (
              <item.icon sx={{ fontSize: "20px" }} />
            )}
          </Box>
        ))}
      </Box>


      <Box
        sx={{
          position: "absolute",
          bottom: 10,
          left: 10,
          width: "200px",
          height: "100px",

          backgroundColor: "rgba(0, 0, 0, 0.2)", // Semi-transparent white
          backdropFilter: "blur(10px)", // Frosted glass effect
          borderRadius: "20px", // Smoothly rounded corners
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          padding: "10px",
          clipPath: `
      polygon(
        0% 0%,    /* Top-Left: Rounded */
        80% 0%,    /* Top-Right: Cut */
        100% 30%,  /* Right Chevron */
        100% 100%, /* Bottom-Right: Rounded */
        20% 100%,  /* Bottom-Left: Cut */
        0% 70%     /* Chevron Point */
      )
    `,
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.01)", // Subtle shadow for depth
        }}
      >
        {/* Animated Count */}
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            color: "white", // White text for readability
          }}
        >
          {count}+
        </Typography>

        {/* Supporting Text */}
        <Typography
          sx={{
            fontSize: "10px",
            fontWeight: "500",
            color: "rgba(255, 255, 255, 0.9)", // Softer white

            lineHeight: 1.5,
          }}
        >
          Successful Projects Delivered <br />
          A Talented Team of Developers, Designers <br />
          & Problem Solvers
        </Typography>
      </Box>
      {/* Right Section */}
      <Box sx={{ flex: 1, textAlign: "right" }}>
        <Typography
          variant="h5"
          sx={{
            fontSize: "24px",
            fontWeight: "bold",
            maxWidth: "300px",
            marginLeft: "auto",
            position: "absolute",
            bottom: '50%',
            color: 'white',
            right: 20,
          }}
        >
          Let’s Build Something Great Together Get a Free Consultation.
        </Typography>
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography
          variant="h4"
          sx={{
            fontSize: "25px",
            fontWeight: "bold",
            maxWidth: "300px",
            lineHeight: 1.5,
            position: "absolute",
            bottom: '50%',
            color: 'white',
            left: 20,
          }}
        >
          Where Talent Meets Technology Innovating Your Future.
        </Typography>
      </Box>
    </div>
  )
}

export default Home