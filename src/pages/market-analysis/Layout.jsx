import { Box, Button, Stack, Typography } from '@mui/material';

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
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ margin: '1em auto' }}
          >
            <Button variant="outlined" size="small">
              Back
            </Button>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              spacing={3}
            >
              <Button variant="outlined" size="small">
                Save
              </Button>
              <Button variant="outlined" size="small">
                Further
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};
