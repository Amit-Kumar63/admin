import React from 'react'
import { TextField } from '@mui/material'
const Input = ({type='text', name, value, onChange}) => {
  return (
    <TextField id="outlined-basic" label={name.charAt(0).toUpperCase() + name.slice(1)} variant="outlined" type={type} name={name} value={value} onChange={onChange} sx={{
      width: '100%',
      '& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
      },
      '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
      },
      '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: 'white',
      },
      '& .MuiInputLabel-root': {
        color: 'white',
        '&.Mui-focused': {
          color: 'gray',
        },
      },
      '& .MuiInputBase-input': {
        color: 'white',
      },
      '& svg': {
        color: 'white',
      },
      }}/>
  )
}

export default Input
