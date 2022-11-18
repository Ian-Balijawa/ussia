import { Box, Stack } from '@mui/material';

import { COLORS } from '../../constants/colors';
import { Image } from '@nextui-org/react';
import Typography from '@mui/material/Typography';

export default ({ videoInfo }) => {
  const { title, description, src, tags } = videoInfo;
  return (
    <Stack
      direction="column"
      spacing={1}
      justifyContent="space-between"
      maxHeight="70%"
      sx={{
        margin: '1rem auto',
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        borderRadius: '5px'
      }}
    >
      <Image
        src={src || '/images/me.png'}
        alt={title}
        style={{ borderRadius: '5px' }}
      />
      <Stack
        direction="row"
        spacing={1}
        alignItems={'center'}
        sx={{ paddingLeft: '1em' }}
        alignContent={'flex-start'}
      >
        {tags.map((tag) => (
          <Box
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
      </Stack>
      <Typography
        variant="body2"
        color={COLORS.SECONDARY}
        sx={{ padding: '1rem' }}
      >
        {description}
      </Typography>
    </Stack>
  );
};
