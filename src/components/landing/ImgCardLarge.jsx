import { Box, Stack, Typography } from '@mui/material';

import { Button } from '../CustomBtn';
import { COLORS } from '../../constants/colors';
import { Image } from '@nextui-org/react';
import img from '../../assets/images/person1.png';

export default (props) => {
  const { image, direction } = props;

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="flex-start"
      alignItems="flex-start"
      width="100%"
      margin={{ xs: '1em auto', md: '2em auto' }}
    >
      <Image src={'https://picsum.photos/600/600'} alt="jumbotron image" />

      <Box width={{ xs: '100%', md: '35%' }} spacing={3}>
        <Typography
          variant="h5"
          color={COLORS.SECONDARY}
          fontWeight="bold"
          marginBottom="0.5em"
          sx={{
            cursor: 'pointer',
            '&:hover': {
              color: COLORS.PRIMARY
            }
          }}
        >
          UNIZO chooses Deprez from Kortemark as national SME of the Year
        </Typography>
        <Typography variant="body1">
          UNIZO has just elected Deprez from Kortemark as national "SME of the
          Year". The family business is active in the machine construction
          sector and a specialist in the field of internal transport systems and
          storage of goods. The West Flemish candidate beat four other strong
          provincial candidates in the final round: Sylvester Productions
          (Flemish Brabant), Huurland (East Flanders), Cycling De Geus (Antwerp)
          and Fruitsnacks (Limburg). Father and son Deprez received the award
          that goes with the title during the UNIZO Top Seminar in the Queen
          Elisabeth Hall in Antwerp.
        </Typography>

        <Button>Get Started</Button>
      </Box>
    </Stack>
  );
};
