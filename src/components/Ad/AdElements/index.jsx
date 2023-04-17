import React from 'react'
import { Box } from "@mui/material";
import phone from './phone.png'
import TitleAd from '../TitleAd';
import ParagraphAd from '../ParagraphAd';
import LinkHeader from '../../Layout/Header/TopHeader/Link';
import { Toolbar } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const AdElements = () => {
  return (

   <div style={{width:'892px',height:'344px',backgroundColor:'black',
   backgroundImage:`url(${phone})`,backgroundPosition:'right',backgroundRepeat:'no-repeat' ,marginTop:'150px'}}
>
        <Toolbar sx={{flexDirection:'column',alignItems:'start' ,justifyContent:'space-evenly',height:'100%'}}>
            <TitleAd/>
            <ParagraphAd/>
            <div style={{display:'flex',justifyContent:'center',width:'100px'}}>
            <LinkHeader/>
            <ArrowForwardIcon sx={{color:'white',pl:1}}/>
            </div>
        </Toolbar>
   </div>
  )
}

export default AdElements