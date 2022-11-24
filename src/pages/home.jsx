import BlobContainer from '../components/home/BlobContainer';
import { Box } from '@mui/material';
import CTATools from '../components/home/CTATools';
import HeroJumbotron from '../components/home/HeroJumbotron';
import JumbotronBusinessPlan from '../components/home/JumbotronBusinessPlan';
import JumbotronPodcasts from '../components/home/JumbotronPodcasts';
import JumbotronToolkit from '../components/home/JumbotronToolkit';
import JumbotronVideo from '../components/home/JumbotronVideo';
import JumbotronWithListitems from '../components/home/JumbotronWithListitems';
import jumbotronImg from '../assets/images/home-hero.png';
import jumbotronImg2 from '../assets/images/home-hero-2.png';
import jumbotronImg3 from '../assets/images/home-hero-3.png';
import jumbotronImg4 from '../assets/images/home-hero-4.png';
import jumbotronImg5 from '../assets/images/home-hero-5.png';
import jumbotronImg6 from '../assets/images/home-hero-6.png';

export default () => {
  return (
    <Box padding="1rem">
      <HeroJumbotron direction="row" image={jumbotronImg} />
      <CTATools />
      <JumbotronWithListitems direction="row-reverse" image={jumbotronImg2} />
      <BlobContainer />
      <JumbotronVideo direction="row" image={jumbotronImg3} />
      <JumbotronToolkit direction="row-reverse" image={jumbotronImg4} />
      <JumbotronPodcasts direction="row" image={jumbotronImg5} />
      <JumbotronBusinessPlan direction="row-reverse" image={jumbotronImg6} />
    </Box>
  );
};
