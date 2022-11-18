import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Aboutme from '../Aboutme/Aboutme'
import Images from '../Images/Images'
import {Container, Grid, Box} from '@mui/material' 

export default function ContainerBox() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100vh">
      <Box px={{xs: 3, sm:10}} py={{xs: 3, sm: 5}} bgcolor="text.secondary" color='white'>
      <Container maxWidth = 'lg'>
      <Grid container spacing={5}>
      <Grid item xs={12} sm={4}>
         <Images/>
     </Grid>
     <Grid item xs={12} sm={4}>
       <Aboutme/>
     </Grid>
        
        </Grid>
        </Container>
        </Box>
       
      </Container>
    </React.Fragment>
  );
}
