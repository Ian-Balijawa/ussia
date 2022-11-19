import { Box, Stack } from '@mui/material';

import ToolkitCard from '../components/Cards/ToolkitCard';

export default () => {
  const toolkits = [
    {
      title: 'kawasaki h2r',
      description:
        'React Router v6 React Router v6 React Router v6React Router v6React Router v6React Router v6',
      src: '/public/images/me.png',
      tags: ['motogp', 'kawasaki', 'h2r']
    }
  ];
  return (
    <Stack
      padding="1rem"
      sx={{ margin: '2rem auto', width: '100vw' }}
      justifyContent="center"
      alignItems="center"
    >
      <ToolkitCard
        src={toolkits[0].src}
        title={toolkits[0].title}
        tags={toolkits[0].tags}
        description={toolkits[0].description}
      />
      <ToolkitCard
        src={toolkits[0].src}
        title={toolkits[0].title}
        tags={toolkits[0].tags}
        description={toolkits[0].description}
      />
      <ToolkitCard
        src={toolkits[0].src}
        title={toolkits[0].title}
        tags={toolkits[0].tags}
        description={toolkits[0].description}
      />
      <ToolkitCard
        src={toolkits[0].src}
        title={toolkits[0].title}
        tags={toolkits[0].tags}
        description={toolkits[0].description}
      />
    </Stack>
  );
};
