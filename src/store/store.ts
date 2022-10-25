import { configureStore } from '@reduxjs/toolkit'
import addNoteSlice from '../addNoteSlice'

export const store = configureStore({
  reducer: {
    notes: addNoteSlice
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch