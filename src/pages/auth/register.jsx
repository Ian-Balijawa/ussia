import {
  Box,
  FormControl,
  MenuItem,
  Select,
  Stack,
  Typography
} from '@mui/material';

import { Button } from '../../components/Button';
import { COLORS } from '../../constants/colors';
import { Image } from '@nextui-org/react';
import { Input } from '../../components/Input';
import Logo from '../../assets/logo.png';
import { useEffect } from 'react';
import { useState } from 'react';

export default () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [GSMNumber, setGSMNumber] = useState('');
  const [selectedGender, setSelectedGender] = useState('Gender');

  useEffect(() => {
    document.title = 'register';
  }, []);

  const handleRegister = () => {
    const data = {
      firstName,
      lastName,
      GSMNumber,
      selectedGender
    };
    console.log(data);
  };

  return (
    <Box
      width="100vw"
      height="100vh"
      sx={{
        backgroundColor: '#302219',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          borderRadius: '1em'
        }}
        width="60%"
        margin="2em auto"
      >
        <Stack
          justifyContent="flex-end"
          alignItems="flex-end"
          padding="3em"
          sx={{
            background: COLORS.PRIMARY
          }}
        >
          <Image src={Logo} width="100px" height="100px" />
        </Stack>
        <Stack
          direction="column"
          alignItems="start"
          justifyContent="flex-start"
          padding="2em"
          sx={{ background: '#FFFFFF' }}
        >
          <Typography variant="body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Praesentium, eos.
          </Typography>
          <Input
            type="text"
            placeholder="First Name"
            value={firstName}
            name="firstName"
            onChange={({ target }) => setFirstName(target.value)}
          />
          <Input
            type="text"
            placeholder="Last Name"
            value={lastName}
            name="lastName"
            onChange={({ target }) => setLastName(target.value)}
          />
          <Input
            type="phone"
            placeholder="GSM Number"
            value={GSMNumber}
            name="GSMNumber"
            onChange={({ target }) => setGSMNumber(target.value)}
          />
          <GenderSelect setSelectedGender={setSelectedGender} />
          <Stack direction="row" spacing={2}>
            <Button onClick={handleRegister} variant="outlined">
              Register
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

const GenderSelect = ({ setSelectedGender }) => {
  return (
    <>
      <label for="cars">Select Gender</label>
      <select name="gender" id="gender">
        <option
          value="male"
          onChange={({ target }) => setSelectedGender(target.value)}
        >
          Male
        </option>
        <option
          value="female"
          onChange={({ target }) => setSelectedGender(target.value)}
        >
          Female
        </option>
      </select>
    </>
  );
};
