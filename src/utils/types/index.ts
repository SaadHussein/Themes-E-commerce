export type RegisterType = {
	name: string;
	email: string;
	password: string;
	password_confirmation: string;
};
export type LoginType = {
	email: string;
	password: string;
};

export type InitialStateType = {
	token: string;
	name: string;
	id: number;
	email: string;
	allProducts: Product[];
	freeProducts: FreeProduct[];
};

export type State = {
	Global: {
		token: string;
		name: string;
		id: number;
		email: string;
		allProducts: Product[];
		freeProducts: FreeProduct[];
	};
};

export type FreeProduct = {
	id: number;
	name: string;
	price: string;
	description: string;
	category_id: number;
	images: string[];
};

export type Product = {
	id: number;
	name: string;
	price: string;
	description: string;
	category_id: number;
	images: string[];
};
