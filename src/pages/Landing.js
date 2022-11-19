import React from 'react';
import { Box,Stack, Toolbar, Typography,Button } from '@mui/material';
import ResponsiveAppBar from '../components/ResponsiveAppBar';
import {useNavigate} from 'react-router-dom';
import { Image } from 'mui-image';
import illustrate from '../assets/e-commerce.png';

const drawerWidth = 240;
const classes = {
    Header: {
      fontFamily: 'Poppins',
      fontWeight: 'bold',
      color: '#31A05F',
    },
    container: {
        margin: 10,
    },
    secbox:{
        marginTop: 5,
    },
    Body: {
        fontFamily: 'Poppins',
        color: '#31A05F',
        margin: 1,
        fontSize: 29,
      },
    viewbutton: {
        fontFamily: 'Poppins',
        fontWeight: 'bold',
        backgroundColor:'#31A05F',
        marginLeft: 1,
        marginTop: 1,
        borderRadius: 10,
        padding: 2,
        "&:hover": {
          color: '#FFFF',
          backgroundColor: '#388E3C',
        },
    },
    illustration:{
        display: 'flex',
        alignItems: 'right',
        justifyContent: 'right',
    },
}

export default function Landing() {
    const navigate = useNavigate();
  return (
    <>
    <ResponsiveAppBar/>
    <Box sx={{ display: 'flex' }}>
    <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Stack spacing = {1} direction='row'>
            <Box sx={classes.container}>
                <Typography variant='h2' sx={classes.Header}>
                BE THE FIRST 
                </Typography>
                <Typography variant='h2' sx={classes.Header}>
                TO CONNECT
                </Typography>
                <Typography variant='h2' sx={classes.Header}>
                WITH US
                </Typography>
                <Box sx={classes.secbox}>
                  <Typography sx={classes.Body}>
                  AgriKOnnect is an e-commerce platform 
                  </Typography>
                  <Typography sx={classes.Body}>
                  for farmers, consumers and agricultural organizations.
                  </Typography>
                  <Button variant="contained" onClick={() => navigate('/selection')} sx={classes.viewbutton}>GET STARTED</Button>
                </Box>
            </Box>
            <Box>
            <Image sx= {classes.illustration} duration={0} src={illustrate} height= {"auto"} width= {"100%"}/>
            </Box>
        </Stack>
      </Box>
  </Box>
    </>
  )
}
