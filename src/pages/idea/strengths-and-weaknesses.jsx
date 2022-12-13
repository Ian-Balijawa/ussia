import { Plus } from 'phosphor-react';
import { ArrowLeft, ArrowRight } from 'phosphor-react';
import { Box, Skeleton, Stack, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import Layout from './layout';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import ReactPlayer from 'react-player';
import { ListItem } from '../people-and-organisation/enterprenuer-competencies';

export default () => {
  const [description, setDescription] = useState('');
  const [currentVideoUrl, setCurrentVideoUrl] = useState(
    'https://youtu.be/rEYWpVgaP-M'
  );
  const navigator = useNavigate();
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
      <Layout
        description={
          'What are the strengths of your idea? Paint them extra. Because they might just be the reasons why someone chooses you. But also think about the weak points in your story. This way you know exactly what to look out for and you can intervene in time.'
        }
        subtitle={'Strengths and weaknesses'}
      >
        <Box spacing={2}>
          <Typography
            variant="body2"
            color={COLORS.PRIMARY}
            textAlign="left"
            sx={{ margin: '0.3em 0' }}
          >
            What are the strengths of your idea?
          </Typography>
          <Stack
            direction="row"
            alignItems="center"
            color={COLORS.SECONDARY}
            alignContent="center"
            sx={{
              cursor: 'pointer',
              margin: '1em 0',
              '&:hover': {
                color: COLORS.PRIMARY
              }
            }}
          >
            <Typography
              variant="body2"
              textAlign="left"
              sx={{ margin: '0.3em 0' }}
            >
              Add a strength
            </Typography>
            <Plus size={20} />
          </Stack>
          <Typography
            variant="body2"
            color={COLORS.PRIMARY}
            textAlign="left"
            sx={{ margin: '0.3em 0' }}
          >
            What weaknesses are you noticing already?
          </Typography>

          <Stack
            direction="row"
            alignItems="center"
            color={COLORS.SECONDARY}
            alignContent="center"
            sx={{
              cursor: 'pointer',
              margin: '1em 0',
              '&:hover': {
                color: COLORS.PRIMARY
              }
            }}
          >
            <Typography
              variant="body2"
              textAlign="left"
              sx={{ margin: '0.3em 0' }}
            >
              Add a weakness
            </Typography>
            <Plus size={20} />
          </Stack>
        </Box>
      </Layout>
      <InfoSection
        currentVideoUrl={currentVideoUrl}
        showNextVideo={showNextVideo}
        showPreviousVideo={showPreviousVideo}
      />
    </Stack>
  );
};

const InfoSection = ({ currentVideoUrl, showNextVideo, showPreviousVideo }) => {
  const links = [
    {
      title: 'Help with your Idea',
      href: 'https://www.freelancer.com/community/articles/boost-your-productivity-as-a-freelancer'
    },
    {
      title: 'Find Inspiration in another area',
      href: 'https://www.freelancer.com/community/articles/10-tips-to-save-time'
    },
    {
      title: 'Protect your Idea',
      href: 'https://www.freelancer.com/community/articles/quickly-and-easily-manage-your-accounting-completely-online'
    }
  ];
  return (
    <Stack
      width="30%"
      sx={{ margin: '1em auto', display: { xs: 'none', md: 'block' } }}
    >
      <Typography
        color="#E03C31"
        fontWeight="bold"
        margin="1rem 0"
        variant="body1"
      >
        Get off to a smooth start
      </Typography>
      <Typography color="#2A424E" variant="p">
        By considering the strengths and weaknesses of your idea in the
        beginning, you will become much{' '}
        <span style={{ fontWeight: 'bolder' }}>
          more aware of your business.{' '}
        </span>
        Play to your strengths and take actions to overcome potential
        weaknesses.
      </Typography>
      <Typography
        fontWeight="bold"
        variant="body1"
        margin="1rem 0"
        color="#E03C31"
      >
        Useful Links
      </Typography>
      {links.map((link) => (
        <ListItem
          item={link.title}
          styles={{ textDecoration: 'underline' }}
          href={link.href}
        />
      ))}
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
            onClick={() => showPreviousvideo()}
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
        width="500px"
        url={currentVideoUrl}
        fallback={<Skeleton variant="rectangular" width={350} height={200} />}
      />
      <Typography marginTop="2rem" variant="p">
        Difficult to share your idea with others? Our expert Frank tells you
        what to do to protect it.
      </Typography>

      <ListItem item="Get started yourself" />
    </Stack>
  );
};
