import { Stack, Typography } from '@mui/material';

import { COLORS } from '../constants/colors';
import { CustomModal } from '../components/Modal';
import { Image } from '@nextui-org/react';
import PlanForm from '../components/PlanForm';
import starterImg from '../assets/images/starters.png';
import { useState } from 'react';

export default () => {
  const [visible, setVisible] = useState(false);
  const handler = () => setVisible(true);

  const closeHandler = () => {
    setVisible(false);
    console.log('closed');
  };
  return (
    <>
      <Stack
        direction={{ xs: 'column', sm: 'row' }}
        alignItems="center"
        justifyContent="space-around"
        width="100vw"
        height="100vh"
        sx={{}}
      >
        <Image
          width={520}
          height={500}
          src={starterImg}
          alt="Default Image"
          objectFit="cover"
        />

        <Stack direction="column" width="50%">
          <Typography variant="h5" textAlign="center" color={COLORS.SECONDARY}>
            Your business plans
          </Typography>
          <Stack
            onClick={handler}
            direction={{ xs: 'column', sm: 'row' }}
            justifyContent="center"
            alignItems="center"
            spacing={2}
            mt={2}
            sx={{
              border: '1px solid #E5E5E5',
              boxShadow: '1px 0px 6px 4px rgb(0 0 0 / 25%)',
              borderRadius: '4px',
              padding: '20px',
              width: '30%',
              margin: '2em auto',
              cursor: 'pointer'
            }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Stack
                direction="row"
                spacing={1}
                alignItems="center"
                justifyContent="center"
                sx={{
                  border: `2px dashed ${COLORS.SECONDARY}`,
                  width: '3em',
                  height: '3em',
                  borderRadius: '100%',
                  cursor: 'pointer'
                }}
              >
                <Typography
                  variant="h4"
                  component="h2"
                  sx={{ color: COLORS.SECONDARY }}
                  textAlign={'center'}
                >
                  +
                </Typography>
              </Stack>
              <Typography
                variant="body2"
                color={COLORS.SECONDARY}
                sx={{
                  textDecoration: 'none',
                  '&:hover': {
                    color: COLORS.PRIMARY
                  }
                }}
              >
                Start your first plan
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <CustomModal
        visible={visible}
        closeHandler={closeHandler}
        setVisible={setVisible}
      >
        <PlanForm />
      </CustomModal>
    </>
  );
};
