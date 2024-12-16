import { useState } from "react"
import TagInput from "../../components/input/TagInput"
import { MdClose } from "react-icons/md"

const AddEditeNotes = ({ noteData, type, onClose }) => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [tags, setTags] = useState([])
  const [error, setError] = useState(null)

  //add Note

  const addNewNote=async()=>{}
  const editNote=async()=>{}

  //Edit Note

  const handleAddNote = () => {
    if (!title) {
      setError("Please emter the title")
      return
    }

    if (!content) {
      setError("Please emter the content")
      return
    }
    setError("")

    if (type === "edit") {
      editNote()
    } else {
      addNewNote()
    }
  }
  return (
    <div className="relative">
      <div className="flex justify-end">
        <button onClick={onClose} className="w-10 h-10 rounded-full flex items-center justify-center -top-3 -right-3 hover:bg-slate-50 ">
          <MdClose className="text-xl text-slate-400" />
        </button>
      </div>

      <div className="flex flex-col gap-2">
        <label className="input-lable">TITLE</label>
        <input value={title} onChange={({ target }) => setTitle(target.value)} className="text-2xl text-slate-950 outline-none" type="text" placeholder="Go To Gym At 5" />
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <label className="input-lable">CONTENT</label>
        <textarea value={content} onChange={({ target }) => setContent(target.value)} type="text" className="text-sm to-slate-950 outline-none bg-slate-50 p-2 rounded" placeholder="Content" rows={10}></textarea>
      </div>
      <div className="mt-3">
        <lable className="input-lable">TAGS</lable>
      </div>
      <TagInput tags={tags} setTags={setTags} />
      {error && <p className="text-red-500 text-xs pt-4">{error}</p>}
      <button onClick={handleAddNote} className="btn-primary font-medium mt-5 p-3">
        ADD
      </button>
    </div>
  )
}

export default AddEditeNotes
