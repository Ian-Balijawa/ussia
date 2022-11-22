import { COLORS } from '../constants/colors';
import { Button as MUIButton } from '@mui/material';

export const Button = (props) => {
  const { styles } = props;

  return (
    <MUIButton
      {...props}
      sx={{
        textTransform: 'none',
        border: 'none',
        backgroundColor: COLORS.PRIMARY,
        color: '#fff',
        '&:hover': {
          backgroundColor: '#6C757D',
          border: 'none'
        },
        ...styles
      }}
    />
  );
};
