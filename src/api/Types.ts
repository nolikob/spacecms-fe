import { IconName } from "@fortawesome/fontawesome-svg-core";

export type User = {
	id: string,
	username: string,
	permissions: {
		"settings": boolean,
		"files": boolean,
		"templates": boolean,
		"pages": boolean,
		"users": boolean,
	},
};

export type Users = User[];

export type Settings = {
	title: string,
	description: string,
	socials: string[],
};

export type Theme = {
	id: string,
	icon: string,
	name: string,
	selected: boolean,
};

export type Themes = Theme[] | [];

export type Media = {
	id: string,
	name: string,
	uploadDate: Date,
	userId: string,
	downloadLink: string,
	fileType: "archive" | "theme" | "text" | "image" | "pdf" | "document" |"other",
};

export type Section = {
	id: string,
	order: string,
	name: string,
	published: boolean,
	title: string,
	content: string,
};

export type Page = Section[];

export type MenuItems = {
	path: string,
	icon: IconName,
	name: string,
}[];

export type FieldProps = {
  label: string,
  name: string,
  type?: string,
  placeholder?: string,
};

export type SeoForm = {
	title: string,
	description: string,
	ogImage: null | File,
	favicon: null | File,
};

export type LoginForm = {
	username: string,
	password: string,
};
