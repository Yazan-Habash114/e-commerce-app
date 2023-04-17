import React from 'react'
import { Toolbar , Box } from "@mui/material";
import IconTitleAd from '../IconTitleAd';
import ParagraphTitleAd from '../ParagraphTitleAd';

const TitleAd = () => {
  return (
    <div style={{display:'flex',alignItems:'center'}}>
        <IconTitleAd/>
        <ParagraphTitleAd/>
    </div>
  )
}

export default TitleAd