import { Box } from '@mui/material';
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
    <Box padding="1rem" sx={{ margin: '2rem auto' }}>
      <ToolkitCard
        src={toolkits[0].src}
        title={toolkits[0].title}
        tags={toolkits[0].tags}
        description={toolkits[0].description}
      />
    </Box>
  );
};
