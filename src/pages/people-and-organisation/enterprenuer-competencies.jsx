import { ArrowRight, ArrowSquareOut, Eye } from 'phosphor-react';
import { Box, Divider, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';

import { COLORS } from '../../constants/colors';
import Layout from './Layout';
import MDEditor from '@uiw/react-md-editor';
import rehypeSanitize from 'rehype-sanitize';

export default () => {
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState('');
  const subtitle = 'Entrepreneurial competences';
  const desc =
    "Becoming an entrepreneur is not easy. What is your motivation to become your own boss? In addition, share what your strong competencies are and don't hesitate to mention your weaker competencies. Also indicate whether you already have professional or sector knowledge and whether you will further refine this in the future";

  return (
    <Stack direction="row">
      <Layout description={desc} subtitle={subtitle}>
        <Typography>
          In this step it is important to demonstrate why you are an expert in
          the field in which you want to do business.
        </Typography>
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
                variant="p"
                color={'#ffff'}
                textAlign="left"
                sx={{ margin: '0.3em 0' }}
              >
                The course that led to my start-up as a freelance social media
                expert consists of training and various work experiences. After
                my bachelor's degree in business management (specialization in
                marketing) I was allowed to start at my internship, a marketing
                agency specialized in branding and social media management for
                SMEs. After one year I decided to further expand my knowledge by
                taking a postgraduate degree in digital marketing. Then I got
                the opportunity to help create branding and social media
                management for a promising start-up. When this project turned
                out to be very successful, I decided to start up on a
                self-employed basis. My creativity, perseverance and flexibility
                are definitely my strongest entrepreneurial skills. On the other
                hand, I still have to grow in my commercial insights. That is
                why I am supported by a coach who helps me sell myself and
                prepare a strong elevator pitch. I'm also not a hero on an
                administrative level, which is why I'm working on finding out
                which tools can help me with this.
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
      <InfoSection />
    </Stack>
  );
};

export const InfoSection = () => {
  const softSkills = [
    'Commercial',
    'Creative and resourceful',
    'Enterprising and taking initiative',
    'Perseverance',
    'Accurate and punctual',
    'Driven and ambitious',
    'Leadership',
    'Results-oriented',
    'Eager to learn and open to knowledge',
    'Strong organizational and planning skills'
  ];
  const hardSkills = [
    'Administrative knowledge ',
    'Financial knowledge ',
    'Marketing knowledge ',
    'Expertise'
  ];

  return (
    <Stack
      width="30%"
      sx={{ margin: '1em auto', display: { xs: 'none', md: 'block' } }}
    >
      <Typography variant="p">
        OK! Do not show again We can divide entrepreneurial competences into
        soft competences, the 'soft skills', and the hard, the 'hard skills'.
        It's important to consider both when you get started with this step. The
        soft skills describe how you are as a person, as an entrepreneur. With
        your hard skills you rather describe the knowledge that you have already
        acquired or that you will improve in the near future. Both skills are
        complementary. As a starting entrepreneur you can be very technically
        inclined or have an extremely broad knowledge of certain matters, your
        soft skills are at least as important to turn your idea into a
        successful company.
      </Typography>
      <Box margin="1rem 0">
        <Typography variant="p" sx={{ fontWeight: 'bold' }} color="#E03C31">
          soft skills
        </Typography>
        {softSkills.map((item) => (
          <React.Fragment>
            <ListItem item={item} />
            <Divider orientation="horizontal" flexItem />
          </React.Fragment>
        ))}
      </Box>
      <Box margin="1rem 0">
        <Typography variant="p" sx={{ fontWeight: 'bold' }} color="#E03C31">
          hard skills
        </Typography>
        {hardSkills.map((item) => (
          <React.Fragment>
            <ListItem item={item} />
            <Divider orientation="horizontal" flexItem />
          </React.Fragment>
        ))}
      </Box>
    </Stack>
  );
};

export const ListItem = ({ item, styles, isLink }) => {
  return (
    <Stack
      direction="row"
      alignItems={'center'}
      spacing={2}
      padding={1}
      justifyContent="flex-start"
      sx={{
        cursor: 'pointer',
        ...styles
      }}
    >
      {isLink ? (
        <ArrowSquareOut size={32} weight="fill" color="#E03C31" />
      ) : (
        <ArrowRight size={20} weight="fill" color="#E03C31" />
      )}
      <Typography
        sx={{
          '&:hover': {
            transition: 'all 0.3s ease-in-out',
            color: isLink && '#E03C31'
          }
        }}
        variant="p"
      >
        {item}
      </Typography>
    </Stack>
  );
};
