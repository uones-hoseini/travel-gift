import React, { useState } from "react"
import ProfileInfo from "../../components/Cards/ProfileInfo"
import Navbar from "../../components/Navbar"
import NoteCard from "../../components/Cards/NoteCard"
import { MdAdd } from "react-icons/md"
import AddEditeNotes from "./AddEditeNotes"
import Modal from "react-modal"

const Home = () => {
  const [openAddEditModal, setOpenAddEditModal] = useState({
    isShown: false,
    type: "add",
    data: null,
  })
  return (
    <>
      <Navbar />
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4 mt-8">
          <NoteCard title="Meeting on 7th April" date="3rd Apr 2024" content="Meeting on 7th April 3rd Apr 2024" tags="#Meeting" isPinned={true} onEdit={() => {}} onDelete={() => {}} onPinNote={() => {}} />
        </div>
      </div>

      <button
        onClick={() => {
          setOpenAddEditModal({ isShown: true, type: "add", data: null })
        }}
        className="w-16 h-16 flex items-center justify-center rounded-2xl bg-primary
      hover:bg-blue-600 absolute right-10 bottom-10"
      >
        <MdAdd className=" text-[32px] text-white " />
      </button>
      <Modal
        isOpen={openAddEditModal.isShown}
        onRequestClose={() => {}}
        ariaHideApp={false}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.2)",
          },
        }}
        contentLabel=" "
        className="p-5 w-[40%] max-h-3/4 bg-white rounded-md mx-auto mt-14 overflow-scroll"
      >
        <AddEditeNotes onClose={()=>{setOpenAddEditModal({isShown:false,type:"add", data:null})}}/>
      </Modal>
    </>
  )
}

export default Home
