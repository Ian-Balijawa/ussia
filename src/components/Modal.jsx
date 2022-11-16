import { Box, Typography } from '@mui/material';
import { Button, Input, Modal, Text } from '@nextui-org/react';

import { COLORS } from '../constants/colors';
import { Input as FileInput } from '../components/Input';

export const CustomModal = ({ visible, closeHandler }) => {
  const plans = [
    'Others',
    'Agriculture',
    'Automobile',
    'Banking',
    'Construction',
    'Education',
    'Entertainment',
    'Fashion',
    'Foo',
    'Health'
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

          <SelectPlan options={plans} />
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
            <FileInput
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

const SelectPlan = ({ options }) => {
  const onOptionChangeHandler = (event) => {
    console.log('User Selected Value -> ', event.target.value);
  };
  return (
    <select
      onChange={onOptionChangeHandler}
      style={{
        border: '1px solid #ccc',
        outline: 'none',
        padding: '0.5rem',
        borderRadius: '5px',
        width: '100%'
      }}
    >
      <option>Select</option>
      {options.map((option) => {
        return <option key={option}>{option}</option>;
      })}
    </select>
  );
};
