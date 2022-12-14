export const Input = ({
  type,
  placeholder,
  value,
  name,
  onChange,
  error,
  style,
  ...props
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      name={name}
      onChange={onChange}
      {...props}
      style={{
        width: '100%',
        padding: '0.7em',
        border: '1px solid #ccc',
        margin: '0.6em 0',
        borderRadius: '5px',
        outline: 'none',
        ...style
      }}
    />
  );
};
