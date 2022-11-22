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
  const [email, setEmail] = useState('');

  useEffect(() => {
    document.title = 'login';
  }, []);

  const handleRegister = () => {
    const data = {
      email
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
            type="email"
            placeholder="Email Address"
            value={email}
            name="email"
            onChange={({ target }) => setEmail(target.value)}
          />
          <Stack direction="row" spacing={2}>
            <Button onClick={handleRegister} variant="outlined">
              Register
            </Button>
            <Button variant="outlined" style={{ background: '#6C757D' }}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

// import { Box, Stack, Typography } from '@mui/material';

// import { Button } from '../../components/Button';
// import { COLORS } from '../../constants/colors';
// import { Image } from '@nextui-org/react';
// import { Input } from '../../components/Input';
// import Logo from '../../assets/logo.png';
// import { useEffect } from 'react';
// import { useState } from 'react';

// export default () => {
//   const [email, setEmail] = useState('');
//   useEffect(() => {
//     document.title = 'login';
//   }, []);

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };
//   const handleRegister = () => {
//     console.log(email);
//   };
//   return (
//     <Stack
//       height="100vh"
//       width="100vw"
//       backgroundColor="#302219"
//       alignItems="center"
//       justifyContent="center"
//       alignContent="center"
//     >
//       <Stack
//         direction={{ xs: 'column', md: 'row' }}
//         sx={{
//           width: '80%',
//           borderRadius: '10px',
//           overflow: 'hidden',
//           background: 'green'
//         }}
//       >
//         <Stack
//           sx={{
//             background: COLORS.PRIMARY,
//             color: '#ffff',
//             width: '100%',
//             padding: '1em'
//           }}
//           justifyContent="center"
//           direction="column"
//           alignItems="flex-start"
//           alignContent="flex-start"
//         >
//           <Typography
//             variant="h5"
//             sx={{ display: { xs: 'none', md: 'block' } }}
//           >
//             "Any time <br /> is a good time <br /> to start a company"
//           </Typography>
//           <Typography
//             variant="caption"
//             sx={{ display: { xs: 'none', md: 'block' } }}
//           >
//             Ron Conway, Founder of SV Angel
//           </Typography>
//           <Image src={Logo} width={100} alt="logo" />
//         </Stack>
//         <Stack
//           sx={{
//             textAlign: 'left',
//             background: '#FFFFFF',
//             width: '100%',
//             padding: '1em'
//           }}
//         >
//           <Typography variant="h5">Uw e-mailadres</Typography>
//           <Input
//             type="email"
//             placeholder="Email address"
//             value={email}
//             name="emailAdress"
//             onChange={handleEmailChange}
//           />
//           <Stack direction="row" spacing={2}>
//             <Button onClick={handleRegister} variant="outlined">
//               Register
//             </Button>
//             <Button variant="outlined" style={{ background: '#6C757D' }}>
//               Sign in
//             </Button>
//           </Stack>
//         </Stack>
//       </Stack>
//     </Stack>
//   );
// };
