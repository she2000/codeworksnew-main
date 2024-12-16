import React, { useEffect, useState } from "react";
import {
    Box,
    Typography,
    Grid,
    Avatar,
    Card,
    CardContent,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
} from "@mui/lab";
import PeopleIcon from "@mui/icons-material/People";
import CodeIcon from "@mui/icons-material/Code";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { keyframes } from "@emotion/react";
import shehan from "../../Image/Shehan.png";
import Shenal from "../../Image/Shenal-removebg-preview.png";
import Rivindu from '../../Image/Rivindu-removebg-preview.png';
import Nirosh from '../../Image/nirosh-removebg-preview.png';
import Ravindu from "../../Image/Ravindu-removebg-preview.png";
import Abhi from "../../Image/Abhi.png";
import Sadula from "../../Image/Sadula.png";
import Chulani from "../../Image/Chulani-removebg-preview.png";

const fadeInUp = keyframes`
  0% { opacity: 0; transform: translateY(20px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const slideIn = keyframes`
  0% { opacity: 0; transform: translateX(100%); }
  100% { opacity: 1; transform: translateX(0); }
`;

const About = () => { 
    const teamMembers = [
        {
          name: "Shehan Karunathilake",
          techStack: "React + Node.js",
          experience: "8+ years in application development.",
          avatar: shehan,
        },
        {
          name: "A. Shenal Perera",
          techStack: "Vue + Django",
          experience: "9+ years in application development.",
          avatar: Shenal,
        },
        {
          name: "Rivindu Amarasinghe",
          techStack: "Angular + Java",
          experience: "10+ years in application development.",
          avatar: Rivindu,
        },
        {
          name: "Nirosh Madushan",
          techStack: "React + Node.js",
          experience: "8+ years in application development.",
          avatar: Nirosh,
        },
        {
          name: "Ravidu Nalawatta",
          techStack: "Vue + Django",
          experience: "9+ years in application development.",
          avatar: Ravindu,
        },
        {
          name: "Abevarzene Sutharshon",
          techStack: "Angular + Java",
          experience: "10+ years in application development.",
          avatar: Abhi,
        },
        {
          name: "Sadula Fernando",
          techStack: "Specialist",
          experience: "5+ years in magical solutions.",
          avatar: Sadula,
        },
        {
          name: "Chulani Vimukthi",
          techStack: "Specialist",
          experience: "5+ years in magical solutions.",
          avatar: Chulani
        },
    
        {
          name: "Nirosh Madushan",
          techStack: "React + Node.js",
          experience: "8+ years in application development.",
          avatar: Nirosh,
        },
      ];

    const [visibleIndex, setVisibleIndex] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setVisibleIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
        }, 3000); // Auto-scroll cards every 3 seconds
        return () => clearInterval(interval);
    }, [teamMembers.length]);

    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box
            sx={{
                padding: "15px",
                paddingTop: '50px',
                borderRadius: '10px',
               
                color: "white",
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                gap: 6,
            }}
        >
            {/* Mission Section */}
            <Box
                sx={{
                    textAlign: "center",
                    p:3,
                    borderRadius:'10px',
                    backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                    backdropFilter: "blur(5px)", // Frosted glass effect
                    
                    animation: `${fadeInUp} 1s ease-in-out`,
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                    <RocketLaunchIcon sx={{ fontSize: "40px", mb: -1 }} /> Our Mission
                </Typography>
                <Typography variant="h6" sx={{ lineHeight: 1.4, color: "rgba(255, 255, 255, 0.9)" }}>
                    “At CodeWorks, we merge creativity, technical expertise, and a love for solving challenges to deliver world-class software solutions.”
                </Typography>
            </Box>

            {/* Journey Section */}
            <Box
                sx={{
                    animation: `${fadeInUp} 1.5s ease-in-out`,
                    pt:2,
                    borderRadius:'10px',
                    backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                    backdropFilter: "blur(5px)", // Frosted glass effect
                }}
            >
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 4,textAlign: "center" }}>
                    <PeopleIcon sx={{ fontSize: "40px", mb: -1 }} /> Our Journey
                </Typography>
                <Timeline position={isMobile ? "right" : "alternate"} sx={{ mt:2, mr: 20 }}>
                    <TimelineItem >
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <PeopleIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent >
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                Founded in 2024
                            </Typography>
                            <Typography sx={{ width: '200px' }}>Small but passionate team of developers innovating solutions.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <CodeIcon />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                Expanded Global Reach
                            </Typography>
                            <Typography sx={{ width: '200px' }}>Partnered with clients to deliver enterprise-grade applications.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="primary">
                                <RocketLaunchIcon />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                                50+ Successful Projects Delivered
                            </Typography>
                            <Typography sx={{ width: '200px' }}>Innovating and empowering businesses worldwide.</Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>

            {/* Meet the Team */}
            <Box
                sx={{
                    p:3,
                    borderRadius:'10px',
                    backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                    backdropFilter: "blur(5px)", // Frosted glass effect
                    // WebkitBackdropFilter: "blur(100000px)",
                    textAlign: "center",
                    animation: `${fadeInUp} 2s ease-in-out`,
                    mb: 4, // Added margin for better spacing
                }}
            >
                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold",
                        mb: 3,
                    }}
                >
                    Meet the Team
                </Typography>
                <Box
                    sx={{
                        
                        display: "flex",
                        gap: 3,
                        overflowX: "auto",
                        scrollBehavior: "smooth",
                        paddingBottom: 2,
                        "&::-webkit-scrollbar": {
                            display: "none", // Hides scrollbar for better aesthetics
                        },
                        msOverflowStyle: "none", // IE and Edge scrollbar hiding
                        scrollbarWidth: "none", // Firefox scrollbar hiding
                    }}
                >
                    {teamMembers.map((member, index) => (
                        <Card
                            key={index}
                            sx={{
                                textAlign: "center",
                                background: "rgba(255, 255, 255, 0.1)",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10000px)",
                                color: "white",
                                boxShadow:'none',
                                ml:3,
                                mt:2,
                                mb:5,
                                padding: 2,
                                borderRadius: "16px",
                                minWidth: "200px", // Fixed width for smaller cards
                                maxWidth: "200px",
                                flex: "0 0 auto", // Ensures horizontal alignment
                                animation: `${slideIn} 1.5s ease-in-out`,
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "scale(1.1)", // Hover effect for interaction
                                },
                            }}
                        >
                            <Avatar
                                src={member.avatar}
                                alt={member.name}
                                sx={{
                                    width: 70,
                                    height: 70,
                                    margin: "0 auto 10px",
                                    boxShadow: "0px 4px 6px rgba(255, 255, 255, 0.2)", // Adds depth to avatar
                                }}
                            />
                            <CardContent>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        fontWeight: "bold",
                                        mb: 0.5,
                                        fontSize: "1rem",
                                        color:"black"
                                    }}
                                >
                                    {member.name}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.8)",
                                        mb: 0.5,
                                        fontSize: "0.8rem", // Slightly smaller font for tech stack
                                    }}
                                >
                                    {member.techStack}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        color: "rgba(255, 255, 255, 0.6)",
                                        fontSize: "0.75rem",
                                    }}
                                >
                                    {member.experience}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))}
                </Box>
            </Box>

        </Box>
    );
};

export default About;
