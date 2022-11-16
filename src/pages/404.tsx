import { PATH } from '../routes/paths';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default () => {
  const navigator = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigator(PATH.ROOT);
    }, 3000);
  });
  return (
    <div>
      <h1>NOT FOUND</h1>
    </div>
  );
};
