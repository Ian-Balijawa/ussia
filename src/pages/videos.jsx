import CardVideo from '../components/Cards/CardVideo';
import Grid from '@mui/material/Grid';
import { videos } from './videos-data';

export default () => {
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
