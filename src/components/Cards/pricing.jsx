import { Divider, Stack, Typography } from '@mui/material';

import { Button } from '../CustomBtn';
import { Check } from 'phosphor-react';

const Pricing = ({ title, price, duration, designation, timeSpent, info }) => {
  return (
    <Stack
      spacing={2}
      justifyContent="space-around"
      width={title === 'Individual Membership' ? '25rem' : '20rem'}
      height={title === 'Individual Membership' ? '40rem' : '35rem'}
      margin="1rem"
      sx={{
        boxShadow: '0px 2px 16px 0px rgb(0 0 0 / 10%)',
        padding: '2rem 1rem'
      }}
    >
      <Typography
        variant="h6"
        fontWeight="bold"
        align="center"
        color="#304C59"
        gutterBottom
      >
        {title}
      </Typography>
      <Stack
        direction="row"
        spacing={2}
        alignItems={'center'}
        justifyContent="center"
      >
        <Divider flexItem width="40%" />
        <Typography variant="body1" align="center" color="#304C59">
          {price}
        </Typography>
        <Divider flexItem width="40%" />
      </Stack>
      <Typography variant="body1" align="center" color="#304C59">
        {duration}
      </Typography>
      <Typography
        variant="body1"
        align="center"
        fontWeight="bold"
        color="#304C59"
        gutterBottom
      >
        {designation}
      </Typography>
      <Typography variant="body1" align="center" color="#304C59" gutterBottom>
        {timeSpent}
      </Typography>
      {info.map((item, index) => (
        <ListItem item={item} key={`${item}-${index}`} />
      ))}
      <Button style={{ alignSelf: 'center', width: '70%', marginTop: '3rem' }}>
        Join
      </Button>
    </Stack>
  );
};

export default Pricing;

const ListItem = ({ item }) => {
  return (
    <Stack
      direction="row"
      alignItems={'center'}
      spacing={2}
      justifyContent="flex-start"
    >
      <Check size={20} weight="fill" color="green" />
      <Typography variant="body1" color="#304C59" gutterBottom>
        {item}
      </Typography>
    </Stack>
  );
};
