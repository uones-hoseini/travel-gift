import React from 'react'
import ProfileInfo from './Cards/ProfileInfo'
import { useNavigate } from 'react-router-dom'


const navigate=useNavigate
const Navbar = () => {

const onLogout=()=>{
  navigate("login")
}

  return (
    <div className='bg-white flex items-center justify-between px-6 drop-shadow'>
      <h2 className="text-xl font-medium text-black py-2">Nots</h2>
    <ProfileInfo onLogout={onLogout}/>

    </div>
  )
}

export default Navbar
