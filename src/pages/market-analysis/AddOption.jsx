import { Stack, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import { Plus } from 'phosphor-react';

export default ({ item }) => {
  return (
    <Stack direction="row" alignItems="center" alignContent="center">
      <Typography
        variant="body2"
        textAlign="left"
        sx={{
          margin: '0.3em 0',
          textDecoration: 'underline',
          cursor: 'pointer',
          '&:hover': {
            color: COLORS.PRIMARY,
            textDecoration: 'none'
          }
        }}
      >
        {item}
      </Typography>
      <Plus size={20} weight="fill" color="#E03C31" />
    </Stack>
  );
};
