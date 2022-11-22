import React from 'react';
import {Container, Grid, Box} from '@mui/material' 
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'
import Contact from './Contact';


export default function Footer() {
    
    return ( 
    <footer>
        <Box px={{xs: 3, sm:10}} py={{xs: 2, md: 2}} bgcolor="text.secondary" color='white'>
            <Container maxWidth = 'lg'>
                <Grid container spacing={10} 
                display={'flex'} flexDirection={{ md: 'row'}} alignItems={'center'}
                justifyContent={'space-around'}>
                    <Grid item xs={12} sm={4}>
                        <Box borderBottom={2} width={{xs:'80%', md:250}} py={{xs: 1, sm: 1}} >
                        <Link to="https://www.google.com/">
                            <Button sx ={{width:150}} variant="contained">
                              MY RESUME
                            </Button>
                        </Link>  
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={4}>            
                        <Box borderBottom={2} width={{xs:'80%', md:250}} py={{xs: 1, sm: 1}} >
                            <Contact sx ={{width:150}}/>
                        </Box>
                    </Grid>   
                </Grid>
                <Box textAlign= "center" pt={{xs: 2, md: 2}} pb={{xs: 5, sm: 0}}>
                    CAMILO HURTADO&trade; {new Date().getFullYear()}
                </Box>
            </Container>
        </Box>

    </footer>
        
    )
}