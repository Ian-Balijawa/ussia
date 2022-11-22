import useLocalStorage from "./useLocalStorage";

export const useUser = () => {
	const [currentUser, setCurrentUser] = useLocalStorage( "user", null );

	return [currentUser, setCurrentUser];

}
