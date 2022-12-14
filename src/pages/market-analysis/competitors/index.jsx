import { Box, Divider, Stack, Typography } from '@mui/material';

import Layout from '../Layout';
import { ListItem } from '../../people-and-organisation/enterprenuer-competencies';
import React from 'react';
import Stepper from './Stepper';

export default () => {
  const subtitle = 'Competitors';
  const description =
    'Of course you also have to deal with competition. To be successful, you need to differentiate yourself from them. So study your competitors thoroughly and determine what makes you so unique. Respond to this and let (potential) customers find their way to you.';

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
      title: 'Find out what your customer is looking for with Google Trends',
      href: '#'
    },
    {
      title: 'All about competition in the real sector',
      href: '#'
    },
    {
      title:
        'Why a good market analysis has such a big influence on your success',
      href: '#'
    }
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
        Distinguish between:
      </Typography>
      <ListItem item={'Indirect competitors'} />
      <Typography variant="body1" margin="1rem 0">
        <span style={{ fontWeight: 'bolder' }}>​Companies: </span>
        that sell alternative products or services. They don't sell the same
        thing, but they are often in the same sector. For example, the seller of
        lenses is an indirect competitor of the seller of glasses.
      </Typography>
      <ListItem item={'Direct competitors'} />
      <Typography variant="body1" margin="1rem 0">
        ​Companies that offer the same products and services to the same target
        group.
      </Typography>
      <Box margin="1rem 0">
        <Typography
          variant="body1"
          margin="1rem 0 0 0"
          color="#E03C31"
          fontWeight="bold"
        >
          Useful links
        </Typography>
        {links.map((link) => (
          <ListItem item={link.title} key={link.title} isLink={true} />
        ))}
      </Box>
    </Stack>
  );
};
