import { Box, Stack, Typography } from '@mui/material';

import { COLORS } from './../../constants/colors';
import { Link } from 'react-router-dom';

export default ({ title, to }) => {
  return (
    <Link to={to} style={{ textDecoration: 'none', color: COLORS.SECONDARY }}>
      <Stack
        justifyContent="center"
        alignItems="center"
        sx={{
          textAlign: 'center',
          borderRadius: '5px',
          boxShadow:
            'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
          margin: '1rem auto',
          width: '100%',
          minHeight: '4em',
          '&:hover': {
            boxShadow:
              'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'
          }
        }}
      >
        <Typography variant="body2" component="h1" gutterBottom>
          {title}
        </Typography>
      </Stack>
    </Link>
  );
};
