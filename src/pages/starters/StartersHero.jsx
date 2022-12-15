import { Box, Divider, Stack, Typography } from '@mui/material';

import Card from './HeroCard';
import { Image } from '@nextui-org/react';
import { cards } from './card-data';

export default () => {
  return (
    <Stack padding="1rem 0" margin="1rem 0" sx={{ background: '#E8EEF0' }}>
      <Stack width="80%" margin="1rem auto" sx={{ background: '#fff' }}>
        <Box overflow="hidden" margin="1rem">
          <Typography variant="p" fontWeight="light">
            <span>Starters</span> {'>'} All information for starting your own
            business
          </Typography>
          <Divider orientation="horizontal" flexItem />
        </Box>

        <Typography
          padding="1rem"
          variant="h6"
          fontWeight="bold"
          margin="1rem 0"
        >
          UNIZO Start - Starting your own business
        </Typography>

        <Image
          src="https://www.unizo.be/sites/default/files/resize/unizo_startersroadshows_2023_0-1000x154.png"
          alt="Start your own business"
          width="100%"
          height="auto"
        />
        <Stack
          margin="1rem 0"
          direction="row"
          justifyContent={{ xs: 'center', md: 'space-around' }}
          sx={{ flexWrap: 'wrap' }}
        >
          {cards.map((card) => (
            <Card {...card} key={card.title} />
          ))}
        </Stack>
      </Stack>
    </Stack>
  );
};
