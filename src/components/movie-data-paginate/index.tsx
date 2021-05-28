import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import { MovieDataPaginateWrapper } from "src/styles/movie-data-paginate";
import { MovieDataPaginateProps } from "./types";

export const MovieDataPaginate = ({ nextCbFetch, prevCbFetch, nextDisabled, prevDisabled }: MovieDataPaginateProps) => {

  return (
    <MovieDataPaginateWrapper>
      <button type="button" onClick={prevCbFetch} disabled={prevDisabled}>
        <span>
          <FiChevronLeft size="100%"/>
        </span>
      </button>
      <button type="button" onClick={nextCbFetch} disabled={nextDisabled}>
        <span>
          <FiChevronRight size="100%"/>
        </span>
      </button>
    </MovieDataPaginateWrapper>
  );
};