import * as React from 'react';

import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { COLORS } from '../constants/colors';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import { Input } from './Input';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';

export default () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password')
    });
  };

  const plans = [
    'Others',
    'Agriculture',
    'Automobile',
    'Banking',
    'Construction',
    'Education',
    'Entertainment',
    'Fashion',
    'Food',
    'Health'
  ];

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Input
            margin="normal"
            required
            id="planName"
            placeholder="Name of your plan"
            name="planName"
            style={{ border: '1px solid #cccc' }}
            autoFocus
          />
          <SelectLabels plans={plans} />
          <Typography variant="body2" textAlign="left" color={COLORS.PRIMARY}>
            Drag and drop your file here
          </Typography>
          <Box
            sx={{
              border: `2px dashed ${COLORS.SECONDARY}`,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              borderRadius: '5px',
              width: '100%',
              height: 'fit-content',
              cursor: 'pointer',
              '&:hover': {
                borderColor: COLORS.PRIMARY
              }
            }}
            padding={3}
          >
            <Input
              type="file"
              style={{
                height: '2rem',
                margin: '0',
                border: 'none',
                cursor: 'pointer',
                outline: 'none'
              }}
              label="file"
              name="file"
              id="file"
              accept="image/*"
              onChange={(e) => console.log(e.target.files[0])}
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

const SelectLabels = ({ plans }) => {
  const [selectedPlan, setSelectedPlan] = React.useState('');

  const handleChange = (event) => {
    setSelectedPlan(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ minWidth: 120, marginBottom: 2 }}>
        <InputLabel id="demo-simple-select-helper-label">Plan</InputLabel>
        <Select
          size="small"
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={selectedPlan}
          label="Plan"
          onChange={handleChange}
        >
          {plans.map((plan) => (
            <MenuItem value={plan}>{plan}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
};
