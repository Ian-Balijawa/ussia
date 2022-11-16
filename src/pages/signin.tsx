import { useEffect } from 'react';
export default () => {
  useEffect(() => {
    document.title = 'Sign In';
  }, []);

  return (
    <div>
      <h1>SIGNIN</h1>
    </div>
  );
};
