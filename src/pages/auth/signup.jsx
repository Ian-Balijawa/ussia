import { useEffect } from 'react';

export default () => {
  useEffect(() => {
    document.title = 'Sign Up';
  }, []);

  return (
    <div>
      <h1>SIGNUP</h1>
    </div>
  );
};
