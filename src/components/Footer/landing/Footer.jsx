import { Box, Stack, Typography } from '@mui/material';

import { Image } from '@nextui-org/react';
import logo from '../../../assets/logo.png';

export default () => {
  const links = [
    {
      title: 'Activities',
      links: [
        'The province of Antwerp',
        'Limburg',
        'East Flanders',
        'West Flanders',
        'Flemish Brabant',
        'Brussels Region'
      ]
    },
    {
      title: 'Advocacy',
      links: ['Press Releases', 'View points']
    },
    {
      title: 'Information & advice',
      links: [
        'News',
        'Publications',
        'Knowledge Network',
        'Research and Statistics',
        'Projects'
      ]
    },
    {
      title: 'About us',
      links: [
        'Management',
        'About UNIZO',
        'Membership',
        'Member benefits',
        'Advertising and Partnerships',
        'In your region',
        'Jobs'
      ]
    },
    {
      title: 'Become a member',
      links: [
        'Start your business',
        'International active',
        'Trade and ecommerce',
        'Manufacturing Companies and crafts',
        'Free professions',
        'Sectors',
        'Leave'
      ]
    }
  ];

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: 'repeat(2,1fr)', md: 'repeat(6,1fr)' },
        gap: '2',
        padding: '1rem',
        background: '#2D2926'
      }}
    >
      <Stack
        spacing={2}
        justifyContent="flex-start"
        alignItems="flex-start"
        margin=""
      >
        <Image src={logo} width={150} height={100} alt="unizo logo" />
        <Typography color="#fff">Quay Willebroek 37</Typography>
        <Typography color="#fff">B-1000 Brussels</Typography>
        <Typography color="#fff">02 21 22 678</Typography>
      </Stack>

      {links.map((link) => (
        <Stack
          spacing={2}
          justifyContent="flex-start"
          alignItems="flex-start"
          margin=""
        >
          <Box margin="1rem 0">
            <Typography variant="h6" color="#fff">
              {link.title}
            </Typography>
          </Box>
          {link.links.map((link) => (
            <Typography color="#fff">{link}</Typography>
          ))}
        </Stack>
      ))}
    </Box>
  );
};
