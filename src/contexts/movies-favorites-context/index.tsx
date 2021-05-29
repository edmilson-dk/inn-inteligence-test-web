import { createContext, useContext, useState } from "react";
import { axiosFetchApi } from "src/services/fetch-api";
import { MovieInfosDataApiResponse, MoviesFavoritesAllDataResponse } from "src/types/api-response-types";
import { toTopAndAddNotScroll } from "src/utils/toTopAndAddNotScroll";
import { MoviesFavoritesContextProps, MoviesFavoritesContextProviderProps } from "./types";

const MoviesFavoritesContext = createContext({} as MoviesFavoritesContextProps);

export function MoviesFavoritesContextProvider({ children }: MoviesFavoritesContextProviderProps) {
  const [moviesFavoritesData, setMoviesFavoritesData] = useState({data: [], total: 0} as MoviesFavoritesAllDataResponse);
  const [movieFavoriteData, setMovieFavoriteData] = useState({} as MovieInfosDataApiResponse);
  const [isFavoritesLoading, setIsFavoritesLoading] = useState(false);
  const [isNotFoundMoviesFavorites, setIsNotFoundMoviesFavorites] = useState(false);
  const [isOpenModalFavoritesInfos, setIsOpenModalFavoritesInfos] = useState(false);

  function handleCloseModal() {
    toTopAndAddNotScroll(false, false);
    setIsOpenModalFavoritesInfos(false);
  }

  function notFoundMovieFavoritesSetStates() {
    setIsFavoritesLoading(false);
    setIsNotFoundMoviesFavorites(true);
    setMoviesFavoritesData({ data: [], total: 0 });
  }

  function foundMovieFavoritesSetStates() {
    setIsFavoritesLoading(false);
    setIsNotFoundMoviesFavorites(false);
    toTopAndAddNotScroll(false);
  }

  async function getOneMovieFavorite(id: string) {
    setIsFavoritesLoading(true);
    toTopAndAddNotScroll(true, true);

    try {
      const response = await axiosFetchApi.get<MovieInfosDataApiResponse>(`/favorite/${id}`);

      if (response.data) {
        setIsFavoritesLoading(false);
        setIsOpenModalFavoritesInfos(true);
        setIsNotFoundMoviesFavorites(false);
      }

      setMovieFavoriteData(response.data);
    } catch(e) {
      setIsFavoritesLoading(false);
      setIsOpenModalFavoritesInfos(false);
      setIsNotFoundMoviesFavorites(true);
      return;
    }
  }
  
  async function getAllMoviesFavorites(page: number) {
    try {
      setIsFavoritesLoading(true);
      toTopAndAddNotScroll(true);

      const response = await axiosFetchApi.get<MoviesFavoritesAllDataResponse>(
        "/favorites",
        { params: { page } }
      );

      if (response.data && response.data.data.length > 0) {
        foundMovieFavoritesSetStates();
      } else {
        notFoundMovieFavoritesSetStates();
        return;
      }

      setMoviesFavoritesData({ 
        data: response.data.data, 
        total: response.data.total 
      });
    } catch(e) {
      notFoundMovieFavoritesSetStates();
      return;
    }
  }

  async function addMovieInFavorites(id: string) {
    try {
      const response = await axiosFetchApi.post("/favorite/add/", { id });
      return true;
    } catch(e) {
      return false;
    }
  }

  async function deleteMovieInFavorites(id: string, page: number) {
    try {
      const response = await axiosFetchApi.delete(`/favorite/drop/${id}`);
      await getAllMoviesFavorites(page);
      return true;
    } catch(e) {
      return false;
    }
  }

  return (
    <MoviesFavoritesContext.Provider value={{
      getOneMovieFavorite,
      getAllMoviesFavorites,
      addMovieInFavorites,
      deleteMovieInFavorites,
      moviesFavoritesData,
      movieFavoriteData,
      isFavoritesLoading,
      isNotFoundMoviesFavorites,
      isOpenModalFavoritesInfos,
      handleCloseModal
    }}>
      { children }
    </MoviesFavoritesContext.Provider>
  )
}

export function useMoviesFavoritesContext() {
  const context = useContext(MoviesFavoritesContext);
  return context;
}