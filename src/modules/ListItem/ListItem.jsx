import { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './ListItem.module.css';

function ListItem({ item, removeOne }) {
  const [quest, setQuest] = useState(false);

  return (
    <li className={styles.item}>
      <div className={styles.cardProps}>
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
              <Link className={styles.openBtn} to={`/tutorials/${item.id}`}>
                Open
              </Link>
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
                  removeOne(item.id);
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
    </li>
  );
}

export default ListItem;

ListItem.propTypes = {
  removeOne: PropTypes.func.isRequired,
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    published: PropTypes.bool.isRequired,
    createdAt: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
  }),
};
