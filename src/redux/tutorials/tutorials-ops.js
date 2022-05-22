import { createAsyncThunk } from '@reduxjs/toolkit';

import { getAll, getPublished, addNew, deleteAll, deleteOne, editOne } from '../../API/API';

export const loadAll = createAsyncThunk('tutorials/loadAll', async (_, { rejectWithValue }) => {
  try {
    const result = await getAll();
    return result;
  } catch ({ message }) {
    return rejectWithValue(message);
  }
});

export const loadPublished = createAsyncThunk(
  'tutorials/loadPublished',
  async (_, { rejectWithValue }) => {
    try {
      const result = await getPublished();
      return result;
    } catch ({ message }) {
      return rejectWithValue(message);
    }
  },
);

export const addOne = createAsyncThunk('tutorials/addOne', async (data, { rejectWithValue }) => {
  try {
    const result = await addNew(data);
    return result;
  } catch ({ message }) {
    return rejectWithValue(message);
  }
});

export const edit = createAsyncThunk('tutorials/edit', async (data, { rejectWithValue }) => {
  try {
    const result = await editOne(data);
    return { result, tutorial: data };
  } catch ({ message }) {
    return rejectWithValue(message);
  }
});

export const remove = createAsyncThunk('tutorials/removeOne', async (data, { rejectWithValue }) => {
  try {
    const result = await deleteOne(data);
    return { ...result, id: data };
  } catch ({ message }) {
    return rejectWithValue(message);
  }
});

export const removeAll = createAsyncThunk('tutorials/removeAll', async (_, { rejectWithValue }) => {
  try {
    const result = await deleteAll();
    return result;
  } catch ({ message }) {
    return rejectWithValue(message);
  }
});
