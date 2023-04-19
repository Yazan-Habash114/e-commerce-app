import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MainTitle from './MainTitle';
import Items from './Items';
import SearchBarAndIcons from './SerchBarAndIcons';
import { Divider } from '@mui/material';
 import styled from '@emotion/styled';
import TopHeader from '../TopHeader';

const BottomHeader = () => {
  return (
    <AppBar
     sx={{
      zIndex: (theme) => theme.zIndex.drawer + 1,
      backgroundColor:'white',
       width:'1440px',
       boxShadow:"none" ,
       height:'120px',
    }}>
    <TopHeader/>
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