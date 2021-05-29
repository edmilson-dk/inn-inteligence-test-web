import { FiX } from "react-icons/fi";

import BannerNotFoundPng from "src/assets/banner-notfound.png";

import { MovieInfosModalProps } from "./types";
import { MovieInfosModalWrapper, MovieInfosModalContent } from "src/styles/components/movie-infos-modal";

export function MovieInfosModal({ data, closeModalClick }: MovieInfosModalProps) {
  const gender = data.genre.trim().split(",");
  const writer = data.writer.trim().length > 130
    ? data.writer.slice(0, 130) + "...etc"
    : data.writer;

  const actors = data.actors.trim().length > 130
    ? data.actors.slice(0, 130) + "...etc"
    : data.actors;

  return (
    <MovieInfosModalWrapper>
      <MovieInfosModalContent>
        <button onClick={closeModalClick} id="btn-close-modal">
          <span>
            <FiX size="100%" />
          </span>
        </button>
        <header id="header">
          <img
            src={data.poster === "N/A" ? BannerNotFoundPng : data.poster}
            alt={data.poster === "N/A" ? "https://br.freepik.com/vetores/abstrato" : "Movie banner"}
          />
        </header>
        <section>
          <h3>{data.title}</h3>

          <article>
            <p>
              <strong>Director:</strong>
              {data.director}
            </p>
            <p>
              <strong>Writer(s):</strong>
              {writer}
            </p>
            <p>
              <strong>Actors:</strong>
              {actors}
            </p>
            <p>
              <strong>Plot:</strong>
              {data.plot}
            </p>
            <p>
              <strong>Language:</strong>
              {data.language}
            </p>
            <p>
              <strong>Released:</strong>
              {data.released}
            </p>
            <p>
              <strong>Runtime:</strong>
              {data.runtime}
            </p>
          </article>

          <footer>
            <div>
              {
                gender.map(item => (
                  <strong className="flex-center" key={item}>{item}</strong>
                ))
              }
            </div>
          </footer>
        </section>
      </MovieInfosModalContent>
    </MovieInfosModalWrapper>
  )
}