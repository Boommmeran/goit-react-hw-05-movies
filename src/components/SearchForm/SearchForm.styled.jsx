import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

export const Input = styled(Field)`
  width: 300px;
  padding: 10px;
  border: 1px solid #800;
  border-radius: 4px;
  margin-right: 10px;
  outline: none;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #800;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  :hover {
    background-color: #531010;
  }
`;
