import { createContext } from 'react';
import { useProSidebar } from 'react-pro-sidebar';

export const CollapsibleContext = createContext();

export const CollapsibleContextProvider = ( { children } ) => {
	const { collapseSidebar } = useProSidebar();

	return (
		<CollapsibleContext.Provider value={{ collapseSidebar }}>
			{children}
		</CollapsibleContext.Provider>
	);
}
