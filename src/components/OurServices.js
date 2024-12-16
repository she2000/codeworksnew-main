import React, { useEffect } from "react";
import { Box, Typography, Grid } from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";

function OurServices() {
    useEffect(() => {
        const sections = document.querySelectorAll(".fade-in");
        sections.forEach((section, index) => {
            setTimeout(() => {
                section.style.opacity = 1;
                section.style.transform = "translateY(0)";
            }, index * 500); // Stagger animations
        });
    }, []);

    const services = [
        {
            title: "Custom Software Development",
            description:
                "Tailored solutions built from the ground up to meet your specific business needs, delivering seamless performance and scalability.",
        },
        {
            title: "UI/UX  Design",
            description:
                "Crafting visually stunning and user-friendly interfaces to enhance user engagement and ensure an exceptional digital experience.",
        },
        {
            title: "AI & Automation Solutions",
            description:
                "Integrating intelligent automation and machine learning to streamline workflows, reduce costs, and improve decision-making.",
        },
        {
            title: "Cloud Integration",
            description:
                "Empowering your business with secure, scalable, and efficient cloud solutions to drive innovation and operational excellence.",
        },
    ];

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",


                padding: { xs: "20px", sm: "10px", md: "40px" },
            }}
        >
            <Grid
                container
                spacing={3}
                sx={{
                    maxWidth: { xs: "100%", md: "100%", lg: "80%" }, // Dynamic width adjustment for responsiveness
                }}
            >
                {/* Left Column */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            padding: { xs: "15px", sm: "20px" },
                            borderRadius: 2,
                            backgroundColor: "rgba(255, 255, 255, 0.3)",
                            backdropFilter: "blur(10px)",
                            animation: "fadeSlideUp 1s ease-in-out forwards",
                            "@keyframes fadeSlideUp": {
                                "0%": { opacity: 0, transform: "translateY(50px)" },
                                "100%": { opacity: 1, transform: "translateY(0)" },
                            },
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                marginBottom: "20px",
                                fontSize: { xs: "1.3rem", sm: "1.5rem" },
                                textAlign: "left",
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                            }}
                        >
                            <RocketLaunchIcon sx={{ fontSize: "1.5rem", color: "#1976D2" }} />
                            Why Choose CodeWorks
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "0.9rem", sm: "1rem" },
                                textAlign: "justify",
                                lineHeight: 1.6,
                                color: "rgba(0, 0, 0, 0.8)",
                            }}
                        >
                            <strong style={{ color: "#0056b3" }}>Exceptional Talent:</strong>{" "}
                            Our team comprises innovators, developers, and designers with a
                            proven track record of delivering impactful solutions across
                            industries. <br />
                            <br />
                            <strong style={{ color: "#0056b3" }}>Agile Methodology:</strong>{" "}
                            We embrace an agile approach to development, ensuring iterative
                            progress, transparency, and high-quality outcomes. <br />
                            <br />
                            <strong style={{ color: "#0056b3" }}>Cutting-Edge Solutions:</strong>{" "}
                            Leveraging the latest technologies to build scalable, future-ready
                            solutions tailored to your vision.
                        </Typography>
                    </Box>

                    <Box sx={{ marginTop: "20px", textAlign: "center", backgroundColor:"rgba(255, 255, 255, 0.3)", padding:"15px", borderRadius:"8px" ,  animation: "fadeSlideUp 1s ease-in-out forwards",
                            "@keyframes fadeSlideUp": {
                                "0%": { opacity: 0, transform: "translateY(50px)" },
                                "100%": { opacity: 1, transform: "translateY(0)" },
                            },


                    }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: "bold",
                                color: "#0056b3",
                                marginBottom: "10px",
                                fontSize: { xs: "1rem", sm: "1.2rem" },
                                animation: "fadeSlideUp 1s ease-in-out forwards",
                                "@keyframes fadeSlideUp": {
                                    "0%": { opacity: 0, transform: "translateY(50px)" },
                                    "100%": { opacity: 1, transform: "translateY(0)" },
                                },
                            }}
                        >
                            Ready to Transform Your Business?
                        </Typography>
                        <Typography
                            sx={{
                                fontSize: { xs: "0.75rem", sm: "1rem" },
                                lineHeight: 1.5,
                                color: "rgba(0, 0, 0, 0.8)",
                                animation: "fadeSlideUp 1.5s ease-in-out forwards",
                                "@keyframes fadeSlideUp": {
                                    "0%": { opacity: 0, transform: "translateY(50px)" },
                                    "100%": { opacity: 1, transform: "translateY(0)" },
                                },
                            }}
                        >
                            Contact us today to discuss your project and discover how we can help you achieve your goals.
                        </Typography>
                        <Box
                            sx={{
                                marginTop: "10px",
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Box
                                component="button"
                                sx={{
                                    padding: "10px 20px",
                                    backgroundColor: "#1976D2",
                                    color: "#fff",
                                    borderRadius: "5px",
                                    fontSize: { xs: "0.75rem", sm: "0.85rem" },
                                    cursor: "pointer",
                                    border: "none",
                                    "&:hover": { backgroundColor: "#0056b3" },
                                    animation: "fadeSlideUp 2s ease-in-out forwards",
                                    "@keyframes fadeSlideUp": {
                                        "0%": { opacity: 0, transform: "translateY(50px)" },
                                        "100%": { opacity: 1, transform: "translateY(0)" },
                                    },
                                    
                                }}
                            >
                                Contact Us
                            </Box>
                        </Box>
                    </Box>

                </Grid>

                {/* Right Column */}
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            padding: { xs: "15px", sm: "20px" },
                            borderRadius: 2,
                            backgroundColor: "rgba(255, 255, 255, 0.6)",
                            backdropFilter: "blur(10px)",
                            animation: "fadeSlideUp 1s ease-in-out forwards",
                            "@keyframes fadeSlideUp": {
                                "0%": { opacity: 0, transform: "translateY(50px)" },
                                "100%": { opacity: 1, transform: "translateY(0)" },
                            },
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontWeight: "bold",
                                marginBottom: "20px",
                                fontSize: { xs: "1.2rem", sm: "1.5rem" },
                                textAlign: "center",
                            }}
                        >
                            What We Offer
                        </Typography>
                        <Grid container spacing={2}>
                            {services.map((service, index) => (
                                <Grid
                                    item
                                    xs={12}
                                    sm={6}
                                    key={index}
                                    sx={{
                                        opacity: 0,
                                        transform: "translateY(50px)",
                                        animation: `fadeSlideUp 1s ease-in-out forwards`,
                                        animationDelay: `${index * 0.2}s`,
                                    }}
                                >
                                    <Box
                                        sx={{
                                            padding: "15px",
                                            backgroundColor: "rgba(0, 123, 255, 0.1)",
                                            borderRadius: "5px",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                transform: "scale(1.03)",
                                                backgroundColor: "rgba(0, 123, 255, 0.2)",
                                            },
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            sx={{
                                                fontWeight: "bold",
                                                color: "#0056b3",
                                                marginBottom: "10px",
                                                fontSize: { xs: "0.9rem", sm: "1rem" },
                                            }}
                                        >
                                            {service.title}
                                        </Typography>
                                        <Typography
                                            sx={{
                                                textAlign: 'justify',
                                                fontSize: { xs: "0.9rem", sm: "0.9rem" },
                                                lineHeight: 1.2,
                                                color: "rgba(0, 0, 0, 0.7)",
                                            }}
                                        >
                                            {service.description}
                                        </Typography>
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

export default OurServices;
