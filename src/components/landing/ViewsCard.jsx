import * as React from 'react';

import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from '@mui/material';

import img from '../../assets/images/view-card.png';

export default function ViewsCard({ label }) {
  return (
    <Card sx={{ margin: '1rem' }}>
      <CardActionArea>
        <CardMedia component="img" height="140" image={img} alt="person1" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {label}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
