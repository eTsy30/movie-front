/* eslint-disable @typescript-eslint/no-explicit-any */

import { instance } from '../../api/axios.api'
import { IMovie } from '../../Types/Type'

export const moviesLoader = async (params: any) => {
  let watchedMovies = null
  let moviesToWatch = null
  if (+params.params.param > 0) {
    const { data } = await instance.get<IMovie[]>(
      `/movies/filter?year=${+params.params.param}`
    )
    watchedMovies = data.filter((film) => film.status === false)
  } else {
    const { data } = await instance.get<IMovie[]>('/movies')
    watchedMovies = data.filter((film) => film.status === false)
  }
  const { data } = await instance.get<IMovie[]>('/movies')
  moviesToWatch = data.filter((film) => film.status === true)
  return { moviesToWatch, watchedMovies, data }
}
