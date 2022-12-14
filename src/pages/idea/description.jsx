import { ArrowLeft, ArrowRight, Eye } from 'phosphor-react';
import { Box, Skeleton, Stack, Typography } from '@mui/material';

import { COLORS } from '../../constants/colors';
import Layout from './Layout';
import { ListItem } from '../people-and-organisation/enterprenuer-competencies';
import MDEditor from '@uiw/react-md-editor';
import ReactPlayer from 'react-player';
import rehypeSanitize from 'rehype-sanitize';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState('');
  const [currentVideoUrl, setCurrentVideoUrl] = useState(
    'https://youtu.be/rEYWpVgaP-M'
  );
  const navigator = useNavigate();
  const videoUrls = [
    'https://www.youtube.com/watch?v=2Z4m4lnjxkY',
    'https://youtu.be/rEYWpVgaP-M'
  ];
  const subtitle = 'Description';
  const desc =
    'When do you know your idea is good? Tell your friends or family. Explain how you want to market it. Do they understand you right away? Then your description is clear. Do you notice that they are not with your story? Ask why and what they are missing. Continue writing your idea until the whole story is correct.';

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
      <Layout description={desc} subtitle={subtitle}>
        <Box>
          {visible ? (
            <Box
              spacing={1}
              sx={{
                background: COLORS.SECONDARY,
                padding: '1rem',
                borderRadius: '5px'
              }}
            >
              <Typography
                variant="h6"
                color={'#ffff'}
                textAlign="left"
                sx={{ margin: '0.3em 0' }}
              >
                This is how Edelweiss approached it:
              </Typography>
              <Typography variant="body2" color={'#ffff'} textAlign="left">
                I call my business a feel-good bar because I want to create a
                place where everyone feels good and at home. This feel-good
                moment is filled in a different way for everyone. For some, this
                feel-good moment consists of picking up a juice in the store.
                For others from stopping by and enjoying a fresh bowl of soup.
                Another reason why I don't want to call my business a juice or
                soup bar is because I don't want to be tied to a specific
                product category.
              </Typography>
            </Box>
          ) : null}
          <Typography
            variant="body2"
            color={COLORS.PRIMARY}
            sx={{ cursor: 'pointer', margin: '1em 0' }}
            textAlign="left"
            onClick={() => setVisible((visibility) => !visibility)}
          >
            {visible ? (
              <Stack
                direction="row"
                alignItems="center"
                sx={{ marginBottom: '1em', width: '10%' }}
                color={COLORS.PRIMARY}
                spacing={1}
              >
                <Eye size={16} color="#E03C31" /> Hide example
              </Stack>
            ) : (
              <Stack
                direction="row"
                alignItems="center"
                sx={{ marginBottom: '1em' }}
                color={COLORS.PRIMARY}
                spacing={1}
              >
                <Eye size={16} color="#E03C31" /> Show example
              </Stack>
            )}
          </Typography>
          <MDEditor
            value={description}
            onChange={setDescription}
            previewOptions={{
              rehypePlugins: [[rehypeSanitize]]
            }}
          />
          <MDEditor.Markdown
            source={description}
            style={{ whiteSpace: 'pre-wrap' }}
          />
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
      title: 'Want to checkt the feasibility of your idea?',
      href: 'https://www.freelancer.com/community/articles/boost-your-productivity-as-a-freelancer'
    },
    {
      title: '10 pitfalls of a starting enterprenuer',
      href: 'https://www.freelancer.com/community/articles/10-tips-to-save-time'
    },
    {
      title: 'Claim your Idea',
      href: 'https://www.freelancer.com/community/articles/quickly-and-easily-manage-your-accounting-completely-online'
    },
    {
      title: 'Is your Idea strong enough?',
      href: 'https://www.freelancer.com/community/articles/quickly-and-easily-manage-your-accounting-completely-online'
    },
    {
      title: 'Check the availability of your desired company name',
      href: 'https://www.freelancer.com/community/articles'
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
        Need help developing your idea?
      </Typography>
      <Typography color="#2A424E" variant="p">
        Let our coaches assist you in developing a strong business plan. They
        think along with you about your idea, but always provide a critical eye.
        More information can be found here:
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
          isLink={true}
          item={link.title}
          styles={{ textDecoration: 'underline' }}
          href={link.href}
        />
      ))}
      <Typography color="#E03C31" fontWeight="bold" margin="1rem 0">
        To ask?
      </Typography>
      <Typography color="#2A424E" variant="p">
        Do you have questions about your personal status? Let an expert assist
        you.
      </Typography>
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
        width="400px"
        url={currentVideoUrl}
        fallback={<Skeleton variant="rectangular" width={350} height={200} />}
      />
      <Box margin="1rem 0">
        <ListItem item="Make your idea concrete with the BMC" />
      </Box>
    </Stack>
  );
};
