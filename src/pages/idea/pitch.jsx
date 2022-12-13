import { Box, Skeleton, Stack, Typography } from '@mui/material';

import Layout from './Layout';
import ReactPlayer from 'react-player';
import { ListItem } from '../people-and-organisation/enterprenuer-competencies';

import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Stepper from './Stepper';

export default () => {
  const [uniqueness, setUniqueness] = useState('');
  const [offerComposition, setOfferComposition] = useState('');
  const [targetGroup, setTargetGroup] = useState('');
  const [expectations, setExpecations] = useState('');
  const navigator = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(uniqueness, offerComposition, targetGroup, expectations);
  };

  return (
    <Stack direction="row">
      <Layout
        subtitle={'Your Pitch'}
        description={
          "With a pitch you explain your business idea in a few minutes. Not an easy task! Rest assured, we will help you on your way. Tell us more about your plans and we'll write the perfect pitch together."
        }
      >
        <Box spacing={2}>
          <Stack>
            <Stepper />
          </Stack>
        </Box>
      </Layout>
      <InfoSection />
    </Stack>
  );
};

const InfoSection = () => {
  const links = [
    {
      title: 'Five Pitiching Tips in Podcasts',
      href: 'https://www.freelancer.com/community/articles/boost-your-productivity-as-a-freelancer'
    },
    {
      title: 'Pitch your idea without any problems',
      href: 'https://www.freelancer.com/community/articles/10-tips-to-save-time'
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
        Perfect pitch?
      </Typography>
      <Typography color="#2A424E" variant="p">
        Explain your idea in one minute. Keep it simple. If your grandmother and
        14-year-old niece understand, then you have completed your assignment!
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

      <Typography color="#E03C31" fontWeight="bold" margin="1rem 0">
        Related Videos
      </Typography>

      <ReactPlayer
        width="500px"
        url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
        fallback={<Skeleton variant="rectangular" width={350} height={200} />}
      />

      <Typography color="#2A424E" variant="p">
        Want to know more about the elevator pitch? UNIZO advisor Veerle Boon
        tells you all about it.
      </Typography>
    </Stack>
  );
};
