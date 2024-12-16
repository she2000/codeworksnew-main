import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import { motion } from "framer-motion"; // Animation library
import {
    People,
    Loop,
    Lightbulb,
    Code,
    DesignServices,
    Cloud,
    SmartToy,
} from "@mui/icons-material"; // Material Icons
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import LocalOfferIcon from "@mui/icons-material/LocalOffer"; // Icon import

const fadeUpAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

function ServicePage() {
    return (
        <Box sx={{ padding: 3, }}>
            {/* Why Choose Us Section */}
            <Typography
                variant="h6"
                sx={{
                    marginBottom: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                    backdropFilter: "blur(5px)",
                    p: 1,
                    borderRadius: "10px",
                    color: "white",
                    fontWeight: "bold",
                    textAlign: "center",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    // Space between icon and text
                }}
            >
                <RocketLaunchIcon sx={{ fontSize: "28px", color: "white" }} /> Why Choose CodeWorks
            </Typography>

            <Grid container spacing={3} sx={{ marginBottom: 5 }}>
                <Grid item xs={12} md={4}>
                    <motion.div
                        variants={fadeUpAnimation}
                        initial="hidden"
                        animate="visible"
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 3,
                                textAlign: "center",
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                borderRadius: "12px",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                                backdropFilter: "blur(5px)",
                                p: 1,
                                borderRadius: '10px',
                                color: "white",
                            }}
                        >
                            <People
                                sx={{
                                    fontSize: 40,
                                    color: "#2c3e50",
                                    marginBottom: 1,

                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", color: "#34495e" }}
                            >
                                Exceptional Talent
                            </Typography>
                            <Typography>
                                Our team comprises innovators, developers, and designers with a
                                proven track record of delivering impactful solutions across
                                industries.
                            </Typography>
                        </Paper>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <motion.div
                        variants={fadeUpAnimation}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 3,
                                textAlign: "center",
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                borderRadius: "12px",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                                backdropFilter: "blur(5px)",
                                p: 1,
                                borderRadius: '10px',
                                color: "white",

                            }}
                        >
                            <Loop
                                sx={{
                                    fontSize: 40,
                                    color: "#2c3e50",
                                    marginBottom: 1,
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", color: "#34495e" }}
                            >
                                Agile Methodology
                            </Typography>
                            <Typography>
                                We embrace an agile approach to development, ensuring iterative
                                progress, transparency, and high-quality outcomes.
                            </Typography>
                        </Paper>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={4}>
                    <motion.div
                        variants={fadeUpAnimation}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4 }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 3,
                                textAlign: "center",
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                borderRadius: "12px",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                                backdropFilter: "blur(5px)",
                                p: 1,
                                borderRadius: '10px',
                                color: "white",
                            }}
                        >
                            <Lightbulb
                                sx={{
                                    fontSize: 40,
                                    color: "#2c3e50",
                                    marginBottom: 1,
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", color: "#34495e" }}
                            >
                                Cutting-Edge Solutions
                            </Typography>
                            <Typography>
                                Leveraging the latest technologies to build scalable,
                                future-ready solutions tailored to your vision.
                            </Typography>
                        </Paper>
                    </motion.div>
                </Grid>
            </Grid>

            {/* What We Offer Section */}
            <Typography
                variant="h6"
                sx={{
                    marginBottom: 3,
                    fontWeight: "bold",
                    textAlign: "center",
                    backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                    backdropFilter: "blur(5px)",
                    p: 1,
                    borderRadius: "10px",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1, // Space between icon and text
                }}
            >
                <LocalOfferIcon sx={{ fontSize: "28px", color: "white" }} /> What We Offer
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <motion.div
                        variants={fadeUpAnimation}
                        initial="hidden"
                        animate="visible"
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 3,
                                textAlign: "center",
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                borderRadius: "12px",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                                backdropFilter: "blur(5px)",
                                p: 1,
                                borderRadius: '10px',
                                color: "white",
                            }}
                        >
                            <Code
                                sx={{
                                    fontSize: 40,
                                    color: "#2c3e50",
                                    marginBottom: 1,
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", color: "#34495e" }}
                            >
                                Custom Software Development
                            </Typography>
                            <Typography>
                                Tailored solutions built from the ground up to meet your
                                specific business needs, delivering seamless performance and
                                scalability.
                            </Typography>
                        </Paper>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <motion.div
                        variants={fadeUpAnimation}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 3,
                                textAlign: "center",
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                borderRadius: "12px",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                                backdropFilter: "blur(5px)",
                                p: 1,
                                borderRadius: '10px',
                                color: "white",
                            }}
                        >
                            <DesignServices
                                sx={{
                                    fontSize: 40,
                                    color: "#2c3e50",
                                    marginBottom: 1,
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", color: "#34495e" }}
                            >
                                UI/UX Design
                            </Typography>
                            <Typography>
                                Crafting visually stunning and user-friendly interfaces to
                                enhance user engagement and ensure an exceptional digital
                                experience.
                            </Typography>
                        </Paper>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <motion.div
                        variants={fadeUpAnimation}
                        initial="hidden"
                        animate="visible"
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 3,
                                textAlign: "center",
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                borderRadius: "12px",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                                backdropFilter: "blur(5px)",
                                p: 1,
                                borderRadius: '10px',
                                color: "white",
                            }}
                        >
                            <SmartToy
                                sx={{
                                    fontSize: 40,
                                    color: "#2c3e50",
                                    marginBottom: 1,
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", color: "#34495e" }}
                            >
                                AI & Automation Solutions
                            </Typography>
                            <Typography>
                                Integrating intelligent automation and machine learning to
                                streamline workflows, reduce costs, and improve decision-making.
                            </Typography>
                        </Paper>
                    </motion.div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <motion.div
                        variants={fadeUpAnimation}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.2 }}
                    >
                        <Paper
                            elevation={3}
                            sx={{
                                padding: 3,
                                textAlign: "center",
                                backgroundColor: "rgba(255, 255, 255, 0.9)",
                                borderRadius: "12px",
                                boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
                                backgroundColor: "rgba(255, 255, 255, 0.2)", // Semi-transparent white
                                backdropFilter: "blur(5px)",
                                borderRadius: '10px',
                                color: "white",
                                mb: 15,
                            }}
                        >
                            <Cloud
                                sx={{
                                    fontSize: 40,
                                    color: "#2c3e50",
                                    marginBottom: 1,
                                }}
                            />
                            <Typography
                                variant="h6"
                                sx={{ fontWeight: "bold", color: "#34495e" }}
                            >
                                Cloud Integration
                            </Typography>
                            <Typography>
                                Empowering your business with secure, scalable, and efficient
                                cloud solutions to drive innovation and operational excellence.
                            </Typography>
                        </Paper>
                    </motion.div>
                </Grid>
            </Grid>
        </Box>
    );
}

export default ServicePage;
