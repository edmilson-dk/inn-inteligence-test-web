import { RefObject, ReactNode, FormEvent, Dispatch, SetStateAction } from "react";

import { MovieInfosDataApiResponse, MoviePreviewData } from "src/types/api-response-types";

export type MovieContextProps = {
  handleSearchAllMovies: (e: FormEvent) => void;
  handleCloseModal: () => void;
  searchAllMoviesWithQuery: (page: number, type: string, title: string, year: number) => void;
  searchInputRef: RefObject<HTMLInputElement>;
  isLoading: boolean;
  isNotFoundMovie: boolean;
  isOpenModalInfos: boolean;
  moviesDataInfos: MovieInfosDataApiResponse;
  moviesDataPreview: MoviePreviewData[];
  setMoviesDataPreview: Dispatch<SetStateAction<MoviePreviewData[]>>
  handleSearchOneMovieInfos: (id: string) => void;
  moviesPreviewTotal: number;
}

export type MovieContextProviderProps = {
  children: ReactNode;
}