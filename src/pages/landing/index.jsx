import { Box, Divider, Stack, Typography } from '@mui/material';

import { Button } from '../../components/CustomBtn';
import { COLORS } from '../../constants/colors';
import { CaretRight } from 'phosphor-react';
import Footer from '../../components/Footer/landing/Footer';
import HelpContainer from '../../components/landing/HelpContainer';
import ImgCardLarge from '../../components/landing/ImgCardLarge';
import ImgCardSmall from '../../components/landing/ImgCardSmall';
import InspireSection from '../../components/landing/InspireSection';
import Message from '../../components/landing/Message';
import NavContainer from '../../components/landing/NavContainer';
import PartnerDiscovery from '../../components/landing/PartnerDiscovery';
import Pricing from '../../components/Cards/pricing';
import React from 'react';
import ViewsCard from '../../components/landing/ViewsCard';
import cardsInfo from './cardsInfo.json';
import news from './news.json';

export default () => {
  const listItems = [
    'Find Company Number',
    'Collection and Reminder Service',
    'Model Letters and Contracts',
    'Bankrapties in your area',
    'UNIZO member benefits',
    'Other Tools'
  ];

  const labels = [
    'Climate',
    'Taxes',
    'Payroll Costs and Flexibility',
    'Mobility',
    'Energy'
  ];
  return (
    <React.Fragment>
      <NavContainer />
      <HelpContainer />
      <Box padding="1rem">
        <ImgCardLarge />
        <Stack direction={{ xs: 'column', md: 'row' }}>
          <Box width="60%">
            {news.map((item, index) => (
              <ImgCardSmall
                key={index}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </Box>
          <Box
            width={{ xs: '100%', md: '40%' }}
            sx={{ background: '#E03C31', height: '100%' }}
          >
            {listItems.map((list) => (
              <React.Fragment key={list}>
                <ListItem item={list} />
                <Divider flexItem width="100%" color="#ccc" />
              </React.Fragment>
            ))}
          </Box>
        </Stack>
      </Box>
      <Stack
        height="10rem"
        justifyContent="center"
        alignItems="center"
        sx={{ background: '#E03C31' }}
      >
        <Typography variant="h5" fontWeight="bold" color="#fff">
          Become a member of the strongest entrepreneurial network in Belgium
        </Typography>
      </Stack>
      <PricingCardContainer />
      <Typography
        variant="body1"
        align="center"
        fontWeight="bold"
        color="#E03c31"
        xs={{ cursor: 'pointer', textDecoration: 'underline' }}
      >
        Compare the memberships
      </Typography>
      <Stack
        sx={{ flexWrap: 'wrap' }}
        justifyContent="space-around"
        direction="row"
        margin="3rem auto"
      >
        {labels.map((label) => (
          <ViewsCard label={label} key={label} />
        ))}
      </Stack>

      <Button>All views</Button>
      <InspireSection />
      <Typography
        variant="h5"
        color={COLORS.SECONDARY}
        fontWeight="bold"
        sx={{
          cursor: 'pointer',
          '&:hover': { color: COLORS.PRIMARY },
          margin: { xs: '1rem auto', md: '1rem 8rem' }
        }}
      >
        I'm selling my company car.What about VAT?
      </Typography>
      <PartnerDiscovery />
      <Message />
      <Footer />
    </React.Fragment>
  );
};

const PricingCardContainer = () => {
  return (
    <Box
      padding="1rem"
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      flexWrap="wrap"
    >
      {cardsInfo.map((card) => (
        <Pricing
          key={card.title}
          title={card.title}
          price={card.price}
          duration={card.duration}
          designation={card.designation}
          timeSpent={card.timeSpent}
          info={card.info}
        />
      ))}
    </Box>
  );
};

const ListItem = ({ item }) => {
  return (
    <Stack
      direction="row"
      alignItems={'center'}
      spacing={2}
      justifyContent="flex-start"
      padding="1rem"
      sx={{
        cursor: 'pointer',
        '&:hover': {
          color: '#D72C20'
        }
      }}
    >
      <CaretRight size={20} weight="fill" color="#fff" />
      <Typography variant="body1" color="#fff" gutterBottom>
        {item}
      </Typography>
    </Stack>
  );
};
