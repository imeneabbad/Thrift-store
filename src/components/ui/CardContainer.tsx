import React from "react";
import {
  Box,
  Paper,
  Typography,
  Button,
  Rating,
  IconButton,
  alpha,
  useTheme,
} from "@mui/material";
import { Favorite, FavoriteBorder, ShoppingBag } from "@mui/icons-material";
import { CardContainerProps } from "@/app/types/productTypes";

const CardContainer: React.FC<CardContainerProps> = ({
  scrollRef,
  peekAmount,
  products,
  cardWidth,
  cardHeight,
  currentIndex,
  imageErrors,
  handleImageError,
  favorites = new Set(),
  toggleFavorite,
}) => {
  const theme = useTheme();
  return (
    <Box
      ref={scrollRef}
      sx={{
        height:"100%",
        display: "flex",
        gap: `${peekAmount}px`,
        overflowX: "auto",
        scrollSnapType: "x mandatory",
        scrollBehavior: "smooth",
        width: "100%",
        px: `calc(50% - ${parseInt(cardWidth.md) / 2}px)`,
        "&::-webkit-scrollbar": {
          display: "none",
        },
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}
    >
      {products.map((product, index) => (
        <Box
          key={product.id}
          sx={{
            scrollSnapAlign: "start",
            flexShrink: 0,
            position: "relative",
            transition: "all 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
            transform: index === currentIndex ? "scale(1.02)" : "scale(0.96)",
            zIndex: index === currentIndex ? 2 : 1,
            opacity: index === currentIndex ? 1 : 0.6,
            filter: index === currentIndex ? "none" : "blur(0.5px)",
            minWidth: cardWidth.md,
            width: cardWidth.md,
            [theme.breakpoints.down("md")]: {
              minWidth: cardWidth.sm,
              width: cardWidth.sm,
            },
            [theme.breakpoints.down("sm")]: {
              minWidth: cardWidth.xs,
              width: cardWidth.xs,
            },
          }}
        >
          <Paper
            elevation={0}
            sx={{
              width: "100%",
              height: cardHeight,
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
              background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.paper, 0.98)} 100%)`,
              border: `1px solid ${alpha(theme.palette.divider, 0.08)}`,
              cursor: "pointer",
              boxShadow: index === currentIndex 
                ? `0 20px 60px ${alpha(theme.palette.common.black, 0.15)}, 0 8px 30px ${alpha(theme.palette.primary.main, 0.1)}`
                : `0 8px 30px ${alpha(theme.palette.common.black, 0.08)}`,
              "&:hover": {
                transform: "translateY(-8px)",
                boxShadow: `0 25px 80px ${alpha(theme.palette.common.black, 0.2)}, 0 12px 40px ${alpha(theme.palette.primary.main, 0.15)}`,
                border: `1px solid ${alpha(theme.palette.primary.main, 0.2)}`,
              },
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "1px",
                background: `linear-gradient(90deg, transparent, ${alpha(theme.palette.primary.main, 0.3)}, transparent)`,
                zIndex: 1,
              },
            }}
          >
            {/* Product Badges */}
            <Box
              sx={{
                position: "absolute",
                top: 16,
                left: 16,
                zIndex: 3,
                display: "flex",
                gap: 1,
              }}
            >
              {product.isNew && (
                <Box
                  sx={{
                    bgcolor: `linear-gradient(135deg, ${theme.palette.success.main}, ${theme.palette.success.dark})`,
                    background: `linear-gradient(135deg, ${theme.palette.success.main} 0%, ${theme.palette.success.dark} 100%)`,
                    color: "white",
                    px: 2,
                    py: 0.75,
                    borderRadius: "12px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    boxShadow: `0 4px 12px ${alpha(theme.palette.success.main, 0.3)}`,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  New
                </Box>
              )}
              {product.isSale && (
                <Box
                  sx={{
                    background: `linear-gradient(135deg, ${theme.palette.error.main} 0%, ${theme.palette.error.dark} 100%)`,
                    color: "white",
                    px: 2,
                    py: 0.75,
                    borderRadius: "12px",
                    fontSize: "0.7rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    boxShadow: `0 4px 12px ${alpha(theme.palette.error.main, 0.3)}`,
                    backdropFilter: "blur(10px)",
                  }}
                >
                  Sale
                </Box>
              )}
            </Box>

            {/* Image Container */}
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: "60%",
                overflow: "hidden",
                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "40px",
                  background: `linear-gradient(transparent, ${alpha(theme.palette.common.black, 0.1)})`,
                  zIndex: 1,
                },
              }}
            >
              <Box
                component="img"
                src={imageErrors[index] ? product.fallbackImage : product.image}
                alt={product.alt}
                onError={() => handleImageError(index)}
                sx={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "all 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
                  "&:hover": {
                    transform: "scale(1.08)",
                  },
                }}
              />
            </Box>

            {/* Product Info */}
            <Box
              sx={{
                p: 3,
                height: "40%",
                display: "flex",
                flexDirection: "column",
                background: `linear-gradient(135deg, ${theme.palette.background.paper} 0%, ${alpha(theme.palette.background.paper, 0.95)} 100%)`,
                backdropFilter: "blur(20px)",
              }}
            >
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  mb: 1.5,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  background: `linear-gradient(135deg, ${theme.palette.text.primary} 0%, ${theme.palette.primary.main} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {product.title}
              </Typography>

              {product.rating && (
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Rating
                    value={product.rating}
                    precision={0.5}
                    readOnly
                    size="small"
                    sx={{ 
                      color: theme.palette.warning.main, 
                      mr: 1.5,
                      "& .MuiRating-iconFilled": {
                        color: theme.palette.warning.main,
                      },
                      "& .MuiRating-iconEmpty": {
                        color: alpha(theme.palette.warning.main, 0.2),
                      },
                    }}
                  />
                  {product.reviewCount && (
                    <Typography 
                      variant="caption" 
                      sx={{ 
                        color: alpha(theme.palette.text.secondary, 0.8),
                        fontWeight: 500,
                      }}
                    >
                      ({product.reviewCount})
                    </Typography>
                  )}
                </Box>
              )}

              <Box sx={{ mt: "auto" }}>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 2 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 800,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    {product.price}
                  </Typography>
                  {product.originalPrice && (
                    <Typography
                      variant="body2"
                      sx={{
                        color: alpha(theme.palette.text.disabled, 0.6),
                        textDecoration: "line-through",
                        fontWeight: 500,
                      }}
                    >
                      {product.originalPrice}
                    </Typography>
                  )}
                </Box>

                {/* Action Buttons */}
                <Box
                  sx={{
                    display: "flex",
                    gap: 2,
                  }}
                >
                  <IconButton
                    size="small"
                    aria-label="Add to favorites"
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavorite(product.id);
                    }}
                    sx={{
                      bgcolor: alpha(theme.palette.background.paper, 0.8),
                      backdropFilter: "blur(10px)",
                      border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                      boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.1)}`,
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        bgcolor: alpha(theme.palette.error.main, 0.1),
                        transform: "translateY(-2px) scale(1.05)",
                        boxShadow: `0 8px 20px ${alpha(theme.palette.error.main, 0.2)}`,
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
                      fontWeight: 700,
                      borderRadius: "12px",
                      py: 1.5,
                      background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
                      boxShadow: `0 4px 16px ${alpha(theme.palette.primary.main, 0.3)}`,
                      border: "none",
                      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: `0 8px 25px ${alpha(theme.palette.primary.main, 0.4)}`,
                        background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
                      },
                      "&:active": {
                        transform: "translateY(0)",
                      },
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
  );
};

export default CardContainer;