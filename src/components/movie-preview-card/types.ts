import { MoviePreviewDataApiResponse } from "src/types/api-response-types";

export type MoviePreviewCardProps = {
  data: MoviePreviewDataApiResponse;
  displayInfosClick: (id: string) => void;
}