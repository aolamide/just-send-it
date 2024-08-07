import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
    user: "",
    token: "",
    role: ""
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.role = action.payload.type;
        },
        setUserType: (state, action) => {
            state.role = action.payload;
        },
        logout: () => initialState,
    },
});

export const { login, logout, setUserType } = userSlice.actions;

export default userSlice.reducer;
