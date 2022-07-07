const key = process.env.THE_MOVIE_DB_KEY || '7b082dd464ef4fd2369fdc571c5559f6';

export default defineEventHandler((event) => {
  return fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${key}`).then(r => r.json())
})