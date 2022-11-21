import { Box, Stack, Typography } from '@mui/material';

import ButtonGroup from '../../components/ButtonGroup';
import { COLORS } from '../../constants/colors';
import { Rewind } from 'phosphor-react';

export default ({ children, description, subtitle, ...props }) => {
  return (
    <Box
      spacing={2}
      sx={{
        padding: '1rem 2rem',
        // width: { sx: '100%', sm: '50%' },
        margin: '1em auto'
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{ marginBottom: '1em' }}
        color={COLORS.SECONDARY}
      >
        <Rewind size={32} /> Market Analysis
      </Stack>
      <Box>
        <Typography
          variant="h5"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          {subtitle}
        </Typography>
        <Typography
          variant="body2"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          {description}
        </Typography>
        {children}
        <Box>
          <ButtonGroup />
        </Box>
      </Box>
    </Box>
  );
};
