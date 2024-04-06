import { configureStore } from '@reduxjs/toolkit';
import ProjectSlice from '../features/ProjectSlice';

export const store = configureStore({
    reducer: {
        projects: ProjectSlice,
    },
})