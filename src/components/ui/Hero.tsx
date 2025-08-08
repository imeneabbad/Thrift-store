"use client";
import React from "react";
import { Box, Typography, Button, Stack, useMediaQuery } from "@mui/material";
import { ShoppingBag, Sell } from "@mui/icons-material";
import Carousel from "./Carousel";
import { products } from "@/constants/heroCards";

const Hero = () => {
  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <Box
      sx={{
        py: isMobile ? 8 : 12,
        px: isMobile ? 3 : 6,
        background: "#ffffff",
        minHeight: isMobile ? "auto" : "80vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Modern geometric accent */}
      <Box
        sx={{
          position: "absolute",
          top: "-20%",
          right: "-10%",
          width: "60%",
          height: "140%",
          background: "linear-gradient(135deg, #f5f5f5 0%, #fafafa 100%)",
          transform: "rotate(15deg)",
          zIndex: 0,
          display: isMobile ? "none" : "block",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          maxWidth: "1400px",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1.1fr 1fr",
            gap: isMobile ? 6 : 8,
            alignItems: "center",
          }}
        >
          {/* Content Section */}
          <Box sx={{ order: isMobile ? 2 : 1 }}>
            <Typography
              variant="overline"
              sx={{
                display: "block",
                mb: 3,
                color: "text.secondary",
                letterSpacing: "0.1em",
                fontSize: "0.75rem",
                fontWeight: 500,
              }}
            >
              Sustainable Style
            </Typography>

            <Typography
              variant="h1"
              sx={{
                fontSize: isMobile ? "2.8rem" : "3.75rem",
                fontWeight: 500,
                lineHeight: 1.1,
                mb: 3,
                color: "text.primary",
                letterSpacing: "-0.02em",
              }}
            >
              Redefine your
              <Box
                component="span"
                sx={{
                  display: "block",
                  background: "linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)",
                  backgroundClip: "text",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                wardrobe sustainably
              </Box>
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 5,
                fontSize: "1.1rem",
                lineHeight: 1.7,
                color: "text.secondary",
                maxWidth: "500px",
              }}
            >
              Carefully curated pre-owned pieces that combine quality, value, and
              environmental consciousness.
            </Typography>

            <Stack direction="row" spacing={2}>
              <Button
                variant="contained"
                startIcon={<ShoppingBag />}
                size="large"
                sx={{
                  background: "linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)",
                  color: "white",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  borderRadius: "8px",
                  fontWeight: 500,
                  boxShadow: "0 4px 14px rgba(110, 142, 251, 0.3)",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 6px 20px rgba(110, 142, 251, 0.4)",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Shop Now
              </Button>

              <Button
                variant="outlined"
                startIcon={<Sell />}
                size="large"
                sx={{
                  borderColor: "divider",
                  color: "text.primary",
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  borderRadius: "8px",
                  fontWeight: 500,
                  "&:hover": {
                    borderColor: "text.secondary",
                    bgcolor: "action.hover",
                  },
                  transition: "all 0.3s ease",
                }}
              >
                Sell Items
              </Button>
            </Stack>
          </Box>

          {/* Carousel Section */}
          <Box
            sx={{
              order: isMobile ? 1 : 2,
              position: "relative",
              height: isMobile ? "380px" : "500px",
            }}
          >
            <Carousel
              products={products}
              cardWidth={{ xs: "280px", sm:'310px', md: "340px" }}
              cardHeight={isMobile ? 380 : 480}
              peekAmount={isMobile ? 20 : 40}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;