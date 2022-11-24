import { Box, Stack, Typography } from '@mui/material';
import { Link as ReactRouterLink, useNavigate } from 'react-router-dom';

import { COLORS } from '../../constants/colors';
import { Image } from '@nextui-org/react';
import business from '../../assets/icons/business.svg';
import course from '../../assets/icons/course.svg';
import podcast from '../../assets/icons/podcast.svg';
import toolkit from '../../assets/icons/toolkit.svg';
import video from '../../assets/icons/videos.svg';

export default () => {
  const links = [
    { name: 'Business Plan', icon: business, href: '/to-work' },
    {
      name: 'videos',
      icon: video,
      href: '/videos'
    },
    {
      name: 'Toolkit',
      icon: toolkit,
      href: '/toolkit'
    },
    {
      name: 'Courses',
      icon: course,
      href: '/courses'
    },
    {
      name: 'Podcasts',
      icon: podcast,
      href: '/podcasts'
    }
  ];
  return (
    <Box>
      <Typography
        color={COLORS.PRIMARY}
        fontWeight="bold"
        variant="h4"
        sx={{ marginTop: '5rem' }}
        textAlign="center"
      >
        The Starters platform: 5 tools
      </Typography>
      <Stack direction="row" alignItems="center" justifyContent="center">
        {links.map((link) => (
          <Link
            name={link.name}
            icon={link.icon}
            href={link.href}
            key={link.name}
          />
        ))}
      </Stack>
    </Box>
  );
};

const Link = ({ name, icon, href }) => {
  const navigate = useNavigate();
  return (
    <Stack
      direction="row"
      sx={{ cursor: 'pointer', margin: '1rem' }}
      onClick={navigate(href)}
    >
      <Image src={icon} width={25} height={25} alt={`${name} icon`} />
      <Typography
        color={COLORS.SECONDARY}
        sx={{ '&:hover': { color: COLORS.PRIMARY }, textDecoration: 'none' }}
      >
        {name}
      </Typography>
    </Stack>
  );
};
