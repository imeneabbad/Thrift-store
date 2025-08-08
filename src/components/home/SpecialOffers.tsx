import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { ProductCard } from '@/app/types/productTypes';
import ProductShowcase, { ProductShowcaseProps } from './ProductShowcase';

interface SpecialOffersProps extends Omit<ProductShowcaseProps, 'title' | 'products'> {
  products: ProductCard[];
  offerText: string;
}

const SpecialOffers: React.FC<SpecialOffersProps> = ({ 
  products,
  offerText,
  ...productShowcaseProps
}) => {
  return (
    <Box textAlign="center">
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
        Today's Special Offers
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ mb: 4 }}>
        {offerText}
      </Typography>
      
      <ProductShowcase
        title=""
        products={products}
        {...productShowcaseProps}
      />
      
      <Button 
        variant="contained" 
        color="warning" 
        size="large"
        sx={{ mt: 4, px: 6, py: 2 }}
      >
        View All Offers
      </Button>
    </Box>
  );
};

export default SpecialOffers;