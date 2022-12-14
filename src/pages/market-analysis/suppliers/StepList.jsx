import * as React from 'react';

import AddOption from '../AddOption';
import Box from '@mui/material/Box';
import { COLORS } from '../../../constants/colors';
import { Checkbox } from '@mui/material';
import { Input } from '../../../components/Input';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Trash } from 'phosphor-react';
import Typography from '@mui/material/Typography';

export const Card = ({ title, Icon }) => {
  const [checked, setChecked] = React.useState(false);
  const handleChecked = (e) => {
    setChecked(e.target.checked);
  };
  return (
    <Box
      sx={{
        boxShadow:
          'rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px',
        color: COLORS.SECONDARY,
        margin: '2em 0',
        padding: '1em',
        width: 'fit-content',
        borderRadius: '5px',
        textAlign: 'center',
        '&:hover': {
          boxShadow:
            'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px',
          textDecoration: 'none'
        }
      }}
    >
      <Link style={{ textDecoration: 'none', color: COLORS.SECONDARY }}>
        {Icon}
        <Typography variant="body2" textAlign="center" color={COLORS.SECONDARY}>
          {title}
        </Typography>
      </Link>
      <Checkbox
        sx={{
          color: COLORS.PRIMARY,
          '&.Mui-checked': { color: COLORS.PRIMARY }
        }}
        checked={checked}
        onChange={handleChecked}
        inputProps={{ 'aria-label': 'controlled' }}
      />
    </Box>
  );
};

export const StepOne = () => {
  const [SuppliersAndOrPartnersList, setSuppliersAndOrPartnersList] =
    React.useState([
      {
        id: 1,
        name: 'supplier one'
      }
    ]);

  const handleAddMoreAudience = (e) => {
    const newSuppliersAndOrPartnersList = [
      ...SuppliersAndOrPartnersList,
      e.target.value
    ];
    setSuppliersAndOrPartnersList(newSuppliersAndOrPartnersList);
  };

  return (
    <React.Fragment>
      <Typography
        variant="body1"
        margin="1rem 0"
        fontWeight={'bold'}
        color={COLORS.PRIMARY}
      >
        Step 1: Who will you work with?
      </Typography>
      <Typography variant="body2" color={COLORS.SECONDARY}>
        Make an overview of the suppliers you want to work with.
      </Typography>
      {SuppliersAndOrPartnersList.map((supplier) => (
        <SuppliersAndOrPartners key={supplier.id} />
      ))}
      <AddOption
        item="Add a supplier or partner"
        onClick={handleAddMoreAudience}
      />
    </React.Fragment>
  );
};

export const StepTwo = () => {
  return (
    <React.Fragment>
      <Typography
        variant="body1"
        margin="1rem 0"
        fontWeight={'bold'}
        color={COLORS.PRIMARY}
      >
        Step 2: What are the strengths and weaknesses?
      </Typography>
      <Typography variant="body2" color={COLORS.SECONDARY}>
        What are the strengths and weaknesses of your suppliers? List them and
        tell why you want to work with them or not.
      </Typography>
      <AddOption
        item="To enter the strengths and weaknesses, you must first add your suppliers and/or partners."
        onClick={''}
      />
    </React.Fragment>
  );
};

const SuppliersAndOrPartners = () => {
  return (
    <Stack
      margin="1rem 0"
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ padding: '1em', background: '#fff', borderRadius: '.4rem' }}
    >
      <Stack margin="1rem 0" width="100%">
        <label
          htmlFor="target-group-name"
          style={{ color: '#E03C31', alignSelf: 'flex-start' }}
          variant="body1"
        >
          Suppliers and/or partners
        </label>
        <Input
          style={{ width: '90%' }}
          id="target-group-name"
          name={'nameOfTargetAudience'}
          onChange={(e) => console.log(e.target.value)}
        />
      </Stack>
      <Box sx={{ marginTop: '1.5rem' }}>
        <Trash size={40} weight="fill" />
      </Box>
    </Stack>
  );
};
