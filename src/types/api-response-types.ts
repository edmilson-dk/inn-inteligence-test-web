export type MoviePreviewData = {
  poster: string;
  title: string;
  year: string;
  id: string;
  type: string;
}

export type MoviePreviewDataApiResponseSuccess = {
  data: MoviePreviewData[],
  total: number;
}

export type MoviePreviewDataApiResponse = MoviePreviewDataApiResponseSuccess | null;

export type MovieInfosDataApiResponse = {
  title: string;
  released: string;
  runtime: string;
  genre:string;
  director: string;
  writer: string;
  actors: string;
  plot: string;
  language: string;
  country: string;
  poster: string;
  id: string;
  type: string;
}

export type MoviesFavoritesAllDataResponse = {
  data: MovieInfosDataApiResponse[],
  total: number;
}