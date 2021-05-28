import { useEffect, useState } from "react";
import { FiSearch, FiStar } from "react-icons/fi";

import { ButtonRedirect } from "src/components/button-redirect";
import { Loading } from "src/components/loading";
import { MovieDataPaginate } from "src/components/movie-data-paginate";
import { MovieFilterData } from "src/components/movie-filter-data";
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
    moviesPreviewTotal,
    searchAllMoviesWithQuery
  } = useMovieContext();
  const [actualPage, setActualPage] = useState(1);
  const [type, setType] = useState("movie");
  const [year, setYear] = useState(0);

  async function handlerNextDataClick() {
    const title = searchInputRef.current ? searchInputRef.current.value : "";
    const page = actualPage+1;
    await searchAllMoviesWithQuery(page, type, title, 0);
    setActualPage(page);
  }

  async function handlerPrevDataClick() {
    const title = searchInputRef.current ? searchInputRef.current.value : "";
    const page = actualPage -1;
    await searchAllMoviesWithQuery(page, type, title, 0);
    setActualPage(page);
  }

  useEffect(() => {
    (async () => {
      if (searchInputRef.current && searchInputRef.current.value) {
        const title = searchInputRef.current.value;
        await searchAllMoviesWithQuery(actualPage, type, title, year);
      }
      return;
    })()
  }, [type, year])

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
            <MovieFilterData  setMovieType={setType} setMovieYear={setYear}/>
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
          {
            moviesDataPreview.length > 0 && (
              <MovieDataPaginate 
                nextCbFetch={handlerNextDataClick}
                prevCbFetch={handlerPrevDataClick}
                prevDisabled={actualPage === 1}
                nextDisabled={actualPage === Math.ceil(moviesPreviewTotal / 10)}
              />
            )
          }
        </Container>
      </HomeContent>
    </>
  )
}