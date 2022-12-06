import styled from 'styled-components';

// ------------------FORM---------------------------------

export const Form = styled.form`
  width: 400px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
  border: 1px solid #2a2a2a;
  border-radius: 4px;
`;

export const Field = styled.label`
  font-size: 20px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Input = styled.input`
  width: 200px;
  padding: 4px;
  font: inherit;
  border-radius: 6px;
`;

export const Button = styled.button`
  width: 100px;
  font-size: 14px;
  padding: 4px 8px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 6px;
  border: none;

  :hover {
    background-color: tomato;
  }
`;
