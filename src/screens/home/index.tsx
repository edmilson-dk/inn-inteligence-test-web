import { FormEvent, useRef, useState } from "react";
import { FiSearch, FiStar } from "react-icons/fi";

import { ButtonRedirect } from "src/components/button-redirect";
import { Loading } from "src/components/loading";
import { MoviePreviewCard } from "src/components/movie-preview-card";
import { axiosFetchApi } from "src/services/fetch-api";
import { Container } from "src/styles/components/container";
import { HomeContainer, HomeContent, HomeContentContainer, HomeWrapper } from "src/styles/screens/home";
import { MoviePreviewDataApiResponse } from "src/types/api-response-types";

export function Home() {
  const [moviesDataPreview, setMoviesDataPreview] = useState([] as MoviePreviewDataApiResponse[]);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleSearch(e: FormEvent) {
    e.preventDefault();

    if (searchInputRef.current && searchInputRef.current.value.length > 3) {
      setIsLoading(true);

      const response = await axiosFetchApi.get<MoviePreviewDataApiResponse[] | []>(
        "/search/all",
        {
          params: { title: searchInputRef.current.value, page: 3 },
        }
      );
      console.log(response.data)
      if (response.data) setIsLoading(false);

      setMoviesDataPreview(response.data);
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
            <form onSubmit={handleSearch}>
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

      <HomeContent style={{ display: moviesDataPreview.length > 0 ? "flex" : "none" }}>
        <Container>
          <HomeContentContainer>     
            {
              moviesDataPreview.length > 0 && moviesDataPreview.map(item => (
                <MoviePreviewCard key={item.id} data={item} />
              ))
            }
          </HomeContentContainer>
        </Container>
      </HomeContent>
    </>
  )
}