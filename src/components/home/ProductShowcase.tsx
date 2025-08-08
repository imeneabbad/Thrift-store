import React from 'react';
import { Typography, Box } from '@mui/material';
import { CardContainerProps, ProductCard } from '@/app/types/productTypes';
import CardContainer from '../ui/CardContainer';

export interface ProductShowcaseProps extends Omit<CardContainerProps, 'products'> {
  title: string;
  products: ProductCard[];
}

const ProductShowcase: React.FC<ProductShowcaseProps> = ({ 
  title, 
  products,
  ...cardContainerProps 
}) => {
  return (
    <Box>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <CardContainer
        products={products}
        {...cardContainerProps}
      />
    </Box>
  );
};

export default ProductShowcase;