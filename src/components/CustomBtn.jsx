import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${(props) =>
    props.type === 'save' ? 'transparent' : '#e03c31'};
  color: ${({ type }) => (type === 'save' ? '#2A424E' : '#fff')};
  border: 1px solid #e03c31;
  outline: none;
  width: fit-content;
  padding: 0.7em 2rem;
  border-radius: 3rem;
  cursor: pointer;

  &:hover {
    color: ${({ type }) => (type === 'save' ? '#fff' : '#e03c31')};
    background: ${({ type }) => (type === 'save' ? '#2A424E' : 'transparent')};
    transition: all 0.2s ease-in;
  }
`;
