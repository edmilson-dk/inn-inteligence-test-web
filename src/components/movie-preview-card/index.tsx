import { FiStar } from "react-icons/fi";

import BannerNotFoundPng from "src/assets/banner-notfound.png";
import { MoviePreviewCardProps } from "./types";
import { MoviePreviewCardContent, MoviePreviewCardWrapper } from "src/styles/components/movie-preview-card";

export function MoviePreviewCard({ data, displayInfosClick }: MoviePreviewCardProps) {
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
          <time>Year: {data.year}</time>
        </article>

        <footer>
          <button type="button">
            <span>
              <FiStar size="100%" />
            </span>
          </button>
        </footer>
      </MoviePreviewCardContent>
    </MoviePreviewCardWrapper>
  )
}