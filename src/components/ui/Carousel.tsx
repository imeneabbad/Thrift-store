import React, { useRef, useState, useEffect } from "react";
import {
  Box,
  IconButton,
  Paper,
  Typography,
  Button,
  useTheme,
  alpha,
  Rating,
} from "@mui/material";
import { ArrowBackIos, ArrowForwardIos, Favorite, FavoriteBorder, ShoppingBag } from "@mui/icons-material";

interface ProductCard {
  id: string;
  image: string;
  fallbackImage: string;
  alt: string;
  title: string;
  price: string;
  originalPrice?: string;
  rating?: number;
  reviewCount?: number;
  isNew?: boolean;
  isSale?: boolean;
}

interface CarouselProps {
  products: ProductCard[];
  cardWidth?: { xs: string; sm: string; md: string };
  cardHeight?: number;
  peekAmount?: number; // How much of the next card to show (px)
}

const Carousel: React.FC<CarouselProps> = ({
  products,
  cardWidth = { xs: "280px", sm: "320px", md: "360px" },
  cardHeight = 420,
  peekAmount = 60, // Default peek amount
}) => {
  const theme = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<boolean[]>(Array(products.length).fill(false));
  const [favorites, setFavorites] = useState<Set<string>>(new Set());

  const toggleFavorite = (id: string) => {
    const newFavorites = new Set(favorites);
    if (newFavorites.has(id)) {
      newFavorites.delete(id);
    } else {
      newFavorites.add(id);
    }
    setFavorites(newFavorites);
  };

  const handleImageError = (index: number) => {
    const newErrors = [...imageErrors];
    newErrors[index] = true;
    setImageErrors(newErrors);
  };

  const scrollToIndex = (index: number) => {
    if (scrollRef.current) {
      const cardElement = scrollRef.current.children[0] as HTMLElement;
      const cardWidthPx = cardElement.offsetWidth;
      scrollRef.current.scrollTo({
        left: index * (cardWidthPx + peekAmount / 2), // Account for gap
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const scrollNext = () => {
    if (currentIndex < products.length - 1) {
      scrollToIndex(currentIndex + 1);
    }
  };

  const scrollPrev = () => {
    if (currentIndex > 0) {
      scrollToIndex(currentIndex - 1);
    }
  };

  // Calculate the visible width for each card (card width + peek amount)
  const getCardVisibleWidth = () => {
    const baseWidth = parseInt(cardWidth.xs) * 16; // Convert rem to px
    return baseWidth + peekAmount;
  };

  return (
    <Box 
      sx={{ 
        position: "relative",
        width: "100%",
        maxWidth: "500px",
        overflow: "hidden",
      }}
    >
      {/* Navigation Buttons */}
      <IconButton
        onClick={scrollPrev}
        disabled={currentIndex === 0}
        aria-label="Previous product"
        sx={{
          position: "absolute",
          left: 8,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          bgcolor: "background.paper",
          boxShadow: 3,
          "&:hover": {
            bgcolor: "background.default",
            transform: "translateY(-50%) scale(1.1)",
          },
          "&:disabled": {
            opacity: 0.3,
          },
          transition: "all 0.3s ease",
          width: 48,
          height: 48,
        }}
      >
        <ArrowBackIos fontSize="small" />
      </IconButton>

      <IconButton
        onClick={scrollNext}
        disabled={currentIndex === products.length - 1}
        aria-label="Next product"
        sx={{
          position: "absolute",
          right: 8,
          top: "50%",
          transform: "translateY(-50%)",
          zIndex: 3,
          bgcolor: "background.paper",
          boxShadow: 3,
          "&:hover": {
            bgcolor: "background.default",
            transform: "translateY(-50%) scale(1.1)",
          },
          "&:disabled": {
            opacity: 0.3,
          },
          transition: "all 0.3s ease",
          width: 48,
          height: 48,
        }}
      >
        <ArrowForwardIos fontSize="small" />
      </IconButton>

      {/* Card Container */}
      <Box
        ref={scrollRef}
        sx={{
          display: "flex",
          gap: `${peekAmount / 2}px`,
          overflowX: "hidden",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          width: "100%",
          px: `${peekAmount / 2}px`, // Add padding to center first card
        }}
      >
        {products.map((product, index) => (
          <Box
            key={product.id}
            sx={{
              minWidth: `calc(${cardWidth.xs} - ${peekAmount / 2}px)`,
              width: `calc(${cardWidth.xs} - ${peekAmount / 2}px)`,
              [theme.breakpoints.up('sm')]: {
                minWidth: `calc(${cardWidth.sm} - ${peekAmount / 2}px)`,
                width: `calc(${cardWidth.sm} - ${peekAmount / 2}px)`,
              },
              [theme.breakpoints.up('md')]: {
                minWidth: `calc(${cardWidth.md} - ${peekAmount / 2}px)`,
                width: `calc(${cardWidth.md} - ${peekAmount / 2}px)`,
              },
              scrollSnapAlign: "start",
              flexShrink: 0,
              position: "relative",
              transition: "all 0.3s ease",
              mr: `${peekAmount / 2}px`,
            }}
          >
            <Paper
              elevation={0}
              sx={{
                width: "100%",
                height: cardHeight,
                borderRadius: "12px",
                overflow: "hidden",
                position: "relative",
                transition: "all 0.3s ease",
                border: `1px solid ${alpha(theme.palette.grey[200], 0.8)}`,
                cursor: "pointer",
              }}
            >
              {/* Product Badges */}
              <Box sx={{ 
                position: "absolute", 
                top: 12, 
                left: 12, 
                zIndex: 2,
                display: "flex",
                gap: 1,
              }}>
                {product.isNew && (
                  <Box sx={{
                    bgcolor: "success.main",
                    color: "white",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}>
                    New
                  </Box>
                )}
                {product.isSale && (
                  <Box sx={{
                    bgcolor: "error.main",
                    color: "white",
                    px: 1.5,
                    py: 0.5,
                    borderRadius: 1,
                    fontSize: "0.75rem",
                    fontWeight: 600,
                  }}>
                    Sale
                  </Box>
                )}
              </Box>

              {/* Image Container */}
              <Box sx={{ 
                position: "relative", 
                width: "100%", 
                height: "60%",
                overflow: "hidden",
              }}>
                <Box
                  component="img"
                  src={imageErrors[index] ? product.fallbackImage : product.image}
                  alt={product.alt}
                  onError={() => handleImageError(index)}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transition: "transform 0.5s ease",
                  }}
                />
              </Box>

              {/* Product Info */}
              <Box sx={{ 
                p: 3,
                height: "40%",
                display: "flex",
                flexDirection: "column",
              }}>
                <Typography 
                  variant="subtitle1" 
                  sx={{ 
                    fontWeight: 600,
                    mb: 1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {product.title}
                </Typography>

                {product.rating && (
                  <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                    <Rating 
                      value={product.rating} 
                      precision={0.5} 
                      readOnly 
                      size="small"
                      sx={{ color: theme.palette.warning.main, mr: 1 }}
                    />
                    {product.reviewCount && (
                      <Typography variant="caption" color="text.secondary">
                        ({product.reviewCount})
                      </Typography>
                    )}
                  </Box>
                )}

                <Box sx={{ mt: "auto" }}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        fontWeight: 700,
                        color: theme.palette.primary.main,
                      }}
                    >
                      {product.price}
                    </Typography>
                    {product.originalPrice && (
                      <Typography 
                        variant="body2" 
                        sx={{ 
                          color: "text.disabled",
                          textDecoration: "line-through",
                        }}
                      >
                        {product.originalPrice}
                      </Typography>
                    )}
                  </Box>

                  {/* Action Buttons */}
                  <Box sx={{ 
                    display: "flex", 
                    gap: 1.5, 
                    mt: 2,
                  }}>
                    <IconButton
                      size="small"
                      aria-label="Add to favorites"
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(product.id);
                      }}
                      sx={{
                        bgcolor: "background.paper",
                        boxShadow: 1,
                        "&:hover": {
                          bgcolor: alpha(theme.palette.error.main, 0.1),
                        },
                      }}
                    >
                      {favorites.has(product.id) ? (
                        <Favorite fontSize="small" color="error" />
                      ) : (
                        <FavoriteBorder fontSize="small" />
                      )}
                    </IconButton>
                    
                    <Button
                      size="small"
                      variant="contained"
                      startIcon={<ShoppingBag fontSize="small" />}
                      fullWidth
                      sx={{
                        fontSize: "0.75rem",
                        textTransform: "none",
                        fontWeight: 600,
                        borderRadius: 2,
                        py: 1,
                        "&:hover": { 
                          boxShadow: `0 2px 8px ${alpha(theme.palette.primary.main, 0.2)}`,
                        },
                        transition: "all 0.2s ease",
                      }}
                    >
                      Add to Cart
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>
        ))}
      </Box>

      {/* Dots Indicator */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3,
          gap: 1.5,
        }}
      >
        {products.map((_, index) => (
          <Box
            key={index}
            onClick={() => scrollToIndex(index)}
            sx={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              bgcolor: index === currentIndex 
                ? "primary.main" 
                : alpha(theme.palette.primary.main, 0.2),
              transition: "all 0.3s ease",
              cursor: "pointer",
              "&:hover": {
                bgcolor: alpha(theme.palette.primary.main, 0.5),
              },
            }}
          />
        ))}
      </Box>
    </Box>
  );
};

export default Carousel;