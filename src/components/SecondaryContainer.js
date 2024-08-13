import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {

    const movies = useSelector((store) => store?.movies);

    return (
        movies && (
            <div className=' bg-black'>
                <div className='mt-0 md:-mt-56 relative z-20'>
                    <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies} />
                    <MovieList title={"Popular"} movies={movies?.popularMovies} />
                    <MovieList title={"Horrer movies"} movies={movies?.nowPlayingMovies} />
                    <MovieList title={"Now Playing Movies"} movies={movies?.nowPlayingMovies} />
                </div>
            </div>

        )
    )
}

export default SecondaryContainer;