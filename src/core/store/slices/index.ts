import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import {} from "../../dto";
import v3DTO from "../../dto/v3DTO";

const initialState: v3DTO[] = [];

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    save: (state, action: PayloadAction<v3DTO[]>) => ( state = action.payload ),
  },
});

export const { save } = slice.actions;
export default slice.reducer;
