import { MoviePreviewData } from "src/types/api-response-types";

export type MoviePreviewCardProps = {
  data: MoviePreviewData;
  displayInfosClick: (id: string) => void;
}