import { Dispatch, SetStateAction } from "react";

export type MovieFilterDataProps = {
  setMovieType: Dispatch<SetStateAction<string>>;
  setMovieYear: Dispatch<SetStateAction<number>>;
}