import React, { useState } from 'react'
import Banner from './component/Banner'
import Navbar from './component/Navbar'
import ProjectAccordion from './component/ProjectAccordion'
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { addProject } from './features/ProjectSlice';
import { useDispatch } from 'react-redux';
import { BsFillChatRightFill } from "react-icons/bs";


function App() {
  const [open, setOpen] = useState(false);
  const [storyBoardName, setStoryBoardName] = useState('')
  const [frameSize, setFrameSize] = useState('16:9')

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const dispatch = useDispatch()

  function HandleAddProject() {
    dispatch(addProject({
      storyBoardName,
      frameSize,
      tasks: [],
    }
    ))
    onCloseModal()
  }
  return (
    <div className="h-full">
      <Banner />
      <Navbar />

      <div className="px-9 py-10 flex flex-wrap ">
        <div className="flex items-center justify-center font-semibold gap-2 text-2xl ">
          <div className="bg-[#F6C481] h-10 w-10 rounded-full flex justify-center items-center cursor-pointer">J</div>
          <span>John Doe Team</span>
        </div>
        <button
          onClick={onOpenModal}
          className='bg-black text-white px-4 py-1 h-10 rounded-md font-semibold sm:absolute right-9 mt-5 sm:mt-0 ml-3'>New Project</button>
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className='px-10 py-4'>
          <h3 className='text-2xl font-bold '>New StoryBoard</h3>
          <div className="my-2">
            <label className='mt-7' htmlFor="Project">StoryBoard Name</label>
            <input
              type="text"
              placeholder="StoryBoard Name"
              value={storyBoardName}
              onChange={(e) => setStoryBoardName(e.target.value)}
              className='w-full p-2 my-1 border-2 border-gray-300 rounded-md' />
            <label className='mt-7' htmlFor="Project">FrameSize</label>
            <select
              name=""
              id=""
              value={frameSize}
              onChange={(e) => setFrameSize(e.target.value)}
              className='w-full p-2 my-1 border-2 border-gray-300 rounded-md'>
              <option value="16:9" >16:9</option>
              <option value="9:16">9:16</option>
            </select>
            <button
              className='bg-black text-white px-4 py-1 h-10 rounded-md font-semibold '
              onClick={HandleAddProject}
            >Create Project</button>
          </div>
        </div>
      </Modal>

      <div className="px-9 py-4">
        <ProjectAccordion />
      </div>

      <div className="fixed bottom-5 right-5 ">
        <div className="bg-black text-white p-3 rounded-full ml-auto cursor-pointer ">
          <BsFillChatRightFill className='text-3xl' />
        </div>
      </div>
    </div>
  )
}

export default App
