import React, {useState, useEffect } from "react";
import axios from "../api/axios";
import "../css/Row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const BASE_URL = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchURL, isLargeRow }) {


    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {

        async function fetchData() {
            const request = await axios.get(fetchURL);
            setMovies(request.data.results);
            return request;
        }

        fetchData();
    }, [fetchURL]);


    const opts = {
        height: "390",
        width: "100%",
        playerVars: {
            autoPlay: 1
        }
    }

    const handleClick = movie => {
        if(trailerUrl) {
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.name || "").then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParams.get("v"));
            })
            .catch(error => {
                console.log(error);
            })
        }
    }


    return (
        <div className="row">
            <h2> {title} </h2>
            <div className="row__posters">
                {movies.map((movie) => (
                    <img 
                        key={movie.id} 
                        onClick= {() => handleClick(movie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                        src={`${BASE_URL}${ isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                        alt={movie.name} />
                ))}
            </div>
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}
        </div>
    )
}


export default Row;