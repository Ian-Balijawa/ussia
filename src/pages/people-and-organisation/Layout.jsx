import { Box, Stack, Typography } from '@mui/material';

import { ArrowLeft } from 'phosphor-react';
import ButtonGroup from '../../components/ButtonGroup';
import { useNavigate } from 'react-router-dom';

export default ({ children, description, subtitle, ...props }) => {
  const navigator = useNavigate();
  return (
    <Box
      spacing={2}
      sx={{
        padding: '1.5rem',
        width: { xs: '100%', md: '60%' },
        background: '#EAEEF1'
      }}
    >
      <Box
        direction="row"
        alignItems="center"
        sx={{ marginBottom: '1em', cursor: 'pointer' }}
        color="#304C59"
        onClick={() => navigator('/people-and-organisation')}
      >
        <ArrowLeft size={20} weight="fill" color="#E03C31" />
        <Typography variant="body1" color="#E03C31">
          People and Organisation
        </Typography>
      </Box>
      <Typography variant="h5" textAlign="left" sx={{ marginBottom: '1em' }}>
        {subtitle}
      </Typography>
      <Typography
        variant="body2"
        textAlign="left"
        sx={{ marginBottom: '1em', paddingRight: '.5rem' }}
      >
        {description}
      </Typography>
      {children}
      <Box>
        <ButtonGroup />
      </Box>
    </Box>
  );
};
