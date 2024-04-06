import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { CiCirclePlus } from "react-icons/ci";
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useDispatch, useSelector } from 'react-redux';
import { addProjTask } from '../features/ProjectSlice';

const MyCard = ({ tasks, ID }) => {
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch()
  const [title, setTitle] = React.useState('')
  const [description, setDescription] = React.useState('')
  const [imgurl, setImgurl] = React.useState('')

  function HandleAddProjectTask() {
    dispatch(addProjTask({
      ID,
      title,
      description,
      imgurl,
    }))
    onCloseModal()
    setDescription('')
    setTitle('')
    setImgurl('')
  }


  const projects = useSelector(state => state.projects.projects)

  return (
    <div className='flex gap-2 flex-wrap'>
      {
        tasks.map((task) => (
          <div key={task.id}>
            <Card sx={{ maxWidth: 345, maxHeight: 350 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={task.img ? task.img : ""}
                  alt="Image Not Found"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {task.title}
                  </Typography>
                  <Typography variant="body2" className='font-semibold'>
                    {task.description}
                  </Typography>
                  <Typography variant="body2" className='text-gray-400'>
                    {task.date}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        ))
      }

      <div
        onClick={onOpenModal}
        className="bg-[#F9FAF5] w-80 h-[350px] rounded-md flex items-center justify-center cursor-pointer ">
        <CiCirclePlus className='text-6xl' />
      </div>
      <Modal open={open} onClose={onCloseModal} center>
        <div className='px-10 py-4'>
          <h3 className='text-2xl font-bold '>Add project</h3>
          <div className="my-2">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className='w-full p-2 my-1 border-2 border-gray-300 rounded-md' />
            <label htmlFor="Description">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Description"
              className='w-full p-2 my-1 border-2 border-gray-300 rounded-md' />
            <label htmlFor="Image">Image</label>
            <input
              type="text"
              value={imgurl}
              onChange={(e) => setImgurl(e.target.value)}
              placeholder="Image Url"
              className='w-full p-2 my-1 border-2 border-gray-300 rounded-md' />
            <button
              className='bg-black text-white px-4 py-1 h-10 rounded-md font-semibold'
              onClick={HandleAddProjectTask}
            >Create Task</button>
          </div>
        </div>
      </Modal>

    </div>
  )
}

export default MyCard
