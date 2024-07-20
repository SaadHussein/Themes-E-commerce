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
};

export type State = {
	Global: {
		token: string;
		name: string;
		id: number;
		email: string;
	};
};
