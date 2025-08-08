import React from 'react';
import { Grid } from '@mui/material';
import ThriftCard from './ThriftCard';

interface Product {
  id: string;
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  condition?: 'Excellent' | 'Good' | 'Fair';
}

interface ThriftCardGridProps {
  products: Product[];
  favorites: string[];
  onFavoriteToggle: (id: string) => void;
}

const ThriftCardGrid: React.FC<ThriftCardGridProps> = ({ 
  products, 
  favorites, 
  onFavoriteToggle 
}) => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid key={product.id} >
          <ThriftCard
            {...product}
            isFavorite={favorites.includes(product.id)}
            onFavoriteToggle={onFavoriteToggle}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default ThriftCardGrid;