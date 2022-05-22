import { createSlice } from '@reduxjs/toolkit';

import { remove, removeAll, edit, loadAll, loadPublished, addOne } from './tutorials-ops';

const initialState = {
  tutorials: [],
  loading: false,
  error: null,
};

const tutorialsSlice = createSlice({
  name: 'tutorials',
  initialState,
  extraReducers: {
    [loadAll.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [loadAll.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tutorials = payload;
    },
    [loadAll.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [removeAll.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [removeAll.fulfilled]: state => {
      state.loading = false;
      state.tutorials = initialState.tutorials;
    },
    [removeAll.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [remove.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [remove.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [remove.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tutorials = state.tutorials.filter(item => item.id !== payload.id);
    },
    [edit.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [edit.pending]: state => {
      state.loading = true;
      state.error = null;
    },
    [edit.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tutorials = state.tutorials.map(item =>
        item.id === payload.tutorial.id ? payload.tutorial : item,
      );
    },
    [loadPublished.pending]: state => {
      state.loading = true;
      state.error = false;
    },
    [loadPublished.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [loadPublished.fulfilled]: (state, { payload }) => {
      state.tutorials = payload;
      state.loading = false;
    },
    [addOne.pending]: state => {
      state.loading = true;
      state.error = false;
    },
    [addOne.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
    },
    [addOne.fulfilled]: (state, { payload }) => {
      state.tutorials = [...state.tutorials, payload];
      state.loading = false;
    },
  },
});

export default tutorialsSlice.reducer;
