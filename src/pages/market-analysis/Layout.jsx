import { Box, Stack, Typography } from '@mui/material';

import { ArrowLeft } from 'phosphor-react';
import ButtonGroup from '../../components/ButtonGroup';
import { COLORS } from '../../constants/colors';
import { useNavigate } from 'react-router-dom';

export default ({ children, description, subtitle, ...props }) => {
  const navigator = useNavigate();
  return (
    <Box
      spacing={2}
      sx={{
        width: { xs: '100%', md: '60%' },
        background: '#EAEEF1'
      }}
    >
      <Stack width="90%" margin="1rem auto">
        <Stack
          direction="row"
          alignItems="center"
          sx={{ marginBottom: '1em', cursor: 'pointer' }}
          color="#304C59"
          onClick={() => navigator('/market-analysis')}
        >
          <ArrowLeft size={20} weight="fill" color="#E03C31" />
          <Typography
            variant="body1"
            color="#E03C31"
            sx={{ marginLeft: '0.3em' }}
          >
            Market Analysis
          </Typography>
        </Stack>
        <Box>
          <Typography variant="h5" margin="1em 0">
            {subtitle}
          </Typography>
          <Typography variant="body2" margin="1em 0">
            {description}
          </Typography>
          {children}
          <ButtonGroup />
        </Box>
      </Stack>
    </Box>
  );
};
