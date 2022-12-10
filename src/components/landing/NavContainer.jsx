import { Divider, Stack, Typography } from '@mui/material';

const NavContainer = () => {
  const items = [
    { name: 'Home', href: '#' },
    { name: 'Activities', href: '#' },
    { name: 'Info & Advice', href: '#' },
    { name: 'View Points', href: '#' },
    { name: 'Join', href: '#' }
  ];
  return (
    <Stack
      direction="row"
      sx={{
        background: '#304C59',
        width: '100vw'
      }}
    >
      {items.map((item) => (
        <Stack
          direction="row"
          sx={{
            cursor: 'pointer',
            width: 'fit-content',
            '&:hover': {
              background: '#273E48'
            }
          }}
          key={item.name}
        >
          <Item item={item} key={item.name} />
          <Divider orientation="vertical" flexItem />
        </Stack>
      ))}
    </Stack>
  );
};

export default NavContainer;

const Item = ({ item }) => {
  return (
    <Typography
      variant="h6"
      component="div"
      sx={{
        flexGrow: 1,
        color: '#ffff',
        padding: '0.5rem 1rem'
      }}
    >
      {item.name}
    </Typography>
  );
};
