import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getOne } from '../../API/API';
import { remove } from '../../redux/tutorials/tutorials-ops';
import styles from './SingleTutorialPage.module.css';

function SingleTutorialPage() {
  const [item, setItem] = useState(null);
  const [quest, setQuest] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {item ? (
        <div className={styles.item}>
          <p className={styles.propsData}>
            <span className={styles.props}>Title:</span>
            {item.title}
          </p>
          <p className={styles.propsData}>
            <span className={styles.props}>Description:</span>
            {item.description}
          </p>
          <span className={styles.propsData}>
            <span className={styles.props}>Published:</span>
            {item.published ? 'Yes' : 'No'}
          </span>
          <div className={styles.btnContainer}>
            {!quest ? (
              <>
                <Link className={styles.editBtn} to={`/tutorials/${item.id}/edit`}>
                  Edit
                </Link>
                <button
                  className={styles.deleteBtn}
                  onClick={() => {
                    setQuest(true);
                  }}
                >
                  Delete
                </button>
              </>
            ) : (
              <div>
                <span className={styles.quest}>Delete?</span>
                <button
                  className={styles.delConfirm}
                  onClick={() => {
                    dispatch(remove(item.id));
                    setQuest(false);
                  }}
                >
                  Yes
                </button>
                <button className={styles.delDeny} onClick={() => setQuest(false)}>
                  No
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <h1>Tutorial Not Found</h1>
      )}
      <button className={styles.backBtn} onClick={() => navigate('/tutorials')}>
        Go Back
      </button>
    </div>
  );
}

export default SingleTutorialPage;
