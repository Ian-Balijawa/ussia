export const SelectPlan = ({ options, view }) => {
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
        borderRadius: '5px'
      }}
    >
      <option>{view || 'Select'}</option>
      {options.map((option) => {
        return <option key={option}>{option}</option>;
      })}
    </select>
  );
};
