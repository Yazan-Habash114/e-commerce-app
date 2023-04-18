import React from 'react'
import SingleItemList from '../SingleItemList';
const listItems = [
  {
  text:'Woman’s Fashion',
  children:['Woman’s Fashion1','Woman’s Fashion2']
  },
  {
    text:'Men’s Fashion',
    children:['Men’s Fashion1','Men’s Fashion2']
  },
  {
    text:'Electronics'
  },
  {
    text:'Home & Lifestyle'
  },
  {
    text:'Sports & Outdoor'
  },
  {
    text:'Baby’s & Toys'
  },
  {
    text:'Health & Beauty'
  }
]

function SideList() {
 
  return (
     <SingleItemList listItems = {listItems} />
  )
}

export default SideList