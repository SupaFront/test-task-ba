import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getOne } from '../../API/API';
import Form from '../../modules/Form';
import { edit } from '../../redux/tutorials/tutorials-ops';
import styles from './EditPage.module.css';

function EditPage() {
  const dispatch = useDispatch();
  const [item, setItem] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getTutorial = async () => {
      try {
        const result = await getOne(id);
        setItem(result);
      } catch (err) {
        throw err;
      }
    };
    getTutorial();
  }, [id]);

  return (
    <div>
      <h1>Edit tutorial</h1>
      {item && (
        <Form
          submitForm={values => {
            dispatch(edit({ tutorial: values, id }));
            navigate(`/tutorials/${id}`);
          }}
          initialValues={{
            description: item?.description,
            title: item?.title,
            published: item?.published,
          }}
          edit={true}
        />
      )}
      <button className={styles.backBtn} onClick={() => navigate(-1)}>
        Go Back
      </button>
    </div>
  );
}

export default EditPage;
