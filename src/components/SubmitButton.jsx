import { Button } from '@mui/material'
import React from 'react'

const SubmitButton = ({text, isLoading=false, onClick}) => {
  return (
    <div className='w-fit'>
      <Button onClick={onClick} loading={isLoading} variant="outlined" loadingPosition="start" sx={{
        borderColor: 'teal',
        color: 'white',
        fontWeight: 'bold',
        fontSize: '16px',
        py: '10px',
        px: '40px'
      }}>
          {text}
        </Button>
    </div>
  )
}

export default SubmitButton
