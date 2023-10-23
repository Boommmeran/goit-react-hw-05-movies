import { Formik, Form, Field } from 'formik';

const SearchForm = ({onSubmit, query}) => {
  return (
    <Formik initialValues={{ query }} onSubmit={onSubmit}>
      <Form>
        <Field type="text" name="query" />
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;