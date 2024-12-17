import { Box, Typography, Grid, Avatar } from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from "@mui/lab";
import PeopleIcon from "@mui/icons-material/People";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { keyframes } from "@emotion/react";
import React, { useEffect, useState } from "react";
import shehan from "../Image/Shehan.png";
import Shenal from "../Image/Shenal-removebg-preview.png";
import Rivindu from "../Image/Rivindu-removebg-preview.png";
import Nirosh from "../Image/nirosh-removebg-preview.png";
import Ravindu from "../Image/Ravindu-removebg-preview.png";
import Abhi from "../Image/Abhi.png";
import Sadula from "../Image/Sadula.png";
import Chulani from "../Image/Chulani-removebg-preview.png";

const scrollAnimation = keyframes`
  0% { transform: translateX(100%); opacity: 0; }
  25% { transform: translateX(0); opacity: 1; }
  75% { transform: translateX(0); opacity: 1; }
  100% { transform: translateX(-100%); opacity: 0; }
`;

function About() {
  const teamMembers = [
    {
      name: "Shehan Karunathilake",
      role: "Team Lead",
      avatar: shehan,
    },
    {
      name: "A. Shenal Perera",
      role: "Associate Lead",
      avatar: Shenal,
    },
    {
      name: "Rivindu Amarasinghe",
      role: "Developer",
      avatar: Rivindu,
    },
    {
      name: "Nirosh Madushan",
      role: "Developer",
      avatar: Nirosh,
    },
    {
      name: "Ravidu Nalawatta",
      role: "Developer",
      avatar: Ravindu,
    },
    {
      name: "Abivarzene Sutharshon",
      role: "Developer",
      avatar: Abhi,
    },
    {
      name: "Sadula Fernando",
      role: "Developer",
      avatar: Sadula,
    },
    {
      name: "Chulani Vimukthi",
      role: "Developer",
      avatar: Chulani,
    },
  ];

  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 3) % teamMembers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [teamMembers.length]);

  return (
    <Box
      sx={{
        position: "relative",
        color: "black",
        padding: "50px 20px",
        borderRadius: "25px",
        width: "90%",
        m: "auto",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Grid container spacing={4}>
        {/* Left Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: "20px" }}>
            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                fontSize: "1.25rem",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <RocketLaunchIcon sx={{ fontSize: "2.5rem", color: "#1976D2" }} /> Our Mission
            </Typography>
            <Typography
              sx={{
                fontSize: "1rem",
                lineHeight: 1.8,
                marginBottom: "40px",
                color: "rgba(0, 0, 0, 0.7)",
              }}
            >
              “At CodeWorks, we merge creativity, technical expertise, and a love for solving challenges to deliver
              world-class software solutions.”
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                fontSize: "1.25rem",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <PeopleIcon sx={{ fontSize: "2.5rem", color: "#1976D2" }} /> Our Journey
            </Typography>
            <Timeline sx={{ marginTop: -6, paddingLeft: "10px" }}>
              {[
                {
                  icon: <PeopleIcon sx={{ fontSize: "1.5rem" }} />,
                  title: "Founded in 2024",
                  description: "A small but passionate team of developers came together to create innovative solutions.",
                },
                {
                  icon: <CodeIcon sx={{ fontSize: "1.5rem" }} />,
                  title: "Expanded Global Reach",
                  description: "Partnered with global clients to deliver enterprise-grade applications.",
                },
                {
                  icon: <RocketLaunchIcon sx={{ fontSize: "1.5rem" }} />,
                  title: "50+ Successful Projects Delivered",
                  description: "Today, CodeWorks continues to innovate and empower businesses globally.",
                },
              ].map((event, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot color="primary">{event.icon}</TimelineDot>
                    {index < 2 && <TimelineConnector />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        fontSize: "1rem",
                        color: "black",
                      }}
                    >
                      {event.title}
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "rgba(0, 0, 0, 0.7)" }}>{event.description}</Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Box>
        </Grid>

        {/* Right Column */}
        <Grid item xs={12} md={6}>
          <Box sx={{ padding: "20px", overflow: "hidden", position: "relative" }}>
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Meet the Team
            </Typography>
            <Grid container justifyContent="center" spacing={3}>
              {teamMembers.slice(visibleIndex, visibleIndex + 3).map((member, index) => (
                <Grid
                  item
                  xs={12}
                  sm={6}
                  md={4}
                  key={index}
                  sx={{
                    animation: `fadeInSlide 1.5s ease-in-out forwards`,
                    "@keyframes fadeInSlide": {
                      "0%": { opacity: 0, transform: "translateY(20px)" },
                      "100%": { opacity: 1, transform: "translateY(0)" },
                    },
                  }}
                >
                  <Box
                    sx={{
                      textAlign: "center",
                      backgroundColor: "rgba(255, 255, 255, 0.2)",
                      backdropFilter: "blur(10px)",
                      padding: "20px",
                      borderRadius: "20px",
                      border: "2px solid rgba(0, 0, 0, 0.2)",
                      transition: "transform 0.3s ease",
                      "&:hover": {
                        transform: "scale(1.05)",
                      },
                    }}
                  >
                    <Avatar
                      sx={{
                        width: 80,
                        height: 80,
                        margin: "0 auto",
                        marginBottom: "15px",
                      }}
                      src={member.avatar}
                    />
                    <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: "1rem" }}>
                      {member.name}
                    </Typography>
                    <Typography sx={{ fontSize: "0.8rem", color: "rgba(0, 0, 0, 0.7)" }}>{member.role}</Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
