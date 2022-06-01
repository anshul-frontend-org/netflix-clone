import React, {useEffect, useState} from "react";
import requests from "../api/requests";
import axios from "../api/axios";
import "../css/Banner.css"


function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
            return request;
        }
        fetchData();
    }, [])

    const movieURL = `https://image.tmdb.org/t/p/original${movie?.backdrop_path}`;
    return (
        <header className="banner"
         style={{
             backgroundSize: "cover",
             backgroundImage: `url(${movieURL})`,
             backgroundPosition: "center center",
         }}
        >
            <div className="banner__contents">
                <h1 className="banner__title"> {movie?.title || movie?.name || movie?.original_name} </h1>
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
            </div>
        </header>
    )
}

export default Banner;