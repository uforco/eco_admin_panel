import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface StockProductType {
  id: string;
  product_name: string;
  category: string;
  brand_name: string;
  short_Description: string;
  coverimage: string;
  price: string;
  discount: string;
  stock_Status: number;
  rating: number;
}

const stockProductApi = createApi({
  reducerPath: "stockProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: `${process.env.NEXT_PUBLIC_SERVER_URL}` }),
  endpoints: (builder) => ({
    getStockProductListApi: builder.query({
      query: () => "/product/stock",
    }),
    updateStock: builder.mutation({
      query: ({ id, stockStatus, stock }) => ({
        url: `/product/update-stock/${id}`,
        method: "PUT",
        body: { id, stockStatus, stock },
      }),
      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          const update = await queryFulfilled;
          dispatch(
            stockProductApi.util.updateQueryData(
              "getStockProductListApi",
              undefined,
              (draft) => {
                const updateData = draft.find(
                  (product: StockProductType) => product.id == arg.id
                );
                updateData.stock_Status = Number(update.data.stock_Status)
              }
            )
          );
        } catch {}
      },
    }),
  }),
});

export const { useGetStockProductListApiQuery, useUpdateStockMutation } =
  stockProductApi;

export default stockProductApi;
