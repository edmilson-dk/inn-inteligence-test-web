import { RefObject, ReactNode, FormEvent } from "react";

import { MovieInfosDataApiResponse, MoviesFavoritesAllDataResponse } from "src/types/api-response-types";

export type MoviesFavoritesContextProps = {
  getAllMoviesFavorites: (page: number) => void;
  getOneMovieFavorite: (id: string) => void;
  addMovieInFavorites: (id: string) => Promise<boolean>;
  deleteMovieInFavorites: (id: string, page: number) => Promise<boolean>;
  handleCloseModal: () => void;
  isFavoritesLoading: boolean;
  isNotFoundMoviesFavorites: boolean;
  isOpenModalFavoritesInfos: boolean;
  moviesFavoritesData: MoviesFavoritesAllDataResponse;
  movieFavoriteData: MovieInfosDataApiResponse;
}

export type MoviesFavoritesContextProviderProps = {
  children: ReactNode;
}