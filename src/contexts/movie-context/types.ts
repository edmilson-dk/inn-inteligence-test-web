import { RefObject, ReactNode, FormEvent } from "react";
import { MovieInfosDataApiResponse, MoviePreviewData, MoviePreviewDataApiResponse } from "src/types/api-response-types";

export type MovieContextProps = {
  handleSearchAllMovies: (e: FormEvent) => void;
  handleCloseModal: () => void;
  searchAllMoviesWithQuery: (page: number, type: string, title: string) => void;
  searchInputRef: RefObject<HTMLInputElement>;
  isLoading: boolean;
  isNotFoundMovie: boolean;
  isOpenModalInfos: boolean;
  moviesDataInfos: MovieInfosDataApiResponse;
  moviesDataPreview: MoviePreviewData[];
  handleSearchOneMovieInfos: (id: string) => void;
  moviesPreviewTotal: number;
}

export type MovieContextProviderProps = {
  children: ReactNode;
}