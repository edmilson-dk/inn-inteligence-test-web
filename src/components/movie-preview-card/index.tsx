import { FiStar } from "react-icons/fi";

import { MoviePreviewCardProps } from "./types";
import BannerNotFoundPng from "src/assets/banner-notfound.png";
import { MoviePreviewCardContent, MoviePreviewCardWrapper } from "src/styles/components/movie-preview-card";

export function MoviePreviewCard({ data }: MoviePreviewCardProps) {
  return (
    <MoviePreviewCardWrapper>
      <header>
        <img 
          src={data.poster === "N/A" ? BannerNotFoundPng : data.poster} 
          alt={data.poster === "N/A" ? "https://br.freepik.com/vetores/abstrato" : "Movie banner"}
        />
      </header>

      <MoviePreviewCardContent>
        <article>
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