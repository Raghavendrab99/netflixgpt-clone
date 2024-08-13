import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GPTMovieSuggesstions = () => {

    const gpt = useSelector((store) => store.gpt);
    const { gptMovies, movieNames } = gpt;

    if (!movieNames) return null;


    return (
        <div className="p-2 m-2 bg-black text-white bg-opacity-90">
            <div>
                {movieNames.map((movieName, index) => (
                    <MovieList key={movieName} title={movieName} movies={gptMovies[index]} />
                ))}
            </div>
        </div>
    )
};

export default GPTMovieSuggesstions;