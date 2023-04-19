import React from 'react'
import Typography from '@mui/material/Typography'
import { colors } from '@mui/material'

function Paragraph() {
  return (
    <Typography variant="p" sx={{
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '14px',
        color:'white',
        ml:'445px',
    }}>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</Typography>
  )
}

export default Paragraph