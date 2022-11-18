import { Box, Stack, Typography } from '@mui/material';
import { Plus, Rewind } from 'phosphor-react';

import { Button } from '../../components/Button';
import { COLORS } from '../../constants/colors';

export default () => {
  return (
    <Box
      sx={{
        padding: '1rem 2rem',
        // width: { sx: '100%', sm: '50%' },
        margin: '1em auto'
      }}
      spacing={2}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{ marginBottom: '1em' }}
        color={COLORS.SECONDARY}
      >
        <Rewind size={32} />
        Idea
      </Stack>
      <Box>
        <Typography
          variant="h5"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          Strengths and weaknesses
        </Typography>
        <Typography
          variant="body2"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          What are the strengths of your idea? Paint them extra. Because they
          might just be the reasons why someone chooses you. But also think
          about the weak points in your story. This way you know exactly what to
          look out for and you can intervene in time.
        </Typography>

        <Typography
          variant="body2"
          color={COLORS.PRIMARY}
          textAlign="left"
          sx={{ margin: '0.3em 0' }}
        >
          What are the strengths of your idea?
        </Typography>
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
          <Typography
            variant="body2"
            textAlign="left"
            sx={{ margin: '0.3em 0' }}
          >
            Add a strength
          </Typography>
          <Plus size={20} />
        </Stack>
        <Typography
          variant="body2"
          color={COLORS.PRIMARY}
          textAlign="left"
          sx={{ margin: '0.3em 0' }}
        >
          What weaknesses are you noticing already?
        </Typography>

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
          <Typography
            variant="body2"
            textAlign="left"
            sx={{ margin: '0.3em 0' }}
          >
            Add a weakness
          </Typography>
          <Plus size={20} />
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignContent="center"
          sx={{ margin: '1em 0' }}
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
            <Button variant="outlined" size="small" style={{ color: 'white' }}>
              Further
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};
