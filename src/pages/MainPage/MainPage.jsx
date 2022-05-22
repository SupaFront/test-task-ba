import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useSearchParams } from 'react-router-dom';
import styles from './MainPage.module.css';

import ListItem from '../../modules/ListItem';
import { loadAll, loadPublished, remove, removeAll } from '../../redux/tutorials/tutorials-ops';
import { getTutorials } from '../../redux/tutorials/tutorials-selectors';

function MainPage() {
  const tutorials = useSelector(getTutorials);
  const [quest, setQuest] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const published = searchParams.get('published');
  const dispatch = useDispatch();

  useEffect(() => {
    published === 'true' ? dispatch(loadPublished()) : dispatch(loadAll());
  }, [published, dispatch]);

  return (
    <div className={styles.mainSec}>
      <div className={styles.topSect}>
        <h1>Your tutorials</h1>
        <div className={styles.BtnsWrap}>
          <Link className={styles.addNewBtn} to="/add">
            Add new tutorial
          </Link>

          {!quest ? (
            <button
              className={styles.deleteAllBtn}
              onClick={() => {
                setQuest(true);
              }}
            >
              Delete all
            </button>
          ) : (
            <div>
              <span>Are you sure?</span>

              <button className={styles.delDeny} onClick={() => setQuest(false)}>
                No
              </button>
              <button
                className={styles.delConfirm}
                onClick={() => {
                  dispatch(removeAll());
                  setQuest(false);
                }}
              >
                Yes
              </button>
            </div>
          )}
        </div>
        <label>
          Show only published
          <input
            className={styles.checkbox}
            checked={published === 'true' ? true : false}
            value={published === 'true' ? true : false}
            onChange={e => {
              setSearchParams({ ...searchParams, published: e.target.checked });
            }}
            type="checkbox"
            name="published"
            id="published"
          />
        </label>
      </div>

      <ul className={styles.tutorialsList}>
        {tutorials.length ? (
          tutorials.map(item => (
            <ListItem key={item.id} item={item} removeOne={id => dispatch(remove(id))} />
          ))
        ) : (
          <h2>You don't have tutorials</h2>
        )}
      </ul>
    </div>
  );
}

export default MainPage;
