export interface IMovie {
  id?: number
  rating: number
  status?: boolean
  title: string
  director?: string
  image: string
  year?: string
}

export interface IMovieData {
  movies: IMovie[]
}
export interface Irating {
  rating: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  getRaiting?: any
  bookId?: string
}
export interface IFileStatus {
  moviesToWatch: IMovie[]
  watchedMovies: IMovie[]
  data: IMovie[]
}
