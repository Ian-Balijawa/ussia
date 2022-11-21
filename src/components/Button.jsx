import { COLORS } from '../constants/colors';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${COLORS.PRIMARY};
  color: #fff;
  border-radius: 10px;
  border: 1px solid ${COLORS.PRIMARY};
  font-size: 1em;
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background: transparent;
    color: ${COLORS.PRIMARY};
  }
`;
