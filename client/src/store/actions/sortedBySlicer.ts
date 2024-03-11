import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: { sortedBy: string[] } = {
  sortedBy: [],
};

export const sortedBySlice = createSlice({
  name: 'sortedBy',
  initialState,
  reducers: {
    setSortedBy: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      if (state.sortedBy.length === 0) {
        state.sortedBy = [id];
        return;
      }
      if (state.sortedBy.includes(id)) {
        state.sortedBy = [...state.sortedBy.filter((item) => !item.includes(id))];
        return;
      }
      const sortById = id.split(', ')[0];
      if (sortById.includes('producer')) {
        state.sortedBy = [id, ...state.sortedBy.filter((item) => !item.includes(sortById))];
        return;
      }
      if (sortById.includes('price')) {
        state.sortedBy = [...state.sortedBy.filter((item) => !item.includes(sortById)), id];
        return;
      }
    },
    resetSortedBy: (state) => {
      state.sortedBy = initialState.sortedBy;
    },
  },
});

export const { setSortedBy, resetSortedBy } = sortedBySlice.actions;

export default sortedBySlice.reducer;
