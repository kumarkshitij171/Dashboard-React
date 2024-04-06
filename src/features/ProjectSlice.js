import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    projects: [{
        id: nanoid(),
        title: 'First Project',
        tasks: [
            {
                id: nanoid(),
                title: 'First Task',
                description: 'This is the first task of the first project',
                img: "https://plus.unsplash.com/premium_photo-1669562728886-b2cc51a62e78?q=80&w=1846&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                date: '2021-09-22',
            },
        ],
    }]
}

export const ProjectSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {
        addProject: (state, action) => {
            const { storyBoardName, frameSize, tasks } = action.payload

            state.projects.push(
                {
                    id: nanoid(),
                    title: storyBoardName,
                    frameSize,
                    tasks,
                }
            )
        },
        addProjTask: (state, action) => {
            const { title, description, imgurl, ID } = action.payload
            // Find the project by ID and add the task to the project tasks array
            state.projects.find(project => project.id === ID).tasks.push({
                id: nanoid(),
                title,
                description,
                img: imgurl,
                date: Date.now(),
            })
        },
    },
})

// Action creators are generated for each case reducer function
export const { addProject, addProjTask } = ProjectSlice.actions

export default ProjectSlice.reducer