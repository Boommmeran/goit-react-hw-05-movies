import { Formik } from 'formik';
import { StyledForm, Input, Button } from './SearchForm.styled';
import { ImSearch } from 'react-icons/im';

const SearchForm = ({ onSubmit }) => {
  return (
    <Formik initialValues={{ query: '' }} onSubmit={onSubmit}>
      <StyledForm>
        <Input type="text" name="query" />
        <Button type="submit">{<ImSearch />}</Button>
      </StyledForm>
    </Formik>
  );
};

export default SearchForm;
