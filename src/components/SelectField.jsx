import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const SelectField = ({value, handleChange, menuItem, label, disabledValue}) => {
  return (
    <FormControl
  sx={{
    width: '100%',
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white',
      },
      '&:hover fieldset': {
        borderColor: 'white',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white',
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white',
    },
    '& .MuiInputLabel-root.Mui-focused': {
      color: 'gray',
    },
    '& .MuiSelect-select': {
      color: 'white',
    },
    '& svg': {
      color: 'white',
    },
  }}
>
      <InputLabel id={value}>{label}</InputLabel>
  <Select
    labelId={value}
    id={value}
    value={value}
    label={value}
    onChange={handleChange}
    >
    <MenuItem value='' disabled>{disabledValue}</MenuItem>
    {
      menuItem.map((item) => (
        <MenuItem value={item}>{item}</MenuItem>
      ))
    }
  </Select>
  </FormControl>
  )
}

export default SelectField
