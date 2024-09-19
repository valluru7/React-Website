import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import BG from '../images/sky.jpg';
import '../styles/homepage.css'; // Import your CSS file

const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundImage: `url(${BG})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        padding: '20px',
       position: 'relative',
        textAlign: 'left'
      }}
    >
      <div className="typing-effect">
        <Typography
          variant="h2"
          sx={{
            fontFamily: 'Plus Jakarta Sans',
            fontSize: { xs: '16px', sm: '20px', md: '24px' },
            fontWeight: 400,
            color: '#fff',
            whiteSpace: 'nowrap',
          }}
        >
          Building ideas into reality, one line of code at a time.
        </Typography>
      </div>
      <Typography
        variant="h1"
        sx={{
          fontFamily: 'Plus Jakarta Sans',
          fontSize: { xs: '32px', sm: '48px', md: '64px' },
          fontWeight: 700,
          marginBottom: '20px',
        }}
      >
        Welcome to VeVa
      </Typography>
      <Typography
        variant="h5"
        sx={{
          fontFamily: 'Ubuntu',
          fontSize: { xs: '16px', sm: '20px', md: '24px' },
          fontWeight: 400,
          marginBottom: '40px',
        }}
      >
        Discover our services and explore what we have to offer.
      </Typography>
      <Button
        variant="contained"
        className="download-button"
        href="/VenumadhuriValluru.pdf"
        download
        sx={{
          fontFamily: 'Ubuntu',
          fontSize: { xs: '14px', sm: '16px', md: '18px' },
          padding: '10px 20px',
        }}
      >
        Download CV
      </Button>
    </Box>
  );
};

export default HomePage;
