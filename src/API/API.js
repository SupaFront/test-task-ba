import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';

export const getAll = async () => {
  try {
    const { data } = await axios.get('/api/tutorials');
    return data;
  } catch (err) {
    throw err;
  }
};

export const deleteAll = async () => {
  try {
    const { data } = await axios.delete('/api/tutorials');
    alert('All tutorials deleted!');
    return data;
  } catch (err) {
    alert('Error!');
    throw err;
  }
};

export const addNew = async tutorial => {
  try {
    const { data } = await axios.post('/api/tutorials', tutorial);
    alert('Successfully added!');
    return data;
  } catch (err) {
    alert('Error!');
    throw err;
  }
};

export const getOne = async id => {
  try {
    const { data } = await axios.get('/api/tutorials/' + id);
    return data;
  } catch (err) {
    throw err;
  }
};

export const editOne = async ({ id, tutorial }) => {
  try {
    const { data } = await axios.put('/api/tutorials/' + id, tutorial);
    alert('Successfully edited!');
    return data;
  } catch (err) {
    alert('Error!');
    throw err;
  }
};

export const deleteOne = async id => {
  try {
    const { data } = await axios.delete('/api/tutorials/' + id);
    alert('Successfully deleted!');
    return data;
  } catch (err) {
    alert('Error!');
    throw err;
  }
};

export const getPublished = async () => {
  try {
    const { data } = await axios.get('api/tutorials/published');
    return data;
  } catch (err) {
    throw err;
  }
};
