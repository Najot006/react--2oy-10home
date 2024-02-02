import { apiSlice } from "../api/apiSlice";

export const MainApiSlice = apiSlice.injectEndpoints({
    endpoints: builder=>({
        getMain: builder.query({
            query:()=>"/main"
        })
    })
})

export const {useGetMainQuery} = MainApiSlice