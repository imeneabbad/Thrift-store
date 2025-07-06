"use client";
import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Stack,
  Chip,
  IconButton,
  useTheme,
  useMediaQuery,
  Paper,
  alpha,
  Skeleton,
} from "@mui/material";
import {
  ShoppingBag,
  Sell,
  LocalOffer,
  StarOutline,
  FavoriteBorder,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import Carousel from "./Carousel";
import { products } from "@/constants/heroCards";

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const scrollRef = useRef<HTMLDivElement>(null);
  const [imageErrors, setImageErrors] = useState<{ [key: number]: boolean }>(
    {}
  );
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const handleImageError = (index: number) => {
    setImageErrors((prev) => ({ ...prev, [index]: true }));
  };

  const updateScrollButtons = () => {
    if (!scrollRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const cardWidth = isMobile ? 280 : 360;
    const scrollAmount = direction === "left" ? -cardWidth : cardWidth;

    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: "smooth",
    });

    setTimeout(updateScrollButtons, 300);
  };

  useEffect(() => {
    const scrollElement = scrollRef.current;
    if (!scrollElement) return;

    updateScrollButtons();
    scrollElement.addEventListener("scroll", updateScrollButtons);

    return () => {
      scrollElement.removeEventListener("scroll", updateScrollButtons);
    };
  }, []);

  return (
    <Box
      sx={{
        py: { xs: 8, md: 12 },
        px: 2,
        background: "linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)",
        minHeight: "75vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        position: "relative",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.03) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 107, 107, 0.03) 0%, transparent 50%)",
          pointerEvents: "none",
        },
      }}
    >
      <Box sx={{ width: "100vw", marginLeft: "calc(-50vw + 50%)" }}>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 6, md: 8 }}
          alignItems="center"
          justifyContent="space-between"
          width="100%"
        >
          {/* Left Content - Takes 2/3 of space */}
          <Box
            sx={{
              width: { xs: "100%", lg: "66%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "center", // This centers child elements horizontally
              justifyContent: "center", // This centers vertically if needed
              mx: "auto", // Centers the box itself within its parent
              maxWidth: { lg: "calc(66% - 32px)" },
            }}
          >
            <Box
              sx={{
                width: "100%",
                maxWidth: "640px",
                textAlign: { xs: "center", lg: "left" },
                px: { xs: 2, md: 0 }, // Remove horizontal padding on desktop
              }}
            >
              {/* Modern Badge with subtle animation */}
              <Box
                component="span"
                sx={{
                  display: "inline-block",
                  bgcolor: "rgba(17, 17, 17, 0.03)",
                  color: "text.primary",
                  mb: 4,
                  fontWeight: 600,
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(17, 17, 17, 0.08)",
                  borderRadius: "12px",
                  px: 2.5,
                  py: 1,
                  backdropFilter: "blur(4px)",
                  transform: "translateY(0)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-2px)",
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  },
                }}
              >
                Premium Marketplace
              </Box>

              {/* Headline with improved gradient and motion */}
              <Typography
                variant="h1"
                sx={{
                  fontSize: {
                    xs: "2.8rem",
                    sm: "3.75rem",
                    md: "4.5rem", // Slightly larger
                  },
                  fontWeight: 800, // Bolder weight
                  lineHeight: 1.05, // Tighter leading
                  mb: 3,
                  color: "text.primary",
                  letterSpacing: "-0.03em", // Slightly tighter
                  fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif', // Trendier font stack
                  "& span": {
                    display: "block",
                    background:
                      "linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)", // More vibrant gradient
                    backgroundClip: "text",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: -8,
                      left: 0,
                      width: "100%",
                      height: "3px",
                      background:
                        "linear-gradient(90deg, #6e8efb 0%, #a777e3 100%)",
                      transform: "scaleX(0)",
                      transformOrigin: "left",
                      transition:
                        "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
                    },
                  },
                  "&:hover span::after": {
                    transform: "scaleX(1)",
                  },
                }}
              >
                Find your next
                <Box component="span">favorite piece</Box>
              </Typography>

              {/* Subhead with improved readability */}
              <Typography
                variant="body1"
                sx={{
                  mb: 5,
                  maxWidth: "520px", // Slightly wider
                  fontSize: "1.15rem",
                  lineHeight: 1.75,
                  color: "text.secondary",
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  mx: { xs: "auto", lg: 0 },
                  opacity: 0.9, // Subtle transparency
                }}
              >
                Discover curated pre-loved fashion that doesn't compromise on
                style or quality.
                <Box
                  component="span"
                  sx={{
                    display: { xs: "none", sm: "inline" },
                    fontWeight: 500,
                    color: "text.primary",
                  }}
                >
                  Sustainable shopping made simple.
                </Box>
              </Typography>

              {/* Buttons with modern interactions */}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                mb={6}
                sx={{
                  alignItems: { xs: "stretch", sm: "center" },
                  justifyContent: { xs: "center", lg: "flex-start" },
                }}
              >
                <Button
                  variant="contained"
                  startIcon={
                    <ShoppingBag sx={{ fontSize: "1.1rem !important" }} />
                  }
                  size="large"
                  sx={{
                    background:
                      "linear-gradient(135deg, #6e8efb 0%, #a777e3 100%)",
                    textTransform: "none",
                    fontWeight: 600,
                    px: 5,
                    py: 1.8,
                    fontSize: "1rem",
                    borderRadius: "14px", // More rounded
                    boxShadow: "0 4px 20px rgba(110, 142, 251, 0.3)",
                    "&:hover": {
                      transform: "translateY(-2px)",
                      boxShadow: "0 8px 30px rgba(110, 142, 251, 0.4)",
                      background:
                        "linear-gradient(135deg, #5d7de8 0%, #9668d8 100%)",
                    },
                    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  Start Shopping
                </Button>

                <Button
                  variant="outlined"
                  startIcon={<Sell sx={{ fontSize: "1.1rem !important" }} />}
                  size="large"
                  sx={{
                    borderColor: "divider",
                    color: "text.primary",
                    textTransform: "none",
                    fontWeight: 500,
                    px: 5,
                    py: 1.8,
                    fontSize: "1rem",
                    borderRadius: "14px",
                    borderWidth: "2px",
                    "&:hover": {
                      bgcolor: "action.hover",
                      borderColor: "text.secondary",
                      transform: "translateY(-2px)",
                    },
                    transition: "all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)",
                  }}
                >
                  Sell Items
                </Button>
              </Stack>
            </Box>
          </Box>

          {/* Right Carousel - Takes 1/3 of space */}
          <Box
            sx={{
              justifyItems: "end",
              height:"100%",
              width: { xs: "100%", lg: "33%" },
              maxWidth: { lg: "calc(33% - 32px)" }, // Account for spacing
            }}
          >
            <Carousel
              products={products}
              cardWidth={{ xs: "260px", sm: "280px", md: "300px" }}
              cardHeight={440}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Hero;
