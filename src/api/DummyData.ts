import { User } from "./Types";

export const users: User[] = [
	{
		id: "1",
		username: "Admin",
		permissions: {
			settings: true,
			files: true,
			pages: true,
			templates: true,
			users: true,
		},
	},
	{
		id: "2",
		username: "Joe",
		permissions: {
			settings: false,
			files: true,
			pages: true,
			templates: false,
			users: false,
		},
	},
	{
		id: "3",
		username: "Mishka",
		permissions: {
			settings: true,
			files: true,
			pages: true,
			templates: false,
			users: true,
		},
	},
];
