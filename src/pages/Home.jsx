import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='text-white w-full'>
      <h1>Home</h1>
      <Link to={'/rarostock/dashboard'}>
      <button className=' bg-white text-black py-2 px-4 rounded-md'>Dashboard</button>
      </Link>
    </div>
  )
}

export default Home
