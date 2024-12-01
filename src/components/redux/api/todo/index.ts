import { api as index } from "..";

const api = index.injectEndpoints({
	endpoints: (builder) => ({
		getProducts: builder.query({
			query: () => ({
				url: `/products`,
				method: "GET",
			}),
		}),
	}),
});

export const { useGetProductsQuery } = api;
