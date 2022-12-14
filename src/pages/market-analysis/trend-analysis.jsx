import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import Layout from './Layout';
import { ListItem } from '../people-and-organisation/enterprenuer-competencies';
import ReactPlayer from 'react-player';
import Stepper from './Stepper';

export default () => {
  const subtitle = 'Trend analysis';
  const description =
    'You now know who your customers, suppliers, competitors and partners are. But other factors also influence your business. You determine these factors with the trend analysis. You will notice that they also play a crucial role in your business plan.';

  return (
    <Stack direction="row">
      <Layout description={description} subtitle={subtitle}>
        <Stack>
          <Stepper />
        </Stack>
      </Layout>
      <InfoSection />
    </Stack>
  );
};

export const InfoSection = () => {
  const links = [
    {
      title: 'Research and Statistics',
      href: 'https://www.unizo.be/starten'
    },
    {
      title: 'Statbel',
      href: 'https://statbel.fgov.be/en'
    }
  ];

  const tips = [
    'Demographic',
    'Ecological',
    'Socialological',
    'Technological',
    'Economic',
    'Politics'
  ];

  return (
    <Stack
      width="30%"
      sx={{ margin: '1em auto', display: { xs: 'none', md: 'block' } }}
    >
      <Typography
        variant="body1"
        margin="1rem 0"
        color="#E03C31"
        fontWeight="bold"
      >
        Discover the opportunities in your environment through a DESTEP
        analysis:
      </Typography>
      {tips.map((tip) => (
        <React.Fragment key={tip}>
          <ListItem item={tip} />
          <Divider orientation="horizontal" flexItem />
        </React.Fragment>
      ))}

      <Typography variant="p" margin="1rem 0 0 0">
        <span style={{ fontWeight: 'bold', textDecoration: 'underline' }}>
          These examples{' '}
        </span>{' '}
        will help you on the right track.
      </Typography>

      <Box margin="1rem 0">
        <Typography
          variant="body1"
          margin="1rem 0 0 0"
          color="#E03C31"
          fontWeight="bold"
        >
          Useful Links
        </Typography>
        {links.map((link) => (
          <React.Fragment key={link.href}>
            <ListItem item={link.title} isLink={true} />
            <Divider orientation="horizontal" flexItem />
          </React.Fragment>
        ))}
      </Box>

      <ReactPlayer
        width="100%"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        fallback={<Skeleton variant="rectangular" width={500} />}
      />
      <Typography variant="body1" margin="1rem 0 0 0">
        Dare to name your strengths and weaknesses and analyze opportunities and
        threats in the market.
      </Typography>
    </Stack>
  );
};
