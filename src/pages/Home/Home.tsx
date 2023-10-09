/* eslint-disable @typescript-eslint/no-explicit-any */
import './style.scss'

import { IFileStatus, IMovie } from '../../Types/Type'
import { Card } from '../../Components/Card/Card'
import { useEffect, useState } from 'react'
import { AddMovieModal } from '../../Components/Modal/AddMovieModal'
import { WantToSee } from '../../Components/WantToSee/WantToSee'
import notFounf from '../../assets/notFound.jpeg'
import React from 'react'
import { useLoaderData, useNavigate } from 'react-router-dom'
const Home = () => {
  const [filters, setFilters] = useState<any>(0)

  const [isAddMovie, setIsAddMovie] = useState<boolean>(false)

  const { moviesToWatch, watchedMovies, data } = useLoaderData() as IFileStatus
  useEffect(() => {}, [filters, data])
  const navigate = useNavigate()
  return (
    <div className="home">
      <div className="home_priview">
        <WantToSee movies={moviesToWatch} />
      </div>{' '}
      <div className="home_wrapper">
        <div className="home_wonttosee-title">
          <p>Хочу посмотреть</p>
          <button className="home_add" onClick={() => setIsAddMovie(true)}>
            <i className="fa-solid fa-plus"></i> Добавить фильм
          </button>
          <select
            className="home_select"
            name="Category"
            onChange={(e) => {
              const selectedYear = e.target.value
              setFilters(selectedYear) // Обновляем фильтр в состоянии
              navigate(`/movies/filter/${selectedYear}`)
            }}
          >
            <option value="0">All</option>
            {data.map((category: IMovie) => {
              return (
                !category.status && (
                  <option key={category.id} value={category.year}>
                    {category.year}
                  </option>
                )
              )
            })}
          </select>
        </div>
        <div className="home_to-see">
          {watchedMovies.map((film: IMovie) => (
            <Card
              key={film.id}
              image={film.image ? film.image : notFounf}
              status={film.status}
              title={film.title}
              rating={0}
              id={film.id}
              year={film.year}
            />
          ))}
        </div>
        <div className="home_see-title">
          <p>Посмотрел</p>
        </div>
        <div className="home_to-see">
          {moviesToWatch.map((film: IMovie) => (
            <Card
              key={film.id}
              image={film.image ? film.image : notFounf}
              status={film.status}
              title={film.title}
              rating={film.rating}
              id={film.id}
              year={film.year}
            />
          ))}
        </div>
        {isAddMovie && <AddMovieModal setVisibleModal={setIsAddMovie} />}
        AddMovieModal
      </div>
    </div>
  )
}

export default React.memo(Home)
