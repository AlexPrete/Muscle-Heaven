import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name: 'cities',
    initialState: {
        value: [
            {
                id: 0,
                name: "Tokyo",
                imgUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, aspernatur",
                isVisited: true,
              },
              {
                id: 1,
                name: "New York",
                imgUrl: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, aspernatur",
                isVisited: true,
              },
              {
                id: 2,
                name: "Rome",
                imgUrl: "https://images.unsplash.com/photo-1548585742-1df49e753a83?q=80&w=2077&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, aspernatur",
                isVisited: true,
              },
              {
                id: 3,
                name: "London",
                imgUrl: "https://images.unsplash.com/photo-1448906654166-444d494666b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, aspernatur",
                isVisited: false,
              },
        ],
    },
    reducers: {
        add: (state,action)=> {
            state.value.push(action.payload)
        },
    },
})

export const { add } = citiesSlice.actions
export const citiesReducer = citiesSlice.reducer