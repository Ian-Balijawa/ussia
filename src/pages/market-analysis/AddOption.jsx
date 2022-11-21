import { Stack, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import { Plus } from 'phosphor-react';

export default ({ option }) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      color={COLORS.SECONDARY}
      alignContent="center"
      sx={{
        cursor: 'pointer',
        margin: '1em 0',
        '&:hover': {
          color: COLORS.PRIMARY
        }
      }}
    >
      <Typography variant="body2" textAlign="left" sx={{ margin: '0.3em 0' }}>
        {option}
      </Typography>
      <Plus size={20} />
    </Stack>
  );
};
