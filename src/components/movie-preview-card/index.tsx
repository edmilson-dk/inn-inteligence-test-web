import BannerNotFoundPng from "src/assets/banner-notfound.png";
import { MoviePreviewCardProps } from "./types";
import { MoviePreviewCardContent, MoviePreviewCardWrapper } from "src/styles/components/movie-preview-card";

export function MoviePreviewCard({ data, displayInfosClick, buttonActionClick, buttonIcon }: MoviePreviewCardProps) {
  return (
    <MoviePreviewCardWrapper>
      <header onClick={() => displayInfosClick(data.id)}>
        <img
          src={data.poster === "N/A" ? BannerNotFoundPng : data.poster}
          alt={data.poster === "N/A" ? "https://br.freepik.com/vetores/abstrato" : "Movie banner"}
        />
      </header>

      <MoviePreviewCardContent>
        <article onClick={() => displayInfosClick(data.id)}>
          <h3>{data.title}</h3>
          <span>Type: {data.type[0].toUpperCase() + data.type.substr(1)}</span>
          <time>Year: {data.year ?? data.released}</time>
        </article>

        <footer>
          <button type="button" onClick={buttonActionClick}>
            <span>
             { buttonIcon }
            </span>
          </button>
        </footer>
      </MoviePreviewCardContent>
    </MoviePreviewCardWrapper>
  )
}