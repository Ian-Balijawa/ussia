import { Box, Stack, Typography, Divider, Skeleton } from '@mui/material';

import React, { useState } from 'react';
import { ListItem } from '../people-and-organisation/enterprenuer-competencies';
import ReactPlayer from 'react-player';

import Layout from './Layout';
import Stepper from './Stepper';
import { ArrowLeft, ArrowRight } from 'phosphor-react';

export default () => {
  const subtitle = 'Target Group Determination';
  const description =
    'You can only make the right choices for your company if you know who your customers are and what they do. Who are your potential customers? Do they need your products/services? Is it necessary to adapt your offer to the needs of your target audience?';
  const [currentVideoUrl, setCurrentVideoUrl] = useState(
    'https://youtu.be/rEYWpVgaP-M'
  );
  const videoUrls = [
    'https://www.youtube.com/watch?v=2Z4m4lnjxkY',
    'https://youtu.be/rEYWpVgaP-M'
  ];

  const showNextVideo = () => {
    const currentIndex = videoUrls.indexOf(currentVideoUrl);
    if (currentIndex === videoUrls.length - 1) {
      setCurrentVideoUrl(videoUrls[0]);
    } else {
      setCurrentVideoUrl(videoUrls[currentIndex + 1]);
    }
  };

  const showPreviousVideo = () => {
    const currentIndex = videoUrls.indexOf(currentVideoUrl);
    if (currentIndex === 0) {
      setCurrentVideoUrl(videoUrls[videoUrls.length - 1]);
    } else {
      setCurrentVideoUrl(videoUrls[currentIndex - 1]);
    }
  };
  return (
    <Stack direction="row">
      <Layout description={description} subtitle={subtitle}>
        <Stack>
          <Stepper />
        </Stack>
      </Layout>
      <InfoSection
        currentVideoUrl={currentVideoUrl}
        showNextVideo={showNextVideo}
        showPreviousVideo={showPreviousVideo}
      />
    </Stack>
  );
};

export const InfoSection = ({
  currentVideoUrl,
  showNextVideo,
  showPreviousVideo
}) => {
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
        Need help determining your target audience?
      </Typography>
      <Typography variant="body1">
        Let our coaches assist you and map out your target group together with
        them. An external sounding board ensures that you don't overlook
        anything. More information can be found here:
        https://www.unizo.be/starten
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
        <Typography variant="body1">
          Statistics are a tool to get more information about your target group.
          Check out the links below, or search Google for additional statistics
          that are relevant to your business idea.
        </Typography>
        {links.map((link) => (
          <React.Fragment key={link.href}>
            <ListItem item={link.title} />
            <Divider orientation="horizontal" flexItem />
          </React.Fragment>
        ))}
      </Box>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Typography color="#E03C31" fontWeight="bold" margin="1rem 0">
          Related Videos
        </Typography>
        <Stack direction="row" spacing={2}>
          <Stack
            justifyContent="center"
            alignItems="center"
            onClick={() => showNextVideo()}
            sx={{
              borderRadius: '50%',
              padding: '0.2rem',
              cursor: 'pointer',
              border: '1px solid #2A424E',
              background: '#fff'
            }}
          >
            <ArrowLeft weight="fill" size={20} color="" />{' '}
          </Stack>
          <Stack
            justifyContent="center"
            alignItems="center"
            onClick={() => showPreviousVideo()}
            sx={{
              borderRadius: '50%',
              padding: '0.2rem',
              cursor: 'pointer',
              background: '#E03C31'
            }}
          >
            <ArrowRight weight="fill" size={20} color="#fff" />{' '}
          </Stack>
        </Stack>
      </Stack>
      <ReactPlayer
        width="100%"
        url={currentVideoUrl}
        fallback={<Skeleton variant="rectangular" width={500} />}
      />
      <Typography variant="body1" margin="1rem 0 0 0">
        Get a better understanding of who your customers are and how best to
        reach them thanks to our expert's tips.
      </Typography>
    </Stack>
  );
};
