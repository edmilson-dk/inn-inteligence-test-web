import { FiSearch, FiStar } from "react-icons/fi";

import { ButtonRedirect } from "src/components/button-redirect";
import { Loading } from "src/components/loading";
import { MovieInfosModal } from "src/components/movie-infos-modal";
import { MoviePreviewCard } from "src/components/movie-preview-card";
import { useMovieContext } from "src/contexts/movie-context";
import { Container } from "src/styles/components/container";
import { HomeContainer, HomeContent, HomeContentContainer, HomeWrapper } from "src/styles/screens/home";

export function Home() {
  const {
    handleCloseModal,
    handleSearchOneMovieInfos,
    handleSearchAllMovies,
    moviesDataPreview,
    moviesDataInfos,
    isLoading,
    isNotFoundMovie,
    isOpenModalInfos,
    searchInputRef,
  } = useMovieContext();

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