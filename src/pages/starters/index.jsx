import { Box, Stack, Typography } from '@mui/material';

import { Button } from '../../components/CustomBtn';
import Footer from '../../components/Footer/landing/Footer';
import { Image } from '@nextui-org/react';
import { Input } from '../../components/Input';
import Jumbotron from './Jumbotron';
import NavContainer from '../../components/landing/NavContainer';
import PartnerDiscovery from '../../components/landing/PartnerDiscovery';
import React from 'react';
import ReactPlayer from 'react-player';
import StartersHero from './StartersHero';
import cards from './cards.json';

export default () => {
  return (
    <React.Fragment>
      <NavContainer />
      <StartersHero />
      <Stack width="80%" margin="1rem auto" sx={{ background: '#fff' }}>
        <Typography margin="1rem 0" variant="p">
          Get started with the Starters platform!
        </Typography>

        <ReactPlayer
          url={'https://www.youtube.com/watch?v=SWoOY2NozlY'}
          width="100%"
          height="600px"
          controls
        />
      </Stack>
      <Stack width="80%" margin="1rem auto" sx={{ background: '#fff' }}>
        <Typography margin="1rem 0" variant="body1">
          Everything a starter needs to make his dream come true in 1 digital
          place.
        </Typography>
        <Typography margin="1rem 0" variant="body1">
          In addition to the existing tool to write a business plan, more than
          70 videos are available on all start-up themes, you will find useful
          documents and downloads to get started as a starter and we guide you
          through certain themes thanks to our courses.
        </Typography>
        <Button>Discover the starters platform here</Button>
        <Box margin="1rem 0">
          <Image
            src="/images/ad.png"
            alt="Start your own business"
            width="100%"
            height="auto"
          />
        </Box>
      </Stack>

      <Stack
        width="80%"
        padding="1rem"
        margin="1rem auto"
        sx={{ background: '#E8EEF0' }}
      >
        <Typography margin="1rem 0" fontWeight="bold" variant="body1">
          Ready to start your own business?
        </Typography>
        <Typography margin="1rem 0" variant="body2">
          Participate in an online session Starting as an independent
          entrepreneur ! We guide you through the start-up course from A to Z.
          From starting conditions, legal forms, subsidies and support measures,
          to social status, accounting and VAT. In addition, the starters
          advisor will give you specific tips for a strong start and how to
          start a business plan.
        </Typography>
        <Button type="save">All about these online sessions</Button>
      </Stack>
      {cards.map((card, index) => (
        <Jumbotron
          key={card.title}
          {...card}
          direction={index % 2 !== 0 ? 'row-reverse' : 'row'}
        />
      ))}
      <Stack
        width="80%"
        padding="1rem"
        margin="1rem auto"
        sx={{ background: '#E8EEF0' }}
      >
        <Typography margin="1rem 0" fontWeight="bold" variant="body1">
          Didn't find what you were looking for?
        </Typography>
        <Typography margin="1rem 0" variant="body2">
          Contact the UNIZO Starterslijn free of charge via 02 21 22 677 or
          <span style={{ color: '#E03C31', textDecoration: 'underline' }}>
            {' '}
            starterslijn@unizo.be .
          </span>
        </Typography>
      </Stack>
      <Stack
        width="80%"
        justisfyContent="center"
        alignItems="center"
        padding="2rem"
        margin="1rem auto"
        sx={{ background: '#304C59' }}
      >
        <Typography margin="1rem 0" align="center" color="#fff" variant="h5">
          Register now for the free Starters e-zine! Enter your email address
          below. Already registered? Update your details here.
        </Typography>
        <Stack
          justisfyContent="center"
          alignItems="center"
          spacing={4}
          width="100%"
        >
          <Input
            style={{ alignSelf: 'center', width: '50%' }}
            placeholder="Enter your email address"
          />
          <Button>Register</Button>
        </Stack>
      </Stack>
      <Box margin="1rem auto" width="80%">
        <Image src={'/images/ad2.png'} alt="ad2" width="100%" height="auto" />
      </Box>
      <PartnerDiscovery />
      <Footer />
    </React.Fragment>
  );
};
