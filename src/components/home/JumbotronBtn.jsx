import styled from 'styled-components';

export const Button = styled.button`
  background-color: #e03c31;
  color: #ffffff;
  border: 1px solid #e03c31;
  outline: none;
  width: fit-content;
  padding: 0.7em 2rem;
  border-radius: 3rem;
  cursor: pointer;
  margin: 1rem auto;

  &:hover {
    color: #e03c31;
    background: transparent;
    transition: all 0.2s ease-in;
  }
`;
