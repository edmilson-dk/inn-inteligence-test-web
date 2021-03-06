import { createContext, FormEvent, useContext, useRef, useState } from "react";

import { axiosFetchApi } from "src/services/fetch-api";
import { MovieInfosDataApiResponse, MoviePreviewData, MoviePreviewDataApiResponse } from "src/types/api-response-types";
import { toTopAndAddNotScroll } from "src/utils/toTopAndAddNotScroll";
import { MovieContextProps, MovieContextProviderProps } from "./types";

const MovieContext = createContext({} as MovieContextProps);

export function MovieContextProvider({ children }: MovieContextProviderProps) {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [moviesDataPreview, setMoviesDataPreview] = useState([] as MoviePreviewData[]);
  const [moviesPreviewTotal, setMoviesPreviewTotal] = useState(0);
  const [moviesDataInfos, setMoviesDataInfos] = useState({} as MovieInfosDataApiResponse);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFoundMovie, setIsNotFoundMovie] = useState(false);
  const [isOpenModalInfos, setIsOpenModalInfos] = useState(false);

  function handleCloseModal() {
    toTopAndAddNotScroll(false, false);
    setIsOpenModalInfos(false);
  }

  function notFoundMoviePreviewSetStates() {
    setIsLoading(false);
    setIsNotFoundMovie(true);
    setMoviesDataPreview([]);
  }

  function foundMoviePreviewSetStates() {
    setIsLoading(false);
    setIsNotFoundMovie(false);
    toTopAndAddNotScroll(false);
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

  async function searchAllMoviesWithQuery(page: number, type: string, title: string, year: number) {
    try {
      if (title && title.length >= 2) {
        setIsLoading(true);
        toTopAndAddNotScroll(true);

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
          foundMoviePreviewSetStates()
        } else {
          notFoundMoviePreviewSetStates();
          return;
        }

        setMoviesDataPreview(response.data.data);
        setMoviesPreviewTotal(response.data.total);
      } else {
        alert("The search must have at least two characters");
      }
    } catch (e) {
      notFoundMoviePreviewSetStates();
      return;
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
          foundMoviePreviewSetStates()
        } else {
          notFoundMoviePreviewSetStates();
          return;
        }

        setMoviesDataPreview(response.data.data);
        setMoviesPreviewTotal(response.data.total);
      } else {
        alert("The search must have at least two characters");
      }
    } catch (e) {
      notFoundMoviePreviewSetStates();
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
      searchAllMoviesWithQuery,
      setMoviesDataPreview
    }}>
      { children}
    </MovieContext.Provider>
  )
}

export function useMovieContext() {
  const context = useContext(MovieContext);
  return context;
}