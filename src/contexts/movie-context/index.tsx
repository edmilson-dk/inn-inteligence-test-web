import { createContext, FormEvent, useContext, useRef, useState } from "react";

import { axiosFetchApi } from "src/services/fetch-api";
import { MovieInfosDataApiResponse, MoviePreviewDataApiResponse } from "src/types/api-response-types";
import { toTopAndAddNotScroll } from "src/utils/toTopAndAddNotScroll";
import { MovieContextProps, MovieContextProviderProps } from "./types";

const MovieContext = createContext({} as MovieContextProps);

export function MovieContextProvider({ children }: MovieContextProviderProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [moviesDataPreview, setMoviesDataPreview] = useState([] as MoviePreviewDataApiResponse[]);
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

  async function handleSearchAllMovies(e: FormEvent) {
    e.preventDefault();

    try {
      if (searchInputRef.current && searchInputRef.current.value.length >= 2) {
        setIsLoading(true);
        toTopAndAddNotScroll(true);

        const response = await axiosFetchApi.get<MoviePreviewDataApiResponse[] | []>(
          "/search/all",
          {
            params: { title: searchInputRef.current.value.trimEnd().trimStart() },
          }
        );

        if (response.data.length > 0) {
          setIsLoading(false);
          toTopAndAddNotScroll(false);
          setIsNotFoundMovie(false);
        } else if (response.data.length === 0) {
          setIsLoading(false);
          setIsNotFoundMovie(true);
        }

        setMoviesDataPreview(response.data);
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
    }}>
      { children }
    </MovieContext.Provider>
  )
}

export function useMovieContext() {
  const data = useContext(MovieContext);
  return data;
}