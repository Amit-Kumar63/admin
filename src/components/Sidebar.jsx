import React from 'react'
import { Upload } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='flex-2 border-r border-solid border-[#808080] w-full h-screen px-3 py-2.5'>
      <div className='w-full flex items-center justify-between border-b border-solid border-[#808080] py-2.5'>
        <img src="https://logos-world.net/wp-content/uploads/2020/09/Colgate-Logo.png" alt="" className='w-h-20 h-16 object-cover '/>
        <h1 className='xl:text-xl text-lg font-semibold w-full text-center text-[#dadada]'>Rarostock Admin</h1>
      </div>
      <div >
        <Link to={'/rarostock/upload'} className='w-full flex items-center gap-3.5 border-b border-solid border-[#808080] py-2.5'>
        <Upload/>
        <h4 className='text-lg '>Upload Image</h4>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar
