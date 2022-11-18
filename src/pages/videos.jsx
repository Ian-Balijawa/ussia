import CardVideo from '../components/Cards/CardVideo';
import Grid from '@mui/material/Grid';
import { Stack } from '@mui/material';
export default () => {
  const videos = [
    {
      title: 'kawasaki h2r',
      description:
        'React Router v6 React Router v6 React Router v6React Router v6React Router v6React Router v6',
      src: '/public/images/me.png',
      tags: ['motogp', 'kawasaki', 'h2r']
    },
    {
      title: 'kawasaki h2r',
      description:
        'React Router v6 React Router v6 React Router v6React Router v6React Router v6React Router v6',
      src: '/public/images/me.png',
      tags: ['motogp', 'kawasaki', 'h2r']
    },
    {
      title: 'kawasaki h2r',
      description:
        'React Router v6 React Router v6 React Router v6React Router v6React Router v6React Router v6',
      src: '/public/images/me.png',
      tags: ['motogp', 'kawasaki', 'h2r']
    },
    {
      title: 'kawasaki h2r',
      description:
        'React Router v6 React Router v6 React Router v6React Router v6React Router v6React Router v6',
      src: '/public/images/me.png',
      tags: ['motogp', 'kawasaki', 'h2r']
    },
    {
      title: 'kawasaki h2r',
      description:
        'React Router v6 React Router v6 React Router v6React Router v6React Router v6React Router v6',
      src: '/public/images/me.png',
      tags: ['motogp', 'kawasaki', 'h2r']
    },
    {
      title: 'kawasaki h2r',
      description:
        'React Router v6 React Router v6 React Router v6React Router v6React Router v6React Router v6',
      src: '/public/images/me.png',
      tags: ['motogp', 'kawasaki', 'h2r']
    },
    {
      title: 'kawasaki h2r',
      description:
        'React Router v6 React Router v6 React Router v6React Router v6React Router v6React Router v6',
      src: '/public/images/me.png',
      tags: ['motogp', 'kawasaki', 'h2r']
    },
    {
      title: 'kawasaki h2r',
      description:
        'React Router v6 React Router v6 React Router v6React Router v6React Router v6React Router v6',
      src: '/public/images/me.png',
      tags: ['motogp', 'kawasaki', 'h2r']
    },
    {
      title: 'kawasaki h2r',
      description:
        'React Router v6 React Router v6 React Router v6React Router v6React Router v6React Router v6',
      src: '/public/images/me.png',
      tags: ['motogp', 'kawasaki', 'h2r']
    },
    {
      title: 'kawasaki h2r',
      description:
        'React Router v6 React Router v6 React Router v6React Router v6React Router v6React Router v6',
      src: '/public/images/me.png',
      tags: ['motogp', 'kawasaki', 'h2r']
    }
  ];
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 12, md: 16 }}
      sx={{}}
    >
      {videos.map((video) => (
        <Grid item xs={2} sm={4} md={4} key={video.title}>
          <CardVideo videoInfo={video} />
        </Grid>
      ))}
    </Grid>
  );
};
