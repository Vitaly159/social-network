import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type States = {
  notes: string;
};

const initialState: States = {
  notes: "hello"
};

export const addNoteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    onAddNote(state, action: PayloadAction<string>) {
     state.notes = action.payload;
    },
  },
});

export const {
  onAddNote,
} = addNoteSlice.actions;
export default addNoteSlice.reducer;
