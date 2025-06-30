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
  ForestOutlined,
  FavoriteBorder,
  ArrowBackIos,
  ArrowForwardIos,
} from "@mui/icons-material";
import Carousel from "./Carousel";

// Mock image data with fallbacks
const imageCards = [
  {
    src: "/images/item1.jpg",
    alt: "Vintage leather jacket",
    price: "$45",
    title: "Leather Jacket",
    fallback:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDM2MCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjZjVmNWY1Ii8+CjxwYXRoIGQ9Ik0xMzUgMTMwSDIyNVYxOTBIMTM1VjEzMFoiIGZpbGw9IiNlMGUwZTAiLz4KPHBhdGggZD0iTTE2NSAxNTBIMTk1VjE3MEgxNjVWMTUwWiIgZmlsbD0iI2QwZDBkMCIvPgo8L3N2Zz4K",
  },
  {
    src: "/images/item2.jpg",
    alt: "Vintage denim shirt",
    price: "$28",
    title: "Denim Shirt",
    fallback:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDM2MCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjZjBmOGZmIi8+CjxwYXRoIGQ9Ik0xMzUgMTMwSDIyNVYxOTBIMTM1VjEzMFoiIGZpbGw9IiNkZGVlZmYiLz4KPHBhdGggZD0iTTE2NSAxNTBIMTk1VjE3MEgxNjVWMTUwWiIgZmlsbD0iI2NjZGRmZiIvPgo8L3N2Zz4K",
  },
  {
    src: "/images/item3.jpg",
    alt: "Retro sneakers",
    price: "$65",
    title: "Retro Sneakers",
    fallback:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDM2MCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjZmZmOGYwIi8+CjxwYXRoIGQ9Ik0xMzUgMTMwSDIyNVYxOTBIMTM1VjEzMFoiIGZpbGw9IiNmZmVlZGQiLz4KPHBhdGggZD0iTTE2NSAxNTBIMTk1VjE3MEgxNjVWMTUwWiIgZmlsbD0iI2ZmZGRjYyIvPgo8L3N2Zz4K",
  },
  {
    src: "/images/item4.jpg",
    alt: "Wool sweater",
    price: "$38",
    title: "Wool Sweater",
    fallback:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzYwIiBoZWlnaHQ9IjMyMCIgdmlld0JveD0iMCAwIDM2MCAzMjAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzNjAiIGhlaWdodD0iMzIwIiBmaWxsPSIjZjhmNWZmIi8+CjxwYXRoIGQ9Ik0xMzUgMTMwSDIyNVYxOTBIMTM1VjEzMFoiIGZpbGw9IiNmMGVlZmYiLz4KPHBhdGggZD0iTTE2NSAxNTBIMTk1VjE3MEgxNjVWMTUwWiIgZmlsbD0iI2UwZGRmZiIvPgo8L3N2Zz4K",
  },
];
const products=[
  {
    id: "1",
    image: "/images/jacket-vintage.jpg",
    fallbackImage: "/images/fallback-jacket.jpg",
    alt: "Vintage Denim Jacket",
    title: "Vintage Denim Jacket",
    price: "$45.00",
    originalPrice: "$65.00",
    rating: 4.8,
    reviewCount: 86,
    isNew: false,
    isSale: true,
  },
  {
    id: "2",
    image: "/images/sneakers-white.webp",
    fallbackImage: "/images/fallback-sneakers.jpg",
    alt: "Retro White Sneakers",
    title: "Retro White Sneakers",
    price: "$60.00",
    originalPrice: "$90.00",
    rating: 4.6,
    reviewCount: 112,
    isNew: true,
    isSale: true,
  },
  {
    id: "3",
    image: "/images/handbag-leather.webp",
    fallbackImage: "/images/fallback-handbag.jpg",
    alt: "Brown Leather Handbag",
    title: "Genuine Leather Handbag",
    price: "$80.00",
    originalPrice: "$110.00",
    rating: 4.9,
    reviewCount: 145,
    isNew: true,
    isSale: false,
  },
  {
    id: "4",
    image: "/images/flannel-shirt.jpg",
    fallbackImage: "/images/fallback-flannel.jpg",
    alt: "Plaid Flannel Shirt",
    title: "Plaid Flannel Shirt",
    price: "$25.00",
    originalPrice: "$35.00",
    rating: 4.4,
    reviewCount: 72,
    isNew: false,
    isSale: true,
  }
]

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

    // Update button states after scroll animation
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
        py: { xs: 6, md: 8 },
        px: 2,
        bgcolor: "#f6fdf9",
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 4, md: 6 }}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Content */}
          <Box flex={1} sx={{ maxWidth: { xs: "100%", lg: "50%" } }}>
            <Chip
              icon={<ForestOutlined />}
              label="Sustainable Fashion"
              sx={{
                bgcolor: alpha(theme.palette.success.main, 0.1),
                color: "success.main",
                mb: 3,
                fontWeight: 600,
                fontSize: "0.875rem",
                border: `1px solid ${alpha(theme.palette.success.main, 0.2)}`,
              }}
            />

            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
                fontWeight: 800,
                lineHeight: 1.1,
                mb: 3,
                background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.success.main} 100%)`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Find your next favorite piece
            </Typography>

            <Typography
              variant="body1"
              sx={{
                mb: 4,
                maxWidth: "500px",
                fontSize: "1.125rem",
                lineHeight: 1.6,
                color: "text.secondary",
              }}
            >
              Stylish, sustainable, second-hand. Discover quality items at
              affordable prices while helping the planet.
            </Typography>

            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={2}
              mb={4}
              sx={{ alignItems: { xs: "stretch", sm: "center" } }}
            >
              <Button
                variant="contained"
                startIcon={<ShoppingBag />}
                size="large"
                sx={{
                  bgcolor: "success.main",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  borderRadius: 2,
                  "&:hover": {
                    bgcolor: "success.dark",
                    transform: "translateY(-1px)",
                    boxShadow: theme.shadows[4],
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                Shop Now
              </Button>

              <Button
                variant="outlined"
                startIcon={<Sell />}
                size="large"
                sx={{
                  borderColor: "success.main",
                  color: "success.main",
                  textTransform: "none",
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  fontSize: "1rem",
                  borderRadius: 2,
                  borderWidth: 2,
                  "&:hover": {
                    bgcolor: alpha(theme.palette.success.main, 0.1),
                    borderColor: "success.dark",
                    borderWidth: 2,
                    transform: "translateY(-1px)",
                  },
                  transition: "all 0.2s ease-in-out",
                }}
              >
                Sell Items
              </Button>
            </Stack>

            <Stack direction="row" alignItems="center" spacing={1}>
              {[...Array(5)].map((_, i) => (
                <StarOutline
                  key={i}
                  sx={{
                    color: "warning.main",
                    fontSize: "1.3rem",
                    filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.1))",
                  }}
                />
              ))}
              <Typography
                variant="body2"
                sx={{
                  color: "text.secondary",
                  fontWeight: 500,
                  ml: 1,
                }}
              >
                4.9/5 rating from 10k+ users
              </Typography>
            </Stack>
          </Box>

          {/* Right Carousel */}
          <Carousel
            products={products}
            cardWidth={{ xs: "260px", sm: "280px", md: "300px" }}
            cardHeight={440}
          />
        </Stack>
      </Container>
    </Box>
  );
};

export default Hero;
