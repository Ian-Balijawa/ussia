import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography
} from '@mui/material';
import { Button, Input, Modal, Text } from '@nextui-org/react';

import { COLORS } from '../constants/colors';
import { Input as CustomInput } from '../components/Input';
import { useState } from 'react';

export const CustomModal = ({ visible, closeHandler }) => {
  const plans = [
    { values: 'Others', labels: 'Others' },
    { values: 'Agriculture', labels: 'Agriculture' },
    { values: 'Automobile', labels: 'Automobile' },
    { values: 'Banking', labels: 'Banking' },
    { values: 'Construction', labels: 'Construction' },
    { values: 'Education', labels: 'Education' },
    { values: 'Entertainment', labels: 'Entertainment' },
    { values: 'Fashion', labels: 'Fashion' },
    { values: 'Food', labels: 'Food' },
    { values: 'Health', labels: 'Health' }
  ];

  return (
    <div>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text b size={18}>
            Your new plan
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            clearable
            bordered
            fullWidth
            color="primary"
            size="lg"
            type={'text'}
            placeholder="Your business plan"
          />

          <SelectPlan items={plans} />
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
            <CustomInput
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
        </Modal.Body>
        <Modal.Footer style={{ flexDirection: 'row-reverse' }}>
          <Button auto flat onClick={closeHandler}>
            Create
          </Button>
          <Button auto color="error" onClick={closeHandler}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

const SelectPlan = ({ items }) => {
  const [age, setAge] = useState('None');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Age</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
};
