import * as React from 'react';

import { Box, Stack, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import Checkbox from '@mui/material/Checkbox';
import { Link } from 'react-router-dom';

export default ({ title, to }) => {
  const [checked, setChecked] = React.useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <Box
      sx={{
        textAlign: 'center',
        borderRadius: '5px',
        boxShadow:
          'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        margin: '2rem auto',
        minHeight: '6em',
        paddingBottom: '1rem',
        borderBottom: checked && `5px solid ${COLORS.PRIMARY}`,
        '&:hover': {
          boxShadow:
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          textDecoration: 'none',
          color: COLORS.PRIMARY
        }
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="right"
        sx={{ width: '100%' }}
      >
        <IsCompleted checked={checked} handleChange={handleChange} />
      </Stack>
      <Link
        to={to}
        style={{
          textDecoration: 'none',
          color: COLORS.SECONDARY,
          width: '100%'
        }}
      >
        <Typography variant="body2" component="h1" gutterBottom>
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

const IsCompleted = ({ checked, handleChange }) => {
  return (
    <Checkbox
      sx={{ color: COLORS.PRIMARY, '&.Mui-checked': { color: COLORS.PRIMARY } }}
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
};
