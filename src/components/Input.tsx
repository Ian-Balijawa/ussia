import { TextField, TextFieldProps } from '@mui/material';

import { FC } from 'react';

export const Input: FC<TextFieldProps> = (props) => {
  return (
    <TextField
      id="outlined-basic"
      variant="outlined"
      size="small"
      {...props}
      sx={{ ...styles }}
    />
  );
};

const styles = {
  width: '100%',
  borderRadius: '5px',
  border: 'none'
};
