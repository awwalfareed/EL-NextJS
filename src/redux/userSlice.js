import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		user: null,
		userData: {},
	},
	reducers: {
		login: (state, action) => {
			state.user = action.payload;
		},
		logout: (state) => {
			state.user = null;
		},
		signup: (state, action) => {
			state.user = action.payload;
		},
		setUserData: (state, action) => {
			state.userData = action.payload;
		},
	},
});

export const { login, logout, signup, setUserData } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectUserData = (state) => state.user.userData;

export default userSlice.reducer;
