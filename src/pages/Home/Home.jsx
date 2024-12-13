import React from 'react'
import ProfileInfo from '../../components/Cards/ProfileInfo'
import Navbar from '../../components/Navbar'

const Home = () => {
  return (
    <>
    <Navbar/>
    <div className="container mx-auto">
      <NoteCard/>
    </div>
    </>
  )
}

export default Home
