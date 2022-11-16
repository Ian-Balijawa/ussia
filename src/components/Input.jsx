import { COLORS } from '../constants/colors';

export const Input = (props) => {
  const { type } = props;
  return (
    <input
      {...props}
      style={{
        border: type === 'file' ? 'none' : '1px solid #cccc',
        ...styles
      }}
    />
  );
};

const styles = {
  height: '100%',
  width: '100%',
  outline: 'none',
  fontSize: '1.2em',
  padding: '0.5em 1em',
  color: COLORS.SECONDARY,
  borderRadius: '5px',
  margin: '1em auto'
};
