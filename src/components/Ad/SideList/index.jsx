import { List, ListItem } from '@mui/material'
import React from 'react'
import SingleItemList from '../SingleItemList'
import index from '../../Layout'
const listItems = ['Woman’s Fashion','Men’s Fashion','Electronics','Home & Lifestyle','Sports & Outdoor','Baby’s & Toys',
'Health & Beauty'
]

function SideList() {
  return (
    <List>
        {listItems.map((item,index)=>(
            <SingleItemList itemList={item} index = {index} />
        ))}
    </List>
  )
}

export default SideList