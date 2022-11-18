import { COLORS } from '../constants/colors';

export const Input = (props) => {
  const { style } = props;
  return (
    <input
      {...props}
      style={{
        border: '1px solid #ccc',
        height: '100%',
        width: '100%',
        outline: 'none',
        padding: '0.7em 1em',
        color: COLORS.SECONDARY,
        borderRadius: '5px',
        margin: '0.3em auto',
        ...style
      }}
    />
  );
};
