import { Box, Stack, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import { Image } from '@nextui-org/react';

export default ({ src, tags, title, description }) => {
  return (
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
      alignItems="center"
      spacing={4}
      sx={{
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px'
      }}
    >
      <Image src={src} alt={title} width="30%" height={200} objectFit="cover" />
      <Stack direction="column" justifyContent="space-around" width={'100%'}>
        {tags.map((tag) => (
          <Box
            width="fit-content"
            key={tag}
            sx={{
              background: COLORS.PRIMARY,
              borderRadius: '10px',
              padding: '5px',
              color: '#fff'
            }}
          >
            {tag}
          </Box>
        ))}
        <Box sx={{ color: COLORS.SECONDARY }}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </Stack>
    </Stack>
  );
};
