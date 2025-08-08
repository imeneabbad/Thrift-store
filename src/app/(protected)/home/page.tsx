'use client'
import React, { useRef, useState } from 'react';
import { Box, Container, Typography } from '@mui/material';
import HeroSection from '@/components/home/HeroSection';
import ProductShowcase from '@/components/home/ProductShowcase';
import SpecialOffers from '@/components/home/SpecialOffers';
import { CardWidth, ProductCard } from '@/app/types/productTypes';
import ThriftCardGrid from '@/components/home/ThriftCardGrid';
 // Complete mock data matching ProductCard interface
  const mockProducts: ProductCard[] = [
    {
      id: 'prod_1',
      image: '/products/denim-jacket.jpg',
      fallbackImage: '/products/fallback.jpg',
      alt: 'Vintage Denim Jacket',
      title: 'Vintage Denim Jacket',
      price: '$24.99',
      originalPrice: '$39.99',
      rating: 4.5,
      reviewCount: 12,
      isNew: false,
      isSale: true
    },
    {
      id: 'prod_2',
      image: '/products/coffee-table.jpg',
      fallbackImage: '/products/fallback.jpg',
      alt: 'Retro Coffee Table',
      title: 'Retro Coffee Table',
      price: '$89.99',
      originalPrice: '$120.00',
      rating: 4.2,
      reviewCount: 8,
      isNew: true,
      isSale: false
    },
    {
      id: 'prod_3',
      image: '/products/polaroid-camera.jpg',
      fallbackImage: '/products/fallback.jpg',
      alt: 'Classic Polaroid Camera',
      title: 'Classic Polaroid Camera',
      price: '$45.50',
      rating: 4.7,
      reviewCount: 15,
      isNew: false,
      isSale: false
    },
    {
      id: 'prod_4',
      image: '/products/leather-notebook.jpg',
      fallbackImage: '/products/fallback.jpg',
      alt: 'Leather Bound Notebook',
      title: 'Leather Bound Notebook',
      price: '$12.99',
      originalPrice: '$19.99',
      rating: 4.0,
      reviewCount: 5,
      isNew: false,
      isSale: true
    },
    {
      id: 'prod_5',
      image: '/products/summer-dress.jpg',
      fallbackImage: '/products/fallback.jpg',
      alt: 'Floral Summer Dress',
      title: 'Floral Summer Dress',
      price: '$18.75',
      rating: 4.3,
      reviewCount: 7,
      isNew: true,
      isSale: false
    },
    {
      id: 'prod_6',
      image: '/products/chess-set.jpg',
      fallbackImage: '/products/fallback.jpg',
      alt: 'Wooden Chess Set',
      title: 'Wooden Chess Set',
      price: '$32.00',
      originalPrice: '$45.00',
      rating: 4.8,
      reviewCount: 10,
      isNew: false,
      isSale: true
    }
  ];

  const cardWidth: CardWidth = {
    xs: '280px',
    sm: '300px',
    md: '320px'
  };

const HomePage = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const handleFavoriteToggle = (id: string) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
        Featured Items
      </Typography>
      <ThriftCardGrid
        products={mockProducts}
        favorites={favorites}
        onFavoriteToggle={handleFavoriteToggle}
      />
    </Container>
  );
};

export default HomePage;