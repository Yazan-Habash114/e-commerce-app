import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MainTitle from './MainTitle';
import Items from './Items';
import SearchBarAndIcons from './SerchBarAndIcons';
import { Divider } from '@mui/material';


const BottomHeader = () => {
  return (
    <AppBar position="static"
     sx={{
      backgroundColor:'white',
       width:'1440px',
       boxShadow:"none" ,
       height:'94px'
    }}>
    <Toolbar sx={{justifyContent:'space-evenly' , alignItems:'end'}}>
      <MainTitle/>
      <Items/>
      <SearchBarAndIcons/>
    </Toolbar>
    <Divider sx={{mt:'23px'}}/>
  </AppBar>
  )
}

export default BottomHeader