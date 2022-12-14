export type socialLink = {
	icon: string;
	value: string;
	link?: string;
};

export interface about {
	firstname: string;
	lastname: string;
	jobTitle: string;
	description: string;
	image: string;
	socialLinks: socialLink[];
}

export interface AboutProps {
	about: about;
}

export interface AboutImageProps {
	image: string;
}
