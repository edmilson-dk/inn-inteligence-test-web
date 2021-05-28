import { useState } from "react";
import { FiCalendar, FiCheck } from "react-icons/fi";
import { MovieFilterDataWrapper } from "src/styles/components/movie-filter-data";
import { MovieFilterDataProps } from "./types";

export function MovieFilterData({ setMovieType, setMovieYear }: MovieFilterDataProps) {
  const [type, setType] = useState("movie");
  const [year, setYear] = useState("Year");

  function handleClick(filterType: string) {
    setType(filterType);
    setMovieType(filterType);
  }

  function handleChangeDate(date: string) {
    let [ year ] = date.split("-");
    const newYear = Number(year) < 1900 || Number(year) > 2025;

    if (newYear) { 
      year = "0";
    }

    setYear(year);
    setMovieYear(Number(year));
  }

  return (
    <MovieFilterDataWrapper>
      <div id="buttons">
        <button>
          <span 
            onClick={() => handleClick("movie")}
            className={type === "movie" ? "active flex-center" : "flex-center"}
          >
            <FiCheck size="100%"/>
          </span>
          Movies
        </button>
        <button>
          <span 
            onClick={() => handleClick("series")}
            className={type === "series" ? "active flex-center" : "flex-center"}
          >
            <FiCheck size="100%" />
          </span>
          Series
        </button>
        <button >
          <span 
            onClick={() => handleClick("episode")}
            className={type === "episode" ? "active flex-center" : "flex-center"}
          >
            <FiCheck size="100%" />
          </span>
          Episode
        </button>
      </div>

      <div id="year">
        <label htmlFor="filter-year">
          <span>
            <FiCalendar size="100%" />
          </span>
          {year}
        </label>
        <input 
          min="01/01/1900"
          max="31/12/2025"
          id="filter-year" 
          name="year" 
          type="date" 
          onChange={(e) => handleChangeDate(e.target.value)}
        />
      </div>
    </MovieFilterDataWrapper>
  )
}