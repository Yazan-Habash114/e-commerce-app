import { Link } from '@mui/material'
import React from 'react'
import {ListItem} from '@mui/material'
import SingleItemListButton from '../SingleItemListBottun'

// const menFashion=['menFashion1','menFashion2']
const itemFashion = {
  menFashion:['menFashion1','menFashion2'],
  womenFashion:['womenFashion1','womenFashion2']
}
const SingleItemList = ({itemList,index}) => {
  
  return (
    <ListItem>{(index === 0 || index === 1)?
      (<SingleItemListButton itemList = {itemList} {... itemFashion} index/>):
      (<Link fontWeight={400} fontSize={'16px'} ml={'135px'} color={'black'} underline='none' href='#'>{itemList}</Link>)
      }
    </ListItem>
  )
}

export default SingleItemList