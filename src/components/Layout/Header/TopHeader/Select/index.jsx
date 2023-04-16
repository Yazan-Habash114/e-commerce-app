import React from 'react'
import MenuItem from '@mui/material/MenuItem';
import TextField from '@mui/material/TextField';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import styled from '@emotion/styled';
const currencies = [
    {
      value: 'English',
      label: 'English',
    },
  ];

  const StyledTextField = styled(TextField)`
  & .MuiSelect-icon {
    color: white;
  }
`;
  
function SelectHeader() {
  return (
    <>
    <StyledTextField
          id="standard-select-currency"
          select
          defaultValue="English"
          variant="standard"
          InputProps={{
            style: { color: 'white' , backgroundColor:'black'},
          }}
          SelectProps={{
            IconComponent: KeyboardArrowDownOutlinedIcon,
          }}
          sx={{color:'white',width:100,fontSize:'14px', pl:'231px'
        }}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </StyledTextField>
    </>
  )
}

export default SelectHeader