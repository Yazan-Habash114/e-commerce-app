import React from 'react'
import SerchBar from '../SerchBar'
import Icons from '../Icons'
import { Toolbar ,Box } from '@mui/material'
function SearchBarAndIcons() {
  return (
    <Box sx={{display:'flex',alignItems:'center',mt:'40px'}}>
        <SerchBar/>
        <Icons/>
    </Box>
  )
}

export default SearchBarAndIcons