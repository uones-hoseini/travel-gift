import React from "react"
import ProfileInfo from "../../components/Cards/ProfileInfo"
import Navbar from "../../components/Navbar"
import NoteCard from "../../components/Cards/NoteCard"
import { MdAdd } from "react-icons/md"
import AddEditeNotes from "./AddEditeNotes"

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
        <NoteCard title="Meeting on 7th April" date="3rd Apr 2024" content="Meeting on 7th April 3rd Apr 2024" tags="#Meeting" isPinned={true} onEdit={() => {}} onDelete={() => {}} onPinNote={() => {}} />
        </div>
      </div>

      <button onClick={()=>{}} className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary
      hover:bg-blue-600 absolute right-10 bottom-10">
        <MdAdd className=" text-[32px] text-white "/>
      </button> 
      <AddEditeNotes/>

    </>
  )
}

export default Home
