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
      sx={{
        background: COLORS.PRIMARY,
        margin: '3rem auto'
      }}
    >
      <Box
        direction="row"
        alignItems="center"
        width="40%"
        justifyContent="center"
      >
        <Headset size={20} weight="fill" color="#ffff" />
        <Stack>
          <Typography
            variant="h5"
            color="#ffff"
            fontWeight="bold"
            align="center"
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
      </Box>
      <Stack width="30%">
        <Input
          placeholder={'I have a question related...'}
          style={{ height: '10rem', padding: '0 2rem' }}
        />
        <Button
          style={{
            background: '#fff',
            color: '#E03C31',
            // width: '100%',
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
