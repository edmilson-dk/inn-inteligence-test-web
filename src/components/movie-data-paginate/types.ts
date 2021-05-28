export type MovieDataPaginateProps = {
  nextCbFetch: () => void;
  prevCbFetch: () => void;
  nextDisabled?: boolean;
  prevDisabled?: boolean;
}