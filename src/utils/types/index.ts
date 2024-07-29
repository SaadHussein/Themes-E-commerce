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
	categories: Category[];
	userOrders: UserOrder[];
};

export type State = {
	Global: {
		token: string;
		name: string;
		id: number;
		email: string;
		allProducts: Product[];
		freeProducts: FreeProduct[];
		categories: Category[];
		userOrders: UserOrder[];
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

export type Category = {
	id: number;
	image: string;
	name: string;
};

export type ProductDetailsSchema = {
	id: number;
	name: string;
	price: string;
	description: string;
	images: ProductImagechema[];
	category: string;
	created_at: string;
	updated_at: string;
	reviews: {
		comment: string;
		id: string;
		created_at: string;
		rating: number;
		user: string;
	}[];
	reviews_count: number;
	can_review: boolean;
	download_url: string;
};

type ProductImagechema = {
	image_name: string;
	url: string;
};

export type UserOrder = {
	id: number;
	name: string;
	price: string;
};
