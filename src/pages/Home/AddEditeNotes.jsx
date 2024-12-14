import React from 'react'

const AddEditeNotes = () => {
  return (
    <div>
      <div className="flex flex-col gap-2">
        <label className='input-lable' htmlFor="">TITLE</label>
        <input className='text-2xl text-slate-950 outline-none' type="text"placeholder='Go To Gym At 5' />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className='input-lable' htmlFor="">CONTENT</label>
        <textarea type='text'
        className='text-sm to-slate-950 outline-none bg-slate-50 p-2 rounded'
        placeholder='Content'
        rows={10}
        ></textarea>
      </div>
      <div className="mt-3">
        <lable className="input-lable">TAGS</lable>
      </div>
      <button 
      onClick={()=>{}}
      className='btn-primary font-medium mt-5 p-3'
      >
        ADD
        </button>
    </div>
  )
}

export default AddEditeNotes
