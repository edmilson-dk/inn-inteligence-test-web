import { useEffect, useState } from "react";
import { FiHome, FiTrash } from "react-icons/fi";
import { ActionInfoModal } from "src/components/action-info-modal";

import { ButtonRedirect } from "src/components/button-redirect";
import { Loading } from "src/components/loading";
import { MovieDataPaginate } from "src/components/movie-data-paginate";
import { MovieInfosModal } from "src/components/movie-infos-modal";
import { MoviePreviewCard } from "src/components/movie-preview-card";
import { useMoviesFavoritesContext } from "src/contexts/movies-favorites-context";
import { Container } from "src/styles/components/container";
import { ScreenContent, ScreenContentContainer, ScreenWrapper } from "src/styles/screens/generic";
import { toTopAndAddNotScroll } from "src/utils/toTopAndAddNotScroll";

export function Favorites() {
  const {
    getOneMovieFavorite,
    getAllMoviesFavorites,
    deleteMovieInFavorites,
    moviesFavoritesData,
    movieFavoriteData,
    isFavoritesLoading,
    isNotFoundMoviesFavorites,
    isOpenModalFavoritesInfos,
    handleCloseModal
  } = useMoviesFavoritesContext();

  const [actualPage, setActualPage] = useState(1);
  const [isOpenModalAction, setIsOpenModalAction] = useState(false);

  useEffect(() => {
    (async () => {
      await getAllMoviesFavorites(actualPage);
    })()
  }, []);

  async function handleDeleteFavorite(id: string) {
    await deleteMovieInFavorites(id, actualPage);
    toTopAndAddNotScroll(false, true);
    setIsOpenModalAction(true);
  }

  async function handlerNextDataClick() {
    const page = actualPage + 1;
    await getAllMoviesFavorites(page);
    setActualPage(page);
  }

  async function handlerPrevDataClick() {
    const page = actualPage - 1;
    await getAllMoviesFavorites(page);
    setActualPage(page);
  }

  return (
    <>
      <ScreenWrapper>
        <ButtonRedirect
          label="Home"
          redirectPath="/"
          icon={<FiHome size="100%" />}
        />
      </ScreenWrapper>

      {isOpenModalAction && (
        <ActionInfoModal
          message="Item successfully removed from favorites" 
          closeModalState={setIsOpenModalAction}
        />)
      }

      {isFavoritesLoading && (<Loading />)}

      {isNotFoundMoviesFavorites && (
        <h2 
          style={{ top: "50%"}} 
          className="not-found-movie"
        >
          Nothing found
        </h2>
      )}

      {(isOpenModalFavoritesInfos && movieFavoriteData.title) && (
        <MovieInfosModal
          closeModalClick={handleCloseModal}
          data={movieFavoriteData}
        />
      )}

      <ScreenContent style={{
        display: moviesFavoritesData.data.length > 0 ? "flex" : "none",
        top: (isOpenModalFavoritesInfos || isFavoritesLoading) ? "100vh" : "100px"
      }}>
        <Container>
          <ScreenContentContainer>
            {
              moviesFavoritesData.data.length > 0 && moviesFavoritesData.data.map(item => (
                <MoviePreviewCard 
                  displayInfosClick={getOneMovieFavorite} 
                  key={item.id} 
                  data={item}
                  buttonIcon={<FiTrash size="100%"/>}
                  buttonActionClick={() => handleDeleteFavorite(item.id)}
                />
              ))
            }
          </ScreenContentContainer>
          {
            (moviesFavoritesData.data.length >= 10 || actualPage > 1) && (
              <MovieDataPaginate
                nextCbFetch={handlerNextDataClick}
                prevCbFetch={handlerPrevDataClick}
                prevDisabled={actualPage === 1}
                nextDisabled={actualPage === Math.ceil(moviesFavoritesData.total / 10)}
              />
            )
          }
        </Container>
      </ScreenContent>
    </>
  )
}