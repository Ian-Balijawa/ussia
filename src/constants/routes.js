import { ROUTES } from "../routes/routes";

export const publicRoutes = [
	ROUTES.ROOT,
	ROUTES.LANDING,
	ROUTES.STARTERS,
	ROUTES.CREATE,
	ROUTES.TO_WORK,
	ROUTES.PLAN,
	ROUTES.EDIT_PLAN,
	ROUTES.LOGIN,
	ROUTES.REGISTER,
	ROUTES.NOT_FOUND,
	ROUTES.HOME
];

export const privateRoutes = [
	'Profile',
	'Dashboard',
	'Activity',
	'Analytics',
	'System',
	'Deployments',
	'My Settings',
	'Team Settings',
	'Help & Feedback',
	'Log Out'
];
