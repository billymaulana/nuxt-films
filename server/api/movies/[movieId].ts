const key = process.env.THE_MOVIE_DB_KEY || "7b082dd464ef4fd2369fdc571c5559f6";

export default defineEventHandler((event) => {
  const movieId = event.context.params.movieId;

  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=id-ID&append_to_response=videos`
  ).then((r) => r.json());
});
