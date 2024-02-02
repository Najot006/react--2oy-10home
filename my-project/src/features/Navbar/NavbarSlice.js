import { apiSlice } from "../api/apiSlice";

export const NavbarApiSlice = apiSlice.injectEndpoints({
    endpoints: builder=>({
        getNavbar: builder.query({
            query:()=>"/navbar_text"
        }),
        getImage: builder.query({
            query:()=>"/image"
        }),
        getHeder: builder.query({
            query:()=>"/heder"
        })
    })
})

export const {useGetNavbarQuery} = NavbarApiSlice
export const {useGetImageQuery} = NavbarApiSlice
export const {useGetHederQuery} = NavbarApiSlice