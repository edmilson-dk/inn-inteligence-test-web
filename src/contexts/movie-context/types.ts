import { RefObject, ReactNode, FormEvent } from "react";
import { MovieInfosDataApiResponse, MoviePreviewDataApiResponse } from "src/types/api-response-types";

export type MovieContextProps = {
  handleSearchAllMovies: (e: FormEvent) => void;
  handleCloseModal: () => void;
  searchInputRef: RefObject<HTMLInputElement>;
  isLoading: boolean;
  isNotFoundMovie: boolean;
  isOpenModalInfos: boolean;
  moviesDataInfos: MovieInfosDataApiResponse;
  moviesDataPreview: MoviePreviewDataApiResponse[];
  handleSearchOneMovieInfos: (id: string) => void;
}

export type MovieContextProviderProps = {
  children: ReactNode;
}