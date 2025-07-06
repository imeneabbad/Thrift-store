import React, { useRef, useState, useEffect } from "react";
import { Box, IconButton, useTheme, alpha } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import CardContainer from "./CardContainer";
import { ProductCard } from "@/app/types/productTypes";

export interface CarouselProps {
  products: ProductCard[];
  cardWidth?: { xs: string; sm: string; md: string };
  cardHeight?: number;
  peekAmount?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  products,
  cardWidth = { xs: "260px", sm: "300px", md: "340px" },
  cardHeight = 420,
  peekAmount = 80,
}) => {
  const theme = useTheme();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imageErrors, setImageErrors] = useState<boolean[]>(
    Array(products.length).fill(false)
  );
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [cardDimensions, setCardDimensions] = useState({ width: 0, gap: 0 });

  // Measure card dimensions after render
  useEffect(() => {
    const updateDimensions = () => {
      if (scrollRef.current && scrollRef.current.children.length > 0) {
        const card = scrollRef.current.children[0] as HTMLElement;
        if (card) {
          const cardWidth = card.offsetWidth;
          const gap = peekAmount;
          setCardDimensions({ width: cardWidth, gap });
        }
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, [peekAmount]);

  const scrollToIndex = (index: number) => {
    if (scrollRef.current && cardDimensions.width > 0) {
      const scrollPosition = index * (cardDimensions.width + cardDimensions.gap);
      scrollRef.current.scrollTo({
        left: scrollPosition,
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

  // ... (keep toggleFavorite and handleImageError functions the same)
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
  // Update current index on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current && cardDimensions.width > 0) {
        const scrollLeft = scrollRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / (cardDimensions.width + cardDimensions.gap));
        
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < products.length) {
          setCurrentIndex(newIndex);
        }
      }
    };

    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [currentIndex, cardDimensions, products.length]);

  return (
    <Box sx={{
      position: "relative",
      width: "100%",
      maxWidth: "800px",
      overflow: "hidden",
    }}>
      {/* Card Container */}
      <CardContainer 
        scrollRef={scrollRef}
        peekAmount={peekAmount}
        products={products}
        cardWidth={cardWidth}
        cardHeight={`${cardHeight}px`}
        currentIndex={currentIndex}
        imageErrors={imageErrors}
        handleImageError={handleImageError}
        favorites={favorites}
        toggleFavorite={toggleFavorite}
      />

      {/* Navigation Arrows */}
      {currentIndex > 0 && (
        <IconButton
          onClick={scrollPrev}
          aria-label="Previous product"
          sx={{
            position: "absolute",
            left: 8,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: alpha(theme.palette.background.paper, 0.95),
            backdropFilter: "blur(10px)",
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`,
            width: 48,
            height: 48,
            zIndex: 10,
            '&:hover': {
              transform: 'translateY(-50%) scale(1.05)',
              bgcolor: alpha(theme.palette.primary.main, 0.1),
            },
          }}
        >
          <ArrowBackIos fontSize="small" sx={{ color: theme.palette.primary.main, ml: '2px' }} />
        </IconButton>
      )}

      {currentIndex < products.length - 1 && (
        <IconButton
          onClick={scrollNext}
          aria-label="Next product"
          sx={{
            position: "absolute",
            right: 8,
            top: "50%",
            transform: "translateY(-50%)",
            bgcolor: alpha(theme.palette.background.paper, 0.95),
            backdropFilter: "blur(10px)",
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
            boxShadow: `0 8px 32px ${alpha(theme.palette.common.black, 0.1)}`,
            width: 48,
            height: 48,
            zIndex: 10,
            '&:hover': {
              transform: 'translateY(-50%) scale(1.05)',
              bgcolor: alpha(theme.palette.primary.main, 0.1),
            },
          }}
        >
          <ArrowForwardIos fontSize="small" sx={{ color: theme.palette.primary.main }} />
        </IconButton>
      )}
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