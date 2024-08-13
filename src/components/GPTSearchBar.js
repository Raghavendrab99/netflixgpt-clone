import { useDispatch, useSelector } from "react-redux";
import language from "../utils/languageConstants";
import { useRef } from "react";
import genAI from "../utils/geminiAI";
import { API_OPTIONS } from "../utils/constants";
import { addGPTMovieResults, addMovieNames } from "../utils/GPTSlice";

const GPTSearchBar = () => {

    const languageKey = useSelector((store) => store.config.lang);

    const searchText = useRef(null)

    const dispatch = useDispatch();

    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" +
            movie +
            "&include_adult=false&language=en-US&page=1", API_OPTIONS);
        const json = await data.json();
        console.log(json);
        return json.results;
    };

    const handleGPTSearchClick = async () => {

        const prompt = "acts as a movie recommendation system and suggest some movies for the Query :" + searchText.current.value + " give only 5 movie names, comma seperated"

        // console.log(searchText.current.value);
        const model = genAI.getGenerativeModel(
            { model: "gemini-1.5-flash" }
        );
        const data = await model.generateContent(prompt);
        const response = await data.response;
        const text = response.text();
        console.log(text);

        if (!text) return null;

        const moviesNameResults = text.split(",")
        console.log(moviesNameResults);

        const promiseArray = moviesNameResults.map((movie) => searchMovieTMDB(movie));

        const tmdbMovieResults = await Promise.all(promiseArray);
        console.log(tmdbMovieResults);
        dispatch(addGPTMovieResults(tmdbMovieResults));
        dispatch(addMovieNames(moviesNameResults));


    }
    return (
        <div className="pt-[50%] md:pt-[12%] flex justify-center">
            <form className="w-full md:w-1/2  bg-black grid grid-cols-12" onSubmit={
                (e) => { e.preventDefault() }}>
                <input
                    ref={searchText}
                    className="p-4 m-4 col-span-9"
                    type="text"
                    placeholder={language[languageKey].gptSearchPlaceholder} />
                <button className="py-2 px-4 m-4 col-span-3 bg-red-700 text-white rounded-md" onClick={handleGPTSearchClick}>{language[languageKey].search} </button>
            </form>
        </div>
    )
};

export default GPTSearchBar;