import React from 'react';
import { AppBar, Button, Toolbar, Typography, Box, Grid } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';


const NavBar = () => {
  const navigate = useNavigate();

  const refreshPage = () => {
    navigate('/'); // Navigate to home page on refresh
  };

  return (
    <Box position="absolute" top="0" left="0" right="0" zIndex="9999">
      <AppBar component={"nav"} position="fixed" sx={{ background: 'transparent', boxShadow: 'none' }}>
        <Toolbar sx={{ maxWidth: '100%', height: '55px', background: 'transparent', padding: '0 20px' }}>
          <Grid container alignItems="center" justifyContent="space-between">
            {/* Logo Section */}
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'scale(1.05)', // Slightly enlarged effect on hover
                  },
                  cursor: 'pointer', // Indicate it's clickable
                }}
                onClick={refreshPage} 
               >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    fontFamily: 'Times-Italic',
                    fontSize: { xs: '20px', sm: '25px', md: '29px' }, // Responsive font sizes
                    fontWeight: 800,
                    color: 'White',
                  }}
                >
                  VeVa
                </Typography>
              </Box>
            </Grid>

            {/* Navigation Buttons */}
            <Grid item xs={12} md={9}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'flex-end', // Align navigation buttons to the right
                  alignItems: 'center',
                  gap: { xs: '8px', sm: '16px', md: '30px', lg: '46px' }, // Responsive spacing
                  flexWrap: 'wrap', // Allow wrapping on smaller screens
                }}
              >
                <Button
                  component={Link}
                  to="/"
                  sx={{
                    fontFamily: 'Ubuntu',
                    fontSize: { xs: '10px', sm: '14px', md: '16px' }, // Responsive font sizes
                    fontWeight: 400,
                    color: 'white',
                    padding: { xs: '4px 8px', sm: '6px 12px', md: '8px 16px' }, // Responsive padding
                  }}
                >
                  Home
                </Button>
                <Button
                  component={Link}
                  to="/about"
                  sx={{
                    fontFamily: 'Ubuntu',
                    fontSize: { xs: '10px', sm: '14px', md: '16px' }, // Responsive font sizes
                    fontWeight: 400,
                    color: 'white',
                    padding: { xs: '4px 8px', sm: '6px 12px', md: '8px 16px' }, // Responsive padding
                  }}
                >
                  About
                </Button>
                <Button
                  component={Link}
                  to="/support"
                  sx={{
                    fontFamily: 'Ubuntu',
                    fontSize: { xs: '10px', sm: '14px', md: '16px' }, // Responsive font sizes
                    fontWeight: 400,
                    color: 'white',
                    padding: { xs: '4px 8px', sm: '6px 12px', md: '8px 16px' }, // Responsive padding
                  }}
                >
                  Support
                </Button>
                <Button
                  component={Link}
                  to="/signup"
                  sx={{
                    fontFamily: 'Ubuntu',
                    fontSize: { xs: '10px', sm: '14px', md: '16px' }, // Responsive font sizes
                    fontWeight: 400,
                    color: 'white',
                    padding: { xs: '4px 8px', sm: '6px 12px', md: '8px 16px' }, // Responsive padding
                  }}
                >
                  Signup
                </Button>
                <Button
                  component={Link}
                  to="/login"
                  sx={{
                    fontFamily: 'Ubuntu',
                    fontSize: { xs: '10px', sm: '14px', md: '16px' }, // Responsive font sizes
                    fontWeight: 400,
                    color: 'white',
                    padding: { xs: '4px 8px', sm: '6px 12px', md: '8px 16px' }, // Responsive padding
                  }}
                >
                  Login
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
