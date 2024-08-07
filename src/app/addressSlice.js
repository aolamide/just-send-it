import { createSlice } from "@reduxjs/toolkit";

// Define the initial state using that type
const initialState = {
    areas: [],
    pickupAddress: {
        phone_number: "",
        email: "",
        address: "",
        area: "",
        full_name: ""
    },
    destinationAddress: {
        phone_number: "",
        email: "",
        address: "",
        area: "",
        full_name: ""
    }
};

export const addressSlice = createSlice({
    name: "address",
    initialState,
    reducers: {
        setAreas: (state, action) => {
            state.areas = action.payload;
        },
        setPickupAddress: (state, action) => {
            state.pickupAddress = action.payload;
        },
        setDestinationAddress: (state, action) => {
            state.destinationAddress = action.payload;
        },
        resetAddresses: (state, action) => ({ ...initialState, areas: state.areas })
    },
});

export const { setAreas, setDestinationAddress, setPickupAddress, resetAddresses } = addressSlice.actions;

export default addressSlice.reducer;
