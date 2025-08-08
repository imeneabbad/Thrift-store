import React from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  CardActions, 
  Typography, 
  IconButton, 
  Box,
  Chip,
  Button
} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

interface ThriftCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
  originalPrice?: string;
  isFavorite: boolean;
  condition?: 'Excellent' | 'Good' | 'Fair';
  onFavoriteToggle: (id: string) => void;
}

const ThriftCard: React.FC<ThriftCardProps> = ({
  id,
  image,
  title,
  price,
  originalPrice,
  isFavorite,
  condition = 'Good',
  onFavoriteToggle
}) => {
  const conditionColors = {
    'Excellent': 'success.light',
    'Good': 'info.light',
    'Fair': 'warning.light'
  };

  return (
    <Card sx={{ 
      position: 'relative',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      transition: 'transform 0.3s',
      '&:hover': {
        transform: 'translateY(-5px)',
        boxShadow: 6
      }
    }}>
      {/* Favorite Button */}
      <IconButton
        aria-label="add to favorites"
        onClick={() => onFavoriteToggle(id)}
        sx={{
          position: 'absolute',
          top: 8,
          right: 8,
          zIndex: 1,
          backgroundColor: 'rgba(255,255,255,0.7)',
          '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.9)'
          }
        }}
      >
        {isFavorite ? (
          <Favorite color="error" />
        ) : (
          <FavoriteBorder />
        )}
      </IconButton>

      {/* Condition Badge */}
      {condition && (
        <Chip
          label={condition}
          size="small"
          sx={{
            position: 'absolute',
            top: 8,
            left: 8,
            zIndex: 1,
            backgroundColor: conditionColors[condition],
            fontWeight: 'bold'
          }}
        />
      )}

      {/* Product Image */}
      <CardMedia
        component="img"
        height="200"
        image={image}
        alt={title}
        sx={{ objectFit: 'cover' }}
      />

      {/* Product Info */}
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h6" component="h3" noWrap>
          {title}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Typography variant="h6" color="primary" sx={{ fontWeight: 'bold' }}>
            {price}
          </Typography>
          {originalPrice && (
            <Typography variant="body2" color="text.secondary" sx={{ textDecoration: 'line-through', ml: 1 }}>
              {originalPrice}
            </Typography>
          )}
        </Box>
      </CardContent>

      {/* Action Buttons */}
      <CardActions sx={{ justifyContent: 'space-between', p: 2 }}>
        <Button size="small" variant="outlined">
          Quick View
        </Button>
        <Button size="small" variant="contained" color="primary">
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ThriftCard;