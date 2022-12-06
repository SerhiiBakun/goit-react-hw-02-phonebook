import styled from 'styled-components';

export const Contact = styled.div`
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 350px;
`;

export const Delete = styled.button`
  font-size: 12px;
  height: 25px;
  padding: 4px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  :hover {
    background-color: tomato;
  }
`;
