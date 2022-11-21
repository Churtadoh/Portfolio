import React from 'react';
import IconLink from "./IconLink";
import {Box} from "@mui/material";

function PortfolioBlock(props) {
   const {image, live, source, title} = props;
   return (
      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
         <Box component={'img'} src={image} alt={'mockup'} sx ={{width:{xs: '80vh', md: '80vh'}, height:300}} py={{xs: 5, sm: 5}}/>
         <h1 style={{fontSize: '2rem'}}>{title}</h1>
         <Box className={'portfolio'} display={'flex'} flexDirection={'row'} gap={'0.5rem'}
              alignItems={'center'} fontSize={'1.5rem'} py={'2rem'}>
            {(live !== 'none') &&
            <a href={source} target={"_blank"} rel="noopener noreferrer" style={{height: 80}}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={live} title={'Live Demo'} icon={'fa fa-safari'} sx ={{width:150}}/>
            </Box>
            </a>
            }
            <a href={source} target={"_blank"} rel="noopener noreferrer" style={{height: 80}}>
            <Box p={1} border={'2px solid black'} borderRadius={'25px'}>
               <IconLink link={source} title={'Source Code'} icon={'fa fa-code'} sx ={{width:150}}/>
            </Box>
            </a>
         </Box>
      </Box>
   );
}

export default PortfolioBlock;