import { Box, Stack, Typography } from '@mui/material';

import { Button } from '../CustomBtn';
import { COLORS } from '../../constants/colors';
import { Headset } from 'phosphor-react';
import { Input } from '../Input';

export default () => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      justifyContent={{ xs: 'center', md: 'flex-start' }}
      alignItems={{ xs: 'center', md: 'flex-start' }}
      spacing={4}
      sx={{
        background: COLORS.PRIMARY
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        alignItems="center"
        spacing={3}
        width={{ xs: '100%', md: '50%' }}
        justifyContent="space-between"
        padding="2rem"
      >
        <Headset size={200} weight="fill" color="#ffff" />
        <Stack
          margin="0 1em"
          justifyContent="center"
          alignItems="center"
          padding="1rem "
        >
          <Typography
            variant="h5"
            color="#ffff"
            alignItems="center"
            fontWeight="bold"
            marginBottom="1.5em"
          >
            Ask your question to the UNIZO Ondernemerslijn here
          </Typography>
          <Typography variant="body1" color="#fff" gutterBottom>
            Or call 02 21 22 678 for your daily business questions, for all the
            information about UNIZO membership and for that one unique tip to do
            more with fewer worries.
          </Typography>
        </Stack>
      </Stack>
      <Stack width={{ xs: '100%', md: '40%' }} padding="2rem">
        <textarea
          placeholder={'I have a question related...'}
          rows={5}
          columns={100}
          style={{
            padding: '1rem',
            alignSelf: 'center',
            width: '85%',
            outline: 'none',
            border: '1px solid #ccc',
            borderRadius: '1rem'
          }}
        />
        <Button
          style={{
            background: '#fff',
            color: '#E03C31',
            width: '80%',
            borderRadius: '1em',
            alignSelf: 'center',
            margin: '1rem auto'
          }}
        >
          Send
        </Button>
      </Stack>
    </Stack>
  );
};
