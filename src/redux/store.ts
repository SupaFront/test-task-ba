import { configureStore } from '@reduxjs/toolkit';
import tutorialsReducer from './tutorials/tutorials-slice';


const store = configureStore({
    reducer: {
        tutorials: tutorialsReducer
    },
  devTools: process.env.NODE_ENV !== 'production',
});


export { store };