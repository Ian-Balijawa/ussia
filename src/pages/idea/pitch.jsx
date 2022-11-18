import { Box, Stack, Typography } from '@mui/material';

import { Button } from '../../components/Button';
import { COLORS } from '../../constants/colors';
import { Input } from '../../components/Input';
import { Rewind } from 'phosphor-react';
import { useState } from 'react';

export default () => {
  const [uniqueness, setUniqueness] = useState('');
  const [offerComposition, setOfferComposition] = useState('');
  const [targetGroup, setTargetGroup] = useState('');
  const [expectations, setExpecations] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(uniqueness, offerComposition, targetGroup, expectations);
  };

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
        <Rewind size={32} /> Idea
      </Stack>
      <Box>
        <Typography
          variant="h5"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          Your Pitch
        </Typography>
        <Typography
          variant="body2"
          color={COLORS.SECONDARY}
          textAlign="left"
          sx={{ marginBottom: '1em' }}
        >
          With a pitch you explain your business idea in a few minutes. Not an
          easy task! Rest assured, we will help you on your way. Tell us more
          about your plans and we'll write the perfect pitch together.
        </Typography>

        <Typography
          variant="body2"
          color={COLORS.PRIMARY}
          textAlign="left"
          sx={{ margin: '0.3em 0' }}
        >
          Step 1: Tell us a little more about your idea
        </Typography>

        <Box component="form" onSubmit={handleSubmit}>
          <Input
            name="targetGroup"
            value={targetGroup}
            onChange={({ target }) => setTargetGroup(target.value)}
            placeholder="Who do you want to reach?"
          />
          <Input
            name="expectations"
            value={expectations}
            onChange={({ target }) => setExpecations(target.value)}
            placeholder="What needs/expectations does your target group have?"
          />
          <Input
            name="offerComposition"
            value={offerComposition}
            onChange={({ target }) => setOfferComposition(target.value)}
            placeholder="What does your offer consist of?"
          />
          <Input
            name="uniqueness"
            value={uniqueness}
            onChange={({ target }) => setUniqueness(target.value)}
            placeholder="What makes your offer unique?"
          />
        </Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          //   alignItems="center"
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
            <Button variant="outlined" onClick={handleSubmit} size="small">
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
