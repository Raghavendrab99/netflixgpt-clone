import { createSlice } from "@reduxjs/toolkit";

const GPTSlice = createSlice({
    name: "gpt",
    initialState: {
        showGptSearch: false,
        gptMovies: null,
        movieNames: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGPTMovieResults: (state, action) => {
            state.gptMovies = action.payload
        },
        addMovieNames: (state, action) => {
            state.movieNames = action.payload
        }
    }
});

export const { toggleGptSearchView, addGPTMovieResults, addMovieNames } = GPTSlice.actions

export default GPTSlice.reducer;