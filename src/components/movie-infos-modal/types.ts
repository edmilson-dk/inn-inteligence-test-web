import { Dispatch, SetStateAction } from "react";
import { MovieInfosDataApiResponse } from "src/types/api-response-types";

export type MovieInfosModalProps = {
  data: MovieInfosDataApiResponse;
  closeModalClick: () => void;
}