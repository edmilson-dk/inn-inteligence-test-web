import { FormEvent, useRef, useState } from "react";
import { FiSearch, FiStar } from "react-icons/fi";

import { ButtonRedirect } from "src/components/button-redirect";
import { Loading } from "src/components/loading";
import { MovieInfosModal } from "src/components/movie-infos-modal";
import { MoviePreviewCard } from "src/components/movie-preview-card";
import { axiosFetchApi } from "src/services/fetch-api";
import { Container } from "src/styles/components/container";
import { HomeContainer, HomeContent, HomeContentContainer, HomeWrapper } from "src/styles/screens/home";
import { MovieInfosDataApiResponse, MoviePreviewDataApiResponse } from "src/types/api-response-types";
import { toTopAndAddNotScroll } from "src/utils/toTopAndAddNotScroll";

export function Home() {
  const [moviesDataPreview, setMoviesDataPreview] = useState([] as MoviePreviewDataApiResponse[]);
  const [moviesDataInfos, setMoviesDataInfos] = useState({} as MovieInfosDataApiResponse);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotFoundMovie, setIsNotFoundMovie] = useState(false);
  const [isOpenModalInfos, setIsOpenModalInfos] = useState(false);

  function handleCloseModal() {
    toTopAndAddNotScroll(false, false);
    setIsOpenModalInfos(false);
  }

  async function handleSearchOneMovieInfos(id: string) {
    setIsLoading(true);
    toTopAndAddNotScroll(true, true);

    const response = await axiosFetchApi.get<MovieInfosDataApiResponse>(`/search/infos/${id}`);

    if (response.data) {
      setIsLoading(false);
      setIsOpenModalInfos(true);
    }

    setMoviesDataInfos(response.data);
  }

  async function handleSearchAllMovies(e: FormEvent) {
    e.preventDefault();

    try {
      if (searchInputRef.current && searchInputRef.current.value.length >= 2) {
        setIsLoading(true);
        toTopAndAddNotScroll(true);

        const response = await axiosFetchApi.get<MoviePreviewDataApiResponse[] | []>(
          "/search/all",
          {
            params: { title: searchInputRef.current.value.trimEnd().trimStart() },
          }
        );

        if (response.data.length > 0) {
          setIsLoading(false);
          toTopAndAddNotScroll(false);
          setIsNotFoundMovie(false);
        } else if (response.data.length === 0) {
          setIsLoading(false);
          setIsNotFoundMovie(true);
        }

        setMoviesDataPreview(response.data);
      } else {
        alert("The search must have at least two characters");
      }
    } catch(e) {
      setIsLoading(false);
      setIsNotFoundMovie(true);
    }
  }

  return (
    <>
      <HomeWrapper>
        <ButtonRedirect
          label="Favorites"
          redirectPath="/favorites"
          icon={<FiStar size="100%" />}
        />
        <Container>
          <HomeContainer>
            <h1 className="flex-center">
              Movix
            <span>
                <FiSearch size="100%" />
              </span>
            </h1>
            <form onSubmit={handleSearchAllMovies}>
              <input ref={searchInputRef} type="text" name="search" placeholder="Search..." />
              <button className="flex-center" type="submit">
                <span>
                  <FiSearch size="100%" />
                </span>
              </button>
            </form>
          </HomeContainer>
        </Container>
      </HomeWrapper>

      {isLoading && (<Loading />)}

      {isNotFoundMovie && (<h2 className="not-found-movie">Nothing found</h2>)}

      {(isOpenModalInfos && moviesDataInfos.title) && (
        <MovieInfosModal 
          closeModalClick={handleCloseModal} 
          data={moviesDataInfos}
        />
      )}

      <HomeContent style={{ 
        display: moviesDataPreview.length > 0 ? "flex" : "none",
        top: ( isOpenModalInfos || isLoading ) ? "100vh" : "calc(100vh - 100px)",
      }}>
        <Container>
          <HomeContentContainer>
            {
              moviesDataPreview.length > 0 && moviesDataPreview.map(item => (
                <MoviePreviewCard displayInfosClick={handleSearchOneMovieInfos} key={item.id} data={item} />
              ))
            }
          </HomeContentContainer>
        </Container>
      </HomeContent>
    </>
  )
}