import React from 'react'
import { useState } from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import {Link} from '@mui/material';

function SingleItemListButton({itemList ,menFashion ,womenFashion, index }) {
    const [open, setOpen] = useState(false);
     const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
    <ListItemButton sx={{ml:15,pt:1}} onClick={handleClick}>
        <ListItemText primary={itemList} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit >
      <List component="div" disablePadding>
        {index?
        <Link fontWeight={400} fontSize={'16px'} ml={'135px'} color={'black'} underline='none' href='#'>{itemList}</Link>:
        <Link fontWeight={400} fontSize={'16px'} ml={'135px'} color={'black'} underline='none' href='#'>{itemList}</Link>}
      </List>
    </Collapse>
    </>
    
  )
}

export default SingleItemListButton