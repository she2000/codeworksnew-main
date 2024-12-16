import React from "react";
import { Box, Typography, Card, Grid } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import InsightsIcon from "@mui/icons-material/Insights";
import BuildIcon from "@mui/icons-material/Build";
import ScheduleIcon from "@mui/icons-material/Schedule";
import PeopleIcon from "@mui/icons-material/People";

const Blogs = () => {
  const portfolioItems = [
    {
      title: "Technical Portal",
      description:
        "In-house-built portal to replace high-cost external systems. Eliminated product purchasing and maintenance costs. Direct sales to IT service providers and enterprises globally.",
      icon: <BuildIcon sx={{ fontSize: "2.5rem", color: "#1976D2" }} />,
    },
    {
      title: "Visitor Management System",
      description:
        "Completed development and deployment. Automation reduces staffing costs, time management, and creates a scalable product for the global market.",
      icon: <PeopleIcon sx={{ fontSize: "2.5rem", color: "#1976D2" }} />,
    },
    {
      title: "Connex IT Site",
      description:
        "Unified 8 sites with centralized admin portals. Reduced hosting, maintenance, and legacy system expenses. Quick updates and adaptable design.",
      icon: <TrendingUpIcon sx={{ fontSize: "2.5rem", color: "#1976D2" }} />,
    },
    {
      title: "Partner/Marketing/Sale Portals",
      description:
        "Innovative system to replace manual processes. Revenue opportunity through sellable product with maintenance options.",
      icon: <WorkOutlineIcon sx={{ fontSize: "2.5rem", color: "#1976D2" }} />,
    },
    {
      title: "TrendMicro Implementation",
      description:
        "Implementation delivering unparalleled revenue impact. Visualized with revenue growth linked to TrendMicro.",
      icon: <InsightsIcon sx={{ fontSize: "2.5rem", color: "#1976D2" }} />,
    },
    {
      title: "Digital Signature Board",
      description:
        "Multimedia management system for banners, videos, etc. Scalable solution avoids external developer costs. Sellable as a customizable product.",
      icon: <EventAvailableIcon sx={{ fontSize: "2.5rem", color: "#1976D2" }} />,
    },
    {
      title: "Event Registration Feature",
      description:
        "Automated event registration process. Reduced workload for marketing/sales teams. Streamlined operations and saved time.",
      icon: <ScheduleIcon sx={{ fontSize: "2.5rem", color: "#1976D2" }} />,
    },
    {
      title: "HRIS (Human Resource Information System)",
      description:
        "Custom HR application developed in-house. Avoided external HR system purchase. Sellable as a customizable HR solution.",
      icon: <PeopleIcon sx={{ fontSize: "2.5rem", color: "#1976D2" }} />,
    },
    {
      title: "Meeting Schedule App",
      description:
        "Enhanced scheduling and management of team meetings. Improved productivity and streamlined communication.",
      icon: <ScheduleIcon sx={{ fontSize: "2.5rem", color: "#1976D2" }} />,
    },
    {
      title: "Forecast System",
      description:
        "Advanced system replacing Excel-based scenarios. Eliminates recurring payments for project management tools.",
      icon: <TrendingUpIcon sx={{ fontSize: "2.5rem", color: "#1976D2" }} />,
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        mt: 5,
        px: 5,
        py: 5,
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(10px)",
      }}
    >
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          marginBottom: "30px",
          textAlign: "center",
          color: "white",
          animation: "fadeSlideUp 1s ease-in-out forwards",
          "@keyframes fadeSlideUp": {
            "0%": { opacity: 0, transform: "translateY(50px)" },
            "100%": { opacity: 1, transform: "translateY(0)" },
          },
        }}
      >
        Our Portfolio
      </Typography>
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        style={{ width: "100%", maxWidth: "1200px" }}

      >
        {portfolioItems.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                padding: "20px",
                borderRadius: "15px",
                boxShadow: "none",
                background: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(10px)", // Frosted glass effect
                textAlign: "center",
                height: 220,
                animation: "fadeSlideUp 1s ease-in-out forwards",
                "@keyframes fadeSlideUp": {
                  "0%": { opacity: 0, transform: "translateY(50px)" },
                  "100%": { opacity: 1, transform: "translateY(0)" },
                },
              }}
            >
              {item.icon}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  marginTop: "15px",
                  marginBottom: "10px",
                  color: "#0056b3",
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: "0.9rem",
                  lineHeight: 1.6,
                  color: "rgba(0, 0, 0, 0.8)",
                }}
              >
                {item.description}
              </Typography>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
};

export default Blogs;
