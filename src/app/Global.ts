import { InitialStateType } from "@/utils/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: InitialStateType = {
	email: "",
	id: 0,
	name: "",
	token: "",
};

export const Global = createSlice({
	name: "Global",
	initialState,
	reducers: {
		setEmail: (state, action) => {
			state.email = action.payload.value;
		},
		setId: (state, action) => {
			state.id = action.payload.value;
		},
		setName: (state, action) => {
			state.name = action.payload.value;
		},
		setToken: (state, action) => {
			state.token = action.payload.value;
		},
	},
});

export const { setEmail, setId, setName, setToken } = Global.actions;
export default Global.reducer;
