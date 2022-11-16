import { COLORS } from '../constants/colors';
import styled from 'styled-components';

export const Button = styled.button`
  background-color: ${COLORS.PRIMARY};
  color: ${COLORS.SECONDARY};
  border-radius: 5px;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: ${COLORS.SECONDARY};
    color: ${COLORS.PRIMARY};
  }
`;
