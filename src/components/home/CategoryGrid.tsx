import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const categories = [
  { name: 'Clothing', icon: '👕' },
  { name: 'Furniture', icon: '🛋️' },
  { name: 'Electronics', icon: '📱' },
  { name: 'Books', icon: '📚' },
];

const CategoryGrid = () => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: 600 }}>
        Shop Categories
      </Typography>
      <Grid container spacing={3}>
        {categories.map((category) => (
          <Grid key={category.name}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                '&:hover': {
                  transform: 'scale(1.03)',
                  transition: 'transform 0.3s ease',
                  cursor: 'pointer'
                }
              }}
            >
              <Typography variant="h3" sx={{ mb: 2 }}>{category.icon}</Typography>
              <Typography variant="h6">{category.name}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryGrid;