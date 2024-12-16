import React, { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { CheckCircleOutline, Code, People, GroupWork } from "@mui/icons-material";

function Home() {
    const [percentage, setPercentage] = useState(1); // Track percentage
    const [visible, setVisible] = useState(true); // Track visibility of the animation
    const [fadeOut, setFadeOut] = useState(false); // Trigger fade-up animation
    const [step, setStep] = useState(0); // Track the current step of content display
    const [animatedCount, setAnimatedCount] = useState(0); // For animated count

    useEffect(() => {
        let start = 1; // Starting percentage
        const end = 100; // Final percentage
        const duration = 2000; // Duration of percentage animation in milliseconds
        const stepIncrement = (end - start) / (duration / 30); // Increment step for percentage

        const timer = setInterval(() => {
            start += stepIncrement;
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

        // Hide the percentage animation box completely after fade-up animation ends
        setTimeout(() => {
            setVisible(false); // Remove from DOM
            setStep(1); // Show the first content after animation
        }, 4000); // Total of 3 seconds: 1-second delay + 2 seconds fade-up animation

        return () => {
            clearInterval(timer); // Cleanup percentage timer
        };
    }, []);

    // Show subsequent content with animations
    useEffect(() => {
        if (step > 0) {
            const timer = setTimeout(() => {
                setStep((prevStep) => prevStep + 1);
            }, 1000); // Delay between content fades
            return () => clearTimeout(timer);
        }
    }, [step]);

    // Animate count for 50+
    useEffect(() => {
        if (step === 3) {
            let count = 0;
            const countTimer = setInterval(() => {
                count += 1;
                setAnimatedCount(count);
                if (count >= 50) {
                    clearInterval(countTimer); // Stop animation at 50
                }
            }, 50); // Increment every 50ms
            return () => clearInterval(countTimer);
        }
    }, [step]);

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                height: "100vh",

                color: "white",
                overflow: "hidden",
                padding: "20px",
                textAlign: "center",
            }}
        >
            {/* Percentage Animation */}
            {visible && (
                <Box
                    sx={{
                        position: "relative",
                        width: "300px",
                        height: "300px",
                        mt: '-100%',
                        backgroundColor: "rgba(255, 255, 255, 0.1)", // Frosted glass background
                        backdropFilter: "blur(5px)", // Frosted glass effect
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
                                width: "60px",
                                height: "60px",
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
                                    fontSize: "18px",
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
                            bottom: "20px", // Adjusted to create better spacing
                            left: "50%",
                            transform: "translateX(-50%)", // Center horizontally
                            textAlign: "center",
                            padding: "0px",
                        }}
                    >
                        <Typography
                            sx={{
                                fontSize: "20px",
                                fontWeight: "bold",
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
                                    marginTop: "100px", // Add spacing between lines
                                    fontSize: "13px",
                                    fontWeight: "400",
                                    color: "rgba(255, 255, 255, 0.8)", // Slightly muted white
                                }}
                            >
                                We’re here to empower world businesses with cutting-edge
                                software solutions, crafted to drive success and innovation.
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
            )}

            {/* Sequential Content */}
            {step >= 1 && (
                <Typography
                    sx={{
                        p: 2,
                        borderRadius: "10px",
                        backgroundColor: "rgba(0, 0, 0, 0.1)", // Semi-transparent white
                        backdropFilter: "blur(3px)", // Frosted glass effect
                        fontSize: "18px",
                        fontWeight: "bold",
                        animation: "fadeInUp 1.5s cubic-bezier(0.42, 0, 0.58, 1)", // Smooth easing
                        mt: -25,
                        "@keyframes fadeInUp": {
                            "0%": { opacity: 0, transform: "translateY(40px)" }, // Start further down for smooth entry
                            "50%": { opacity: 0.5, transform: "translateY(20px)" }, // Intermediate step for gradual motion
                            "100%": { opacity: 1, transform: "translateY(0)" }, // Final position
                        },
                    }}
                >
                    <GroupWork sx={{ fontSize: "25px", verticalAlign: "middle", mr: 1 }} />
                    Let’s Build Something Great Together <br /> Get a Free Consultation.
                </Typography>
            )}

            {step >= 2 && (
                <Typography
                    sx={{
                        p: 2,
                        borderRadius: "5px",
                        backgroundColor: "rgba(0, 0, 0, 0.1)",  // Semi-transparent white
                        backdropFilter: "blur(3px)",
                        fontSize: "18px",
                        fontWeight: "bold",
                        animation: "fadeInUp 1.5s cubic-bezier(0.42, 0, 0.58, 1)", // Smooth easing
                        mt: 2,
                        "@keyframes fadeInUp": {
                            "0%": { opacity: 0, transform: "translateY(40px)" },
                            "50%": { opacity: 0.5, transform: "translateY(20px)" },
                            "100%": { opacity: 1, transform: "translateY(0)" },
                        },
                    }}
                >
                    <Code sx={{ fontSize: "32px", verticalAlign: "middle", mr: 1 }} />
                    Where Talent Meets Technology <br /> Innovating Your Future.
                </Typography>
            )}

            {step >= 3 && (
                <Box
                    sx={{
                        mt: 2,
                        p: 2,
                        borderRadius: "5px",
                        backgroundColor: "rgba(0, 0, 0, 0.1)",  // Semi-transparent white
                        backdropFilter: "blur(3px)",
                        textAlign: "center",
                        animation: "fadeInUp 1.5s cubic-bezier(0.42, 0, 0.58, 1)", // Smooth easing
                        "@keyframes fadeInUp": {
                            "0%": { opacity: 0, transform: "translateY(40px)" },
                            "50%": { opacity: 0.5, transform: "translateY(20px)" },
                            "100%": { opacity: 1, transform: "translateY(0)" },
                        },
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: "18px",
                            fontWeight: "bold",
                            mb: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <CheckCircleOutline sx={{ fontSize: "32px", mr: 1 }} />
                        {animatedCount}+ Successful Projects Delivered
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            mb: 1,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <Code sx={{ fontSize: "32px", mr: 1 }} />
                        A Talented Team of Developers, Designers
                    </Typography>
                    <Typography
                        sx={{
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <People sx={{ fontSize: "32px", mr: 1 }} />
                        & Problem Solvers
                    </Typography>
                </Box>
            )}

        </Box>
    );
}

export default Home;
