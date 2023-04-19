import React from 'react'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import {Box} from '@mui/material';
import SideList from '../SideList';
const drawerWidth = '25%'

function Drawerside() {
  return (
    <Drawer
    variant="permanent"
    sx={{
      width: drawerWidth,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
    }}
  >
    <Toolbar />
    <Box sx={{ overflow: 'auto' , mt:'60px' }}>
      <SideList/>
    </Box>
  </Drawer>
  )
}

export default Drawerside