import { Field, Formik } from 'formik';
import PropTypes from 'prop-types';
import styles from './Form.module.css';

import * as yup from 'yup';

const validationSchema = yup.object().shape({
  title: yup.string().required('Title is required!'),
  description: yup.string().required('Description is required!'),
  published: yup.boolean(),
});

export default function Form({ submitForm, initialValues, edit = false }) {
  return (
    <Formik
      initialValues={initialValues}
      validateOnBlur
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        submitForm(values);
        actions.resetForm();
      }}
    >
      {({ values, errors, touched, handleChange, handleBlur, handleSubmit, dirty, isValid }) => (
        <div className={styles.container}>
          <div className={styles.form}>
            <div className={styles.inputWrap}>
              <label htmlFor="title">Title</label>
              <Field
                name="title"
                id="title"
                value={values.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <div className={styles.inputWrap}>
              <label htmlFor="description">Description </label>
              <Field
                name="description"
                id="description"
                value={values.description}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <label>
              Published
              <Field
                type={'checkbox'}
                name="published"
                id="published"
                checked={values.published}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <button className={styles.btn} onClick={handleSubmit} type="submit">
              {edit ? 'Edit' : 'Add'}
            </button>
          </div>
        </div>
      )}
    </Formik>
  );
}

Form.propTypes = {
  submitForm: PropTypes.func.isRequired,
  edit: PropTypes.bool,
  initialValues: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    published: PropTypes.bool.isRequired,
  }),
};
