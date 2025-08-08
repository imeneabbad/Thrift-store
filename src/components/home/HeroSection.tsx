import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box 
      sx={{
        py: 10,
        px: 2,
        textAlign: 'center',
        bgcolor: 'success.light',
        color: 'text.primary'
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 700 }}>
        Welcome Back!
      </Typography>
      <Typography variant="h5" gutterBottom sx={{ mb: 4 }}>
        Discover unique secondhand treasures
      </Typography>
      <Button 
        variant="contained" 
        color="success" 
        size="large"
        sx={{ px: 6, py: 2 }}
      >
        Shop Now
      </Button>
    </Box>
  );
};

export default HeroSection;