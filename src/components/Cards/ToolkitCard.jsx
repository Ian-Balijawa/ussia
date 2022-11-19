import { Box, Stack, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import { Image } from '@nextui-org/react';

export default ({ src, tags, title, description }) => {
  return (
    <Stack
      direction="row"
      sx={{
        boxShadow:
          'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
        margin: '1rem auto'
      }}
      width="50%"
    >
      <Image src={src} alt={title} width={300} height={230} objectFit="cover" />
      <Box sx={{ padding: '1em', width: '100%' }} spacing={1}>
        {tags.map((tag) => (
          <Box
            key={tag}
            sx={{
              background: COLORS.PRIMARY,
              borderRadius: '10px',
              padding: '5px',
              color: '#fff',
              width: 'fit-content'
            }}
          >
            {tag}
          </Box>
        ))}
        <Box sx={{ color: COLORS.SECONDARY, lineHeight: '1em' }}>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Box>
      </Box>
    </Stack>
  );
};
