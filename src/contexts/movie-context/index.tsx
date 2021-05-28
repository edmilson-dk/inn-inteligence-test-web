import { createContext, FormEvent, useContext, useRef, useState } from "react";

import { axiosFetchApi } from "src/services/fetch-api";
import { MovieInfosDataApiResponse, MoviePreviewData, MoviePreviewDataApiResponse } from "src/types/api-response-types";
import { toTopAndAddNotScroll } from "src/utils/toTopAndAddNotScroll";
import { MovieContextProps, MovieContextProviderProps } from "./types";

const MovieContext = createContext({} as MovieContextProps);

export function MovieContextProvider({ children }: MovieContextProviderProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [moviesDataPreview, setMoviesDataPreview] = useState([] as MoviePreviewData[]);
  const [moviesPreviewTotal, setmoviesPreviewTotal] = useState(0);
  const [moviesDataInfos, setMoviesDataInfos] = useState({} as MovieInfosDataApiResponse);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFoundMovie, setIsNotFoundMovie] = useState(false);
  const [isOpenModalInfos, setIsOpenModalInfos] = useState(false);

  function handleCloseModal() {
    toTopAndAddNotScroll(false, false);
    setIsOpenModalInfos(false);
  }

  async function handleSearchOneMovieInfos(id: string) {
    setIsLoading(true);
    toTopAndAddNotScroll(true, true);

    const response = await axiosFetchApi.get<MovieInfosDataApiResponse>(`/search/infos/${id}`);

    if (response.data) {
      setIsLoading(false);
      setIsOpenModalInfos(true);
    }

    setMoviesDataInfos(response.data);
  }

  async function searchAllMoviesWithQuery(page: number, type: string, title: string, year = 0) {
    try {
      if (title && title.length >= 2) {
        setIsLoading(true);

        const response = await axiosFetchApi.get<MoviePreviewDataApiResponse>(
          "/search/all",
          {
            params: { 
              title: title.trimEnd().trimStart(),
              page, type, year
            },
          }
        );
        
        if (response.data && response.data.data.length > 0) {
          setIsLoading(false);
          setIsNotFoundMovie(false);
        } else {
          setIsLoading(false);
          setIsNotFoundMovie(true);
          return;
        }

        setMoviesDataPreview(response.data.data);
        setmoviesPreviewTotal(response.data.total);
      } else {
        alert("The search must have at least two characters");
      }
    } catch(e) {
      setIsLoading(false);
      setIsNotFoundMovie(true);
    }
  }

  async function handleSearchAllMovies(e: FormEvent) {
    e.preventDefault();

    try {
      if (searchInputRef.current && searchInputRef.current.value.length >= 2) {
        setIsLoading(true);
        toTopAndAddNotScroll(true);

        const response = await axiosFetchApi.get<MoviePreviewDataApiResponse>(
          "/search/all",
          {
            params: { title: searchInputRef.current.value.trimEnd().trimStart() },
          }
        );
        
        if (response.data && response.data.data.length > 0) {
          setIsLoading(false);
          toTopAndAddNotScroll(false);
          setIsNotFoundMovie(false);
        } else {
          setIsLoading(false);
          setIsNotFoundMovie(true);
          return;
        }

        setMoviesDataPreview(response.data.data);
        setmoviesPreviewTotal(response.data.total);
      } else {
        alert("The search must have at least two characters");
      }
    } catch(e) {
      setIsLoading(false);
      setIsNotFoundMovie(true);
    }
  }

  return (
    <MovieContext.Provider value={{
      handleCloseModal,
      handleSearchOneMovieInfos,
      handleSearchAllMovies,
      moviesDataPreview,
      moviesDataInfos,
      isLoading,
      isNotFoundMovie,
      isOpenModalInfos,
      searchInputRef,
      moviesPreviewTotal,
      searchAllMoviesWithQuery
    }}>
      { children }
    </MovieContext.Provider>
  )
}

export function useMovieContext() {
  const data = useContext(MovieContext);
  return data;
}