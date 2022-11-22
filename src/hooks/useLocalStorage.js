import { useEffect, useState } from 'react';

export default ( key, defaultValue ) => {
  const [value, setValue] = useState( () => {
    const storedValue = localStorage.getItem( key );
    return storedValue === null
      ? typeof defaultValue === 'function'
        ? defaultValue()
        : defaultValue
      : JSON.parse( storedValue );
  } );

  useEffect( () => {
    const listener = ( event ) => {
      if ( event.storageArea === localStorage && event.key === key ) {
        setValue( JSON.parse( event.newValue ) );
      }
    };
    window.addEventListener( 'storage', listener );
    return () => window.removeEventListener( 'storage', listener );
  }, [key, defaultValue] );

  const setValueInLocalStorage = ( newValue ) => {
    setValue( ( currentValue ) => {
      const result =
        typeof newValue === 'function' ? newValue( currentValue ) : newValue;
      localStorage.setItem( key, JSON.stringify( result ) );

      return result;
    } );
  };

  return [value, setValueInLocalStorage];
};
