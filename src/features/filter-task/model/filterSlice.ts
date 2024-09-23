import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type FilterStatus = "all" | "completed" | "incomplete";

interface FilterState {
  status: FilterStatus;
}

const initialState: FilterState = {
  status: "all",
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilterStatus: (state, action: PayloadAction<FilterStatus>) => {
      state.status = action.payload;
    },
  },
});

export const { setFilterStatus } = filterSlice.actions;
export default filterSlice.reducer;
