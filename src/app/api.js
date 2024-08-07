import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const baseQuery = fetchBaseQuery({
    baseUrl: BASE_URL,

    prepareHeaders: (headers, { getState }) => {
        const token = getState().user.token;

        if (token) {
            headers.set("Content-Type", "application/json");

            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery,
    endpoints: (builder) => ({
        customerLogin: builder.mutation({
            query: (body) => ({
                url: `auth/customer/login`,
                method: "POST",
                body,
            }),
        }),

        riderLogin: builder.mutation({
            query: (body) => ({
                url: `auth/customer/rider`,
                method: "POST",
                body,
            }),
        }),

        getDeliveryAreas: builder.mutation({
            query: () =>  `rates/areas`,
            transformResponse: (response) => response.data,
        }),

        getDeliveryRate: builder.mutation({
            query: (payload) =>  `rates/rate?source=${payload.source}&destination=${payload.destination}`,
            transformResponse: (response) => response.data,
        }),

        createDelivery: builder.mutation({
            query: (body) => ({
                url: `delivery`,
                method: "POST",
                body,
            }),
            transformResponse: (response) => response.data,
        }),

        getDeliveries: builder.mutation({
            query: () =>  `delivery/all`,
            transformResponse: (response) => response.data,
        }),

        getDeliveryDetails: builder.mutation({
            query: (id) =>  `delivery/${id}`,
            transformResponse: (response) => response.data,
        }),

        confirmPayment: builder.mutation({
            query: (paymentRef) =>  `delivery/confirmPay/${paymentRef}`,
            transformResponse: (response) => response.data,
        }),

    }),
});

export const {
    useCustomerLoginMutation,
    useRiderLoginMutation,
    useGetDeliveriesMutation,
    useGetDeliveryDetailsMutation,
    useGetDeliveryAreasMutation,
    useGetDeliveryRateMutation,
    useCreateDeliveryMutation,
    useConfirmPaymentMutation,
} = apiSlice;