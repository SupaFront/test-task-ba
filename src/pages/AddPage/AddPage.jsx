import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Form from '../../modules/Form';
import { addOne } from '../../redux/tutorials/tutorials-ops';
import styles from './AddPage.module.css';

const initialValues = { title: '', description: '', published: false };

function AddPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitForm = async values => {
    dispatch(addOne(values));
    navigate('/tutorials');
  };

  return (
    <div>
      <h1>Add new tutorial</h1>
      <Form submitForm={submitForm} initialValues={initialValues} />
      <Link className={styles.backBtn} to="/tutorials">
        Back to tutorials
      </Link>
    </div>
  );
}

export default AddPage;
